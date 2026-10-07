import { useScrollReveal } from '@/hooks/useScrollReveal';
import { education, writing } from '@/data/portfolio';
import { SectionLabel } from '@/components/About';
import { BookOpen, PenLine } from 'lucide-react';

export default function Education() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="relative py-20 lg:py-28 grain border-t border-[var(--border)]">
      <div ref={ref} className={`max-w-6xl mx-auto px-5 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionLabel num="05" label="Education & Writing" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
          {/* Education */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-[var(--terracotta)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                Where I learned things
              </span>
            </div>

            <div className="flex flex-col">
              {education.map((edu, i) => (
                <div key={edu.institution}>
                  <div className="py-5">
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <h3 className="font-serif text-lg font-semibold text-[var(--ink)] tracking-tight leading-snug">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-xs text-[var(--terracotta)] font-bold shrink-0 pt-1">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-[15px] text-[var(--terracotta-light)] font-medium mb-2">{edu.degree}</p>
                    <p className="text-[14px] text-[var(--ink-muted)] leading-[1.65] max-w-xl">
                      {edu.detail}
                    </p>
                    <span className="font-mono text-[11px] text-[var(--ink-faint)] mt-2 block">
                      {edu.location}
                    </span>
                  </div>
                  {i < education.length - 1 && <div className="h-px bg-[var(--border)]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Writing */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[var(--border-light)]">
            <div className="flex items-center gap-2 mb-6">
              <PenLine className="w-4 h-4 text-[var(--terracotta)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-faint)]">
                Things I wrote down
              </span>
            </div>

            <div className="flex flex-col">
              {writing.map((post, i) => (
                <div key={post.title}>
                  <article className="group py-5 cursor-pointer">
                    <span className="font-mono text-[11px] text-[var(--ink-faint)]">{post.date}</span>
                    <h3 className="font-serif text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--terracotta)] transition-colors mt-1 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-[var(--ink-muted)] mt-1.5 leading-snug">
                      {post.summary}
                    </p>
                  </article>
                  {i < writing.length - 1 && <div className="h-px bg-[var(--border)]" />}
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 mt-5 font-mono text-xs text-[var(--terracotta)] hover:gap-3 transition-all"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
