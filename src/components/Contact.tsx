import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { personal } from "@/data/portfolio";
import { SectionTitle } from "@/components/About";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="section-glow-top-left relative py-16 lg:py-24 border-t border-white/8 bg-[#0D121C]/30"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 lg:px-8 reveal ${visible ? "visible" : ""}`}
      >
        <SectionTitle title="Contact" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 mt-12">
          {/* Left — info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white leading-snug">
              Let's talk about your backend.
            </h3>
            <p className="text-[15px] text-white/55 leading-relaxed font-body font-light">
              Whether you're scaling a data platform, building internal tooling,
              or improving an existing backend codebase — I'd like to hear about
              the problem.
            </p>

            <div className="flex flex-col gap-0">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: personal.phone,
                  href: `tel:${personal.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: personal.location,
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href || "#"}
                  className="group flex items-center gap-3 py-4 border-t border-white/8 hover:border-[#417E38]/30 transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#417E38]/15 border border-[#417E38]/20 text-[#417E38]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/30">
                      {label}
                    </span>
                    <span className="text-sm text-white/80">{value}</span>
                  </div>
                </a>
              ))}
              <div className="border-t border-white/8" />
            </div>

            <div className="flex gap-3 pt-2">
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
                  className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#0D121C] border border-white/10 text-white/50 hover:text-[#5a9e4f] hover:border-[#417E38]/40 transition-colors"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-6 lg:p-8 rounded-2xl bg-[#0D121C] border border-white/8"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-white/8">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-[#417E38]/80" />
                <span className="ml-2 font-mono text-xs text-white/30">
                  new_message.sh
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-white/30">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-black/40 border border-white/8 rounded-lg text-white text-[15px] px-4 py-3 focus:border-[#417E38] focus:outline-none transition-colors placeholder:text-white/20"
                  placeholder="Tanish Mohanta"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-white/30">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-black/40 border border-white/8 rounded-lg text-white text-[15px] px-4 py-3 focus:border-[#417E38] focus:outline-none transition-colors placeholder:text-white/20"
                  placeholder="tanish.mohanta@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-white/30">
                  What are you building?
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="bg-black/40 border border-white/8 rounded-lg text-white text-[15px] px-4 py-3 focus:border-[#417E38] focus:outline-none transition-colors resize-none placeholder:text-white/20"
                  placeholder="Tell me about the system you need help with..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-[14px] transition-all mt-2 ${
                  sent
                    ? "bg-[#417E38]/20 border border-[#417E38]/40 text-[#5a9e4f]"
                    : "bg-[#417E38] text-white hover:bg-[#5a9e4f]"
                }`}
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" /> Message sent — I'll be in
                    touch
                  </>
                ) : (
                  <>
                    Send message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
