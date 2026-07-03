import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Activities',    href: '#activities' },
  { label: 'Facilities',    href: '#facilities' },
  { label: 'Contact',       href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActive]   = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-dark-900/97 backdrop-blur-md shadow-[0_1px_0_rgba(201,168,76,0.15)]'
            : 'bg-gradient-to-b from-black/70 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <a
              href="#home"
              onClick={e => { e.preventDefault(); handleNav('#home'); }}
              className="flex items-center gap-3 flex-shrink-0 group"
            >
              <img
                src="/assets/images/logo.png"
                alt="Sir John"
                className="h-12 lg:h-14 w-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <p className="font-serif text-lg leading-tight text-white tracking-wide">Sir John</p>
                <p className="text-[9px] tracking-[0.22em] uppercase text-gold-500 font-sans font-medium">
                  Sports &amp; Recreational Centre
                </p>
              </div>
            </a>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`relative text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 pb-0.5 group ${
                      activeLink === link.href ? 'text-gold-400' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-gold-500 transition-all duration-300 ${
                        activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+254700000000"
                className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gold-400 hover:text-gold-300 transition-colors duration-300"
              >
                <Phone size={13} strokeWidth={1.8} />
                <span>Book Now</span>
              </a>
              <button
                onClick={() => handleNav('#activities')}
                className="hidden md:inline-flex btn-gold text-[10px] py-2.5 px-6"
              >
                Events
              </button>
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="lg:hidden text-white/80 hover:text-gold-400 transition-colors duration-300 p-1"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? 'max-h-[420px] border-t border-gold-500/10' : 'max-h-0'
          } bg-dark-900/98 backdrop-blur-md`}
        >
          <ul className="px-6 py-6 space-y-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left py-3 text-[11px] tracking-[0.25em] uppercase font-medium border-b border-white/5 transition-colors duration-300 ${
                    activeLink === link.href ? 'text-gold-400' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
