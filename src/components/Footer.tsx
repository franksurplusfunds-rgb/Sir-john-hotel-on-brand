import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

const FOOTER_LINKS = {
  Explore: ['About Us', 'Activities', 'Facilities', 'Membership', 'Events'],
  Services: ['Swimming Pool', 'Volley ball', 'Play Ground', 'Restaurant'],
  Support: ['FAQs', 'Book a Facility', 'Corporate Packages', 'Contact Us', 'Privacy Policy'],
};

const SOCIALS = [
  { icon: Facebook,  label: 'Facebook',  href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter,   label: 'Twitter',   href: '#' },
  { icon: Youtube,   label: 'YouTube',   href: '#' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark-900 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Main footer grid */}
        <div className="py-16 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/images/logo.png"
                alt="Sir John"
                className="h-14 w-auto"
              />
              <div>
                <p className="font-serif text-lg text-white tracking-wide">Sir John</p>
                <p className="text-[9px] tracking-[0.22em] uppercase text-gold-500 font-sans font-medium">
                  Sports &amp; Recreational Centre
                </p>
              </div>
            </div>
            <p className="text-white/40 font-sans font-light text-sm leading-relaxed mb-8 max-w-xs">
              A perfect destination for sport, wellness, and relaxation . Built for champions.
              Open to everyone.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
                >
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-medium mb-5">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/80 font-sans text-sm font-light transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 font-sans text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Sir John Sports &amp; Recreational Centre. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-gold-400 transition-colors duration-300 font-sans group"
            aria-label="Back to top"
          >
            Back to Top
            <div className="w-7 h-7 border border-white/10 flex items-center justify-center group-hover:border-gold-500 transition-colors duration-300">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
