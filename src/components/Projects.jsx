import { ExternalLink, Lock, Network, Scan } from 'lucide-react';

const projects = [
  {
    icon: Lock,
    title: 'Zero-Trust Rollout',
    desc: 'Enterprise-wide policy segmentation and continuous verification across 4K endpoints.',
    link: '#',
    tags: ['Zero Trust', 'MFA', 'Policy'],
  },
  {
    icon: Network,
    title: 'Cloud Guardrails',
    desc: 'Automated CIS benchmarks and IaC drift detection for multi-account AWS.',
    link: '#',
    tags: ['AWS', 'CIS', 'Terraform'],
  },
  {
    icon: Scan,
    title: 'Threat Hunting Platform',
    desc: 'Streamlined detections with noise reduction, boosting signal-to-noise by 63%.',
    link: '#',
    tags: ['SIEM', 'EDR', 'Automation'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Work</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            A snapshot of high-impact security initiatives and systems I delivered.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, title, desc, link, tags }) => (
            <article key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/30 hover:bg-white/10">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </span>
                <div>
                  <h3 className="text-white font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-white/60">{desc}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
                    {t}
                  </span>
                ))}
              </div>
              <a href={link} className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200">
                View details <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
