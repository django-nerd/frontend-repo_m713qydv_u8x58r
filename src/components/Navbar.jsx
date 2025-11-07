import { useState, useEffect } from 'react';
import { Shield, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30">
              <Shield className="h-5 w-5 text-emerald-400" />
            </span>
            <span className="font-semibold tracking-wide">CyberGuard</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex p-2 rounded-md hover:bg-white/5 transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-white/80" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex p-2 rounded-md hover:bg-white/5 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white/80" />
            </a>
            <a href="#contact" className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-md bg-emerald-500/90 px-3 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition">
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
