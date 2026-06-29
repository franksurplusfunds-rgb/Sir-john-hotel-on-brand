import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../router';
import { FACILITIES } from '../data/pages';

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Facilities() {
  const headerRef = useReveal<HTMLDivElement>();
  const [hero, ...rest] = FACILITIES;

  return (
    <section id="facilities" className="bg-dark-900 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="section-subtitle">On-Site Amenities</span>
          <div className="gold-divider" />
          <h2 className="section-title text-white mt-4">
            Our <em className="text-gold-400 not-italic">Facilities</em>
          </h2>
          <p className="mt-6 text-white/50 font-sans font-light max-w-2xl mx-auto text-sm leading-relaxed">
            Everything you need for a complete retreat — sport, relaxation, food, and entertainment —
            all within the Sir John grounds.
          </p>
        </div>

        {/* Hero facility — full-width */}
        <RevealCard delay={0}>
          <Link
            to={`/${hero.slug}/`}
            className="activity-card group relative overflow-hidden block mb-4"
            style={{ height: '420px' }}
          >
            <img
              src={hero.cardImage}
              alt={hero.title}
              className="activity-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-14">
              <div className="max-w-xl">
                <p className="section-subtitle text-gold-400 text-[10px] tracking-[0.3em] mb-3"> Cabins </p>
                <h3 className="font-serif text-4xl md:text-5xl font-light text-white mb-3 group-hover:text-gold-300 transition-colors duration-400 leading-tight">
                  {hero.title}
                </h3>
                <p className="text-white/55 font-sans text-sm font-light leading-relaxed mb-6 max-w-md line-clamp-2">
                  {hero.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold-500 font-medium font-sans">
                  Explore Camping Grounds <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </Link>
        </RevealCard>

        {/* Remaining 6 facilities: 3-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((facility, i) => (
            <RevealCard key={facility.slug} delay={Math.floor(i / 3) * 60 + 60}>
              <Link
                to={`/${facility.slug}/`}
                className="activity-card group relative overflow-hidden block h-64"
              >
                <img
                  src={facility.cardImage}
                  alt={facility.title}
                  className="activity-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Default state */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-xl font-light text-white mb-1.5 group-hover:text-gold-400 transition-colors duration-400">
                    {facility.title}
                  </h3>
                  <div className="h-px bg-gold-500 w-6 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Hover state */}
                <div className="activity-card-overlay absolute inset-0 bg-dark-900/86 backdrop-blur-[2px] flex flex-col justify-end p-5 opacity-0 transition-opacity duration-400">
                  <p className="section-subtitle text-gold-500 text-[9px] tracking-[0.3em] mb-2">Facility</p>
                  <h3 className="font-serif text-xl font-light text-gold-400 mb-2">{facility.title}</h3>
                  <p className="text-white/55 font-sans text-xs leading-relaxed mb-4 line-clamp-3">{facility.description}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold-500 font-medium font-sans">
                    Find Out More <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            </RevealCard>
          ))}
        </div>

      </div>
    </section>
  );
}
