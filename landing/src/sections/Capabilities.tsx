import { motion } from 'framer-motion';
import FadingVideo from '../components/FadingVideo';
import { BoltIcon, EcoIcon, EngineIcon } from '../components/icons';

const CAP_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4';

const PRODUCTS = [
  {
    title: 'Diesel Engines',
    Icon: EngineIcon,
    tags: ['Up to 1000 kW', 'CPCB IV+', 'Common Rail', 'ICAT'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ffcc489c-1766472398367.png',
    alt: 'GB-DG750 industrial diesel engine with silver metallic finish',
    model: 'GB-DG750 · GB-DG1000',
    body: 'High-output industrial engines with advanced fuel injection and optimised combustion — built for emission compliance, fuel economy, and extended service intervals.',
  },
  {
    title: 'Generator Sets',
    Icon: BoltIcon,
    tags: ['25–1250 kVA', '24/7 Prime', 'Remote Monitoring', 'ARAI'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5dddc0b-1767120189646.png',
    alt: 'GB-GS500 industrial generator set with green housing and control panel',
    model: 'GB-GS500 · GB-GS1250',
    body: 'Continuous and standby power with integrated emission control, automatic load management, and live telemetry for plants that cannot afford a dark minute.',
  },
  {
    title: 'Retrofit RECD',
    Icon: EcoIcon,
    tags: ['Up to 90% PM Cut', 'Universal Fit', '4–6 hr Install', 'CPCB'],
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c89268f4-1767097185182.png',
    alt: 'GB-RECD-300 stainless steel retrofit emission control device',
    model: 'GB-RECD-300',
    body: 'Retrofit emission control devices that bring existing diesel fleets up to current norms — no engine replacement, minimal downtime, certified results.',
  },
];

const inView = (delay = 0) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
});

export default function Capabilities() {
  return (
    <section id="products" className="relative min-h-screen overflow-hidden bg-black">
      <FadingVideo src={CAP_VIDEO} className="absolute inset-0 w-full h-full object-cover z-0" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <motion.header {...inView()} className="mb-auto">
          <p className="text-sm font-body text-white/80 mb-6">// Products</p>
          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Power systems,
            <br />
            built end to end
          </h2>
        </motion.header>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map(({ title, Icon, tags, image, alt, model, body }, i) => (
            <motion.article key={title} {...inView(0.15 * i)} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass h-11 w-11 shrink-0 rounded-[0.75rem] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 my-6 group relative overflow-hidden rounded-[0.9rem] min-h-[180px] bg-white/[0.03]">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute left-3 bottom-3 text-[11px] font-body tracking-wide text-white/90">{model}</span>
              </div>

              <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">{title}</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
