import { motion } from 'framer-motion';
import FadingVideo from '../components/FadingVideo';
import BlurText from '../components/BlurText';
import { ArrowUpRight, ClockIcon, Play, ShieldCheckIcon } from '../components/icons';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4';

const NAV_LINKS = ['Products', 'Certifications', 'Services', 'Technology', 'Contact'];
const TRUST_MARKS = ['CPCB', 'ARAI', 'ICAT', 'ISO 9001', 'BS-VI'];

const blurIn = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
};
const reveal = (delay: number) => ({ ...blurIn, transition: { duration: 0.8, ease: 'easeOut', delay } });

const STATS = [
  { Icon: ClockIcon, value: '48 hrs', label: 'Average Lead Time on Standard Units' },
  { Icon: ShieldCheckIcon, value: '99.8%', label: 'Quality Pass Rate Across Every Line' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:h-screen overflow-hidden bg-black">
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      <div className="relative z-10 flex flex-col min-h-[100svh] md:h-full">
        <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
          <a href="#" aria-label="GreenBoy Industrial" className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
            <span className="font-heading italic text-2xl leading-none">g</span>
          </a>

          <div className="liquid-glass rounded-full px-1.5 py-1.5 hidden md:flex items-center">
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">
                {link}
              </a>
            ))}
            <a href="#contact" className="ml-1 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black font-body">
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="h-12 w-12" aria-hidden="true" />
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          <motion.div {...reveal(0.4)} className="liquid-glass rounded-full flex items-center gap-2.5 pl-1.5 pr-4 py-1.5">
            <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-black font-body">New</span>
            <span className="text-sm text-white/90 font-body">CPCB IV+ engine series now shipping — limited Q3 capacity</span>
          </motion.div>

          <div className="mt-6 max-w-3xl">
            <BlurText
              as="h1"
              text="Certified Power Engineered to Outlast Every Load"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
            />
          </div>

          <motion.p {...reveal(0.8)} className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight">
            GreenBoy Industrial designs and builds diesel engines, generator sets, and retrofit emission control
            systems. Government-approved, OEM-trusted, and tested to run around the clock without compromise.
          </motion.p>

          <motion.div {...reveal(1.1)} className="mt-6 flex items-center gap-6">
            <a href="#contact" className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium font-body">
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#products" className="flex items-center gap-2 text-sm font-medium font-body text-white/90 hover:text-white transition-colors">
              <Play className="h-3.5 w-3.5" />
              Watch Factory Tour
            </a>
          </motion.div>

          <motion.div {...reveal(1.3)} className="mt-8 flex justify-center gap-4">
            {STATS.map(({ Icon, value, label }) => (
              <div key={value} className="liquid-glass p-5 w-[calc(50vw-2rem)] max-w-[220px] md:w-[220px] rounded-[1.25rem] text-left">
                <Icon className="h-6 w-6 text-white/90" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">{value}</div>
                <div className="mt-2 text-xs text-white/80 font-body leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div {...reveal(1.4)} className="flex flex-col items-center gap-4 pt-6 pb-8 px-4">
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs md:text-sm text-white/90 font-body text-center">
            Certified and trusted by regulators, OEMs, and plant operators nationwide
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 sm:gap-12 md:gap-16">
            {TRUST_MARKS.map((mark) => (
              <span key={mark} className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/90">
                {mark}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
