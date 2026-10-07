import { Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personal, navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="section-glow-right relative border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0D121C] border border-[#417E38]/40">
                <Terminal className="w-4.5 h-4.5 text-[#417E38]" />
              </span>
              <span className="text-white text-sm font-bold tracking-tight">
                Soren<span className="text-[#417E38]">.</span>Vinter
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed font-body">
              Backend Software Engineer building distributed systems that scale.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/25">
              Navigation
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-[#5a9e4f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/25">
              Elsewhere
            </span>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: personal.github, label: "GitHub" },
                {
                  icon: FaLinkedin,
                  href: personal.linkedin,
                  label: "LinkedIn",
                },
                { icon: FaTwitter, href: personal.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0D121C] border border-white/8 text-white/50 hover:text-[#5a9e4f] hover:border-[#417E38]/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-white/25">
            © {new Date().getFullYear()} {personal.name} — Backend Software
            Engineer
          </p>
          <p className="font-mono text-[11px] text-white/25 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#417E38] animate-pulse-dot" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
