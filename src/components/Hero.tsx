import { useState, useEffect } from "react";
import { Download, Mail, Phone, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { personal } from "@/data/portfolio";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = personal.roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        30,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % personal.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="section-glow-right relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#417E38]/15 blur-[140px] animate-drift pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-[#2c682c]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full py-20">
        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Terminal prompt */}
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-[#417E38]">visitor@tanish-mohanta</span>
            <span className="text-white/30">:</span>
            <span className="text-white/50">~</span>
            <span className="text-white/30">$</span>
            <span className="text-white/80">./welcome.sh</span>
            <span className="animate-blink text-[#417E38]">▋</span>
          </div>

          {/* Greeting */}
          <div className="flex flex-col gap-3">
            <p className="text-lg text-white/60 font-light">Hey folks, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              {personal.firstName}{" "}
              <span className="text-[#417E38]">{personal.lastName}</span>
            </h1>
          </div>

          {/* Typing roles */}
          <div className="flex items-center gap-2 h-8">
            <span className="text-xl lg:text-2xl font-semibold text-white/90">
              {displayed}
            </span>
            <span className="animate-blink text-[#417E38] text-xl lg:text-2xl">
              |
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl font-light font-body">
            {personal.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={personal.resumeUrl}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#417E38] text-white font-medium text-sm hover:bg-[#5a9e4f] transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume (CV)
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 rounded-lg border border-white/15 text-white font-medium text-sm hover:border-[#417E38] hover:text-[#5a9e4f] transition-colors group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {[
              { icon: FaLinkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
              {
                icon: Phone,
                href: `tel:${personal.phone.replace(/\s/g, "")}`,
                label: "Phone",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-[#5a9e4f] transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-2 pt-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#417E38] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#417E38]"></span>
            </span>
            <span className="text-sm text-white/50">
              {personal.availability}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
