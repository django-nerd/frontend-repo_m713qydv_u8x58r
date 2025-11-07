import Spline from '@splinetool/react-spline';
import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>Secure by Design • Zero Trust • AI-Powered Defense</span>
        </div>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Futuristic Cyber Security Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          I design and implement resilient security architectures, automate threat detection,
          and harden systems for modern enterprises.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-emerald-400 transition">
            Get in touch
          </a>
          <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
