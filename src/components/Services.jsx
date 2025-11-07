import { Shield, KeyRound, Lock, Server, Bug, Cloud } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Security Architecture',
    desc: 'Designing zero-trust, defense-in-depth architectures aligned with NIST and ISO27001.',
  },
  {
    icon: KeyRound,
    title: 'Identity & Access',
    desc: 'Implementing SSO, MFA, and least-privilege policies across cloud and on-prem.',
  },
  {
    icon: Lock,
    title: 'Application Hardening',
    desc: 'Secure SDLC, code reviews, and secret management integrated into CI/CD.',
  },
  {
    icon: Server,
    title: 'Infrastructure Security',
    desc: 'Kubernetes, containers, and servers hardened with automated baselines.',
  },
  {
    icon: Bug,
    title: 'Threat Detection',
    desc: 'SIEM, EDR, and anomaly detection with actionable, noise-free alerts.',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'Guardrails and compliance for AWS, Azure, and GCP environments.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Capabilities</h2>
            <p className="mt-2 text-white/60 max-w-2xl">
              Practical security with measurable outcomes. I integrate with teams, automate, and deliver.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-500/20 transition">
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/30 hover:bg-white/10">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </span>
                <div>
                  <h3 className="text-white font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-white/60">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
