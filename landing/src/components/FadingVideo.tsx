import { useEffect, useRef, useState, type CSSProperties } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: CSSProperties;
}

const FADE_IN_MS = 500;
const FADE_OUT_MS = 550;
const FADE_OUT_LEAD_S = 0.55;

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef(0);
  const fadingOutRef = useRef(false);
  const countRef = useRef(sources.length);
  countRef.current = sources.length;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fadeTo = (target: number, duration: number) => {
      cancelAnimationFrame(rafRef.current);
      const from = parseFloat(video.style.opacity || '0');
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        video.style.opacity = String(from + (target - from) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const onLoaded = () => {
      fadingOutRef.current = false;
      fadeTo(1, FADE_IN_MS);
    };
    const onTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (!fadingOutRef.current && Number.isFinite(remaining) && remaining <= FADE_OUT_LEAD_S) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_OUT_MS);
      }
    };
    const onEnded = () => {
      if (countRef.current > 1) {
        setIndex((i) => (i + 1) % countRef.current);
        return;
      }
      video.currentTime = 0;
      video.play().catch(() => {});
      fadingOutRef.current = false;
      fadeTo(1, FADE_IN_MS);
    };

    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    if (video.readyState >= 2) onLoaded();

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={sources[index % sources.length]}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}
