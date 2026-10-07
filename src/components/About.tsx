import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personal } from "@/data/portfolio";
import { Quote } from "lucide-react";

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="about"
      className="section-glow-top-left relative py-16 lg:py-24 border-t border-white/8"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 reveal ${visible ? "visible" : ""}`}
      >
        <SectionTitle title="About Me" />
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          {/* Profile image */}
          <div className="lg:col-span-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#417E38]/10 blur-[40px] rounded-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0D121C] p-1.5 overflow-hidden">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0D121C] to-[#1a2330] flex items-center justify-center relative overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 right-0 h-px bg-[#417E38]"></div>
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-[#417E38]/50"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-[#417E38]/30"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-px bg-[#417E38]/20"></div>
                  </div>
                  <div className="flex flex-col items-center gap-4 text-center px-6">
                    <div className="w-24 h-24 rounded-full bg-[#417E38]/20 border-2 border-[#417E38]/40 flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#417E38]">
                        SV
                      </span>
                    </div>
                    <p className="text-sm text-white/40 font-mono">
                      [ profile.jpg ]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-white">
              {personal.aboutTitle}
            </h3>

            {personal.aboutBio.map((para, i) => (
              <p
                key={i}
                className="text-base text-white/60 leading-[1.9] font-body font-light"
              >
                {para}
              </p>
            ))}

            {/* Quote block */}
            <div className="relative mt-4 p-6 rounded-xl bg-[#0D121C] border border-white/8">
              <Quote className="absolute top-4 left-4 w-5 h-5 text-[#417E38]/40" />
              <p className="text-base text-white/70 italic leading-relaxed pl-8 font-body">
                {personal.aboutQuote}
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <span className="text-[#417E38]">—</span> {personal.location}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#417E38]">—</span> Currently at{" "}
                {personal.currentCompany}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#417E38]">—</span>{" "}
                {personal.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-white/30">{num}</span>
      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">
        {label}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0D121C] border border-[#417E38]/30">
        <span className="text-[#417E38] font-mono text-sm">/</span>
      </span>
      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}
