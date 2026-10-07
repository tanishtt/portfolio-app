import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 120;
      navLinks.forEach((l) => {
        const sec = document.querySelector(l.href);
        if (sec && sec instanceof HTMLElement) {
          if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            setActive(l.href);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/8'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0D121C] border border-[#417E38]/40">
            <Terminal className="w-4.5 h-4.5 text-[#417E38]" />
          </span>
          <span className="text-white text-sm font-bold tracking-tight">
            Soren<span className="text-[#417E38]">.</span>Vinter
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? 'text-[#5a9e4f]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg bg-[#417E38] text-white font-medium hover:bg-[#5a9e4f] transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/8">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-white/60 hover:text-[#5a9e4f] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-sm px-3 py-2.5 rounded-lg bg-[#417E38] text-white font-medium text-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
