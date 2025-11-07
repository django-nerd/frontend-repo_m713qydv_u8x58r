import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Let’s build secure systems</h2>
          <p className="mt-2 text-white/60">Tell me about your challenge and timeline.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input required className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" placeholder="jane@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea rows={4} required className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400/50" placeholder="Briefly describe your needs…" />
          </div>
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-white/60 text-sm">
              <Mail className="h-4 w-4" />
              <span>Response within 24 hours</span>
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-medium text-black hover:bg-emerald-400">
              Send <Send className="h-4 w-4" />
            </button>
          </div>
          {status && (
            <p className="text-center text-emerald-300/90">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
