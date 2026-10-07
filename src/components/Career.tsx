import { useScrollReveal } from '@/hooks/useScrollReveal';
import { career } from '@/data/portfolio';
import { SectionTitle } from '@/components/About';
import { GraduationCap } from 'lucide-react';

export default function Career() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="career" className="section-glow-right relative py-20 lg:py-28 border-t border-white/8 bg-[#0D121C]/30">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionTitle title="Career" />
        <p className="mt-4 text-white/40 text-sm font-body">
          Rooted in academic excellence and growth.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {career.map((item) => (
            <div
              key={item.name}
              className="group p-6 rounded-2xl bg-[#0D121C] border border-white/8 hover:border-[#417E38]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#417E38]/15 border border-[#417E38]/25 text-[#417E38] group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#417E38] font-bold">{item.period}</span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight leading-snug">{item.name}</h3>
              <p className="text-sm text-[#5a9e4f] font-medium mt-1">{item.degree}</p>
              <p className="text-sm text-white/50 leading-relaxed mt-3 font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
