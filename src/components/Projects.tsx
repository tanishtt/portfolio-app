import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/portfolio";
import { SectionTitle } from "@/components/About";
import { CheckCircle2, Code2, ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="section-glow-left relative py-20 lg:py-28 border-t border-white/8 bg-[#0D121C]/30"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 reveal ${visible ? "visible" : ""}`}
      >
        <SectionTitle title="Projects" />

        <p className="mt-4 text-white/40 text-sm font-body max-w-xl">
          Selected systems I have designed, shipped, and kept running in
          production.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl bg-[#0D121C] border border-white/8 overflow-hidden hover:border-[#417E38]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between px-5 pt-5">
                <Folder className="w-7 h-7 text-[#5a9e4f]" strokeWidth={1.8} />
                <div className="flex items-center gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code`}
                    className="text-white/50 hover:text-[#5a9e4f] transition-colors"
                  >
                    <Code2 className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    aria-label={`View ${project.name} live demo`}
                    className="text-white/50 hover:text-[#5a9e4f] transition-colors"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-5 pt-5 pb-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#5a9e4f] transition-colors">
                      {project.name}
                    </h3>
                    <p className="font-mono text-[11px] text-[#417E38] uppercase tracking-wider mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-white/25 shrink-0">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-white/55 leading-relaxed font-body font-light mt-4">
                  {project.description}
                </p>

                <div className="mt-5">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
                    Important functionalities
                  </h4>
                  <ul className="flex flex-col gap-2 mt-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[13px] text-white/60 leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#417E38] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-1 rounded-md bg-black/40 border border-white/8 text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4 text-[11px] text-[#5a9e4f]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#417E38]" />
                  {project.status}
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-white/8 bg-black/20">
                {project.metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`px-3 py-3 ${index > 0 ? "border-l border-white/8" : ""}`}
                  >
                    <p className="text-base font-bold text-[#417E38] leading-none">
                      {metric.value}
                    </p>
                    <p className="font-mono text-[9px] text-white/30 mt-1 leading-tight">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
