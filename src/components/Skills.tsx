import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skillGroups } from "@/data/portfolio";
import { SectionTitle } from "@/components/About";

const marqueeItems = [
  "Go",
  "PostgreSQL",
  "Kubernetes",
  "AWS",
  "Kafka",
  "gRPC",
  "Redis",
  "Terraform",
  "Rust",
  "Python",
  "Prometheus",
  "Docker",
  "ClickHouse",
  "OpenTelemetry",
  "Flink",
  "Raft",
];

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="section-glow-top-right relative py-16 lg:py-24 border-t border-white/8"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 reveal ${visible ? "visible" : ""}`}
      >
        <SectionTitle title="Skills" />

        <p className="mt-4 text-white/40 text-sm font-body max-w-xl">
          Clean grouped capabilities — no noise-heavy ratings, just what I
          actually ship with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl bg-[#0D121C] border border-white/8 hover:border-[#417E38]/25 transition-all"
            >
              <h3 className="text-base font-bold text-white tracking-tight mb-4">
                {group.title}
              </h3>
              <div className="h-px bg-white/6 mb-4" />
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] px-3 py-1.5 rounded-lg bg-black/40 border border-white/8 text-white/60 hover:text-[#5a9e4f] hover:border-[#417E38]/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-12 relative overflow-hidden border-t border-b border-white/8 py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-8 px-4 shrink-0">
                {marqueeItems.map((tech) => (
                  <span
                    key={`${dup}-${tech}`}
                    className="text-lg text-white/25 flex items-center gap-8 font-bold"
                  >
                    {tech}
                    <span className="text-[#417E38]/40 text-sm">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
