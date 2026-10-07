import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experience } from '@/data/portfolio';
import { SectionTitle } from '@/components/About';
import { Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="section-glow-center relative py-20 lg:py-28 border-t border-white/8">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionTitle title="Experience" />

        <div className="mt-12 flex flex-col gap-0">
          {experience.map((exp, i) => (
            <div key={exp.company}>
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-8">
                {/* Left: period */}
                <div className="lg:col-span-3 flex flex-col gap-2">
                  <span className="font-mono text-sm text-[#417E38] font-bold">{exp.period}</span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-white/40">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>

                {/* Right: content */}
                <div className="lg:col-span-9 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0D121C] border border-[#417E38]/25 shrink-0">
                      <Briefcase className="w-4.5 h-4.5 text-[#417E38]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <span className="text-[#5a9e4f] font-medium text-sm">{exp.company}</span>
                    </div>
                  </div>

                  <p className="text-[15px] text-white/55 leading-relaxed font-body font-light max-w-2xl">
                    {exp.description}
                  </p>

                  <ul className="flex flex-col gap-2 mt-1">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2.5 text-sm text-white/55 leading-snug">
                        <span className="text-[#417E38] mt-0.5 shrink-0">▹</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0D121C] border border-white/8 text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {i < experience.length - 1 && <div className="h-px bg-white/6" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
