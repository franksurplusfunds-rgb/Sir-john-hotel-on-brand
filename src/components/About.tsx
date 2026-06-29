import { useEffect, useRef } from 'react';
import { Award, Shield, Users, Trees } from 'lucide-react';

const PILLARS = [
  { icon: Award,   label: 'Excellence',    desc: 'We are commited to providing high qulaity service to our customers how ever we can.' },
  { icon: Shield,  label: 'Safety',        desc: 'Certified equipment, trained staff, and rigorous safety protocols.' },
  { icon: Users,   label: 'Community',     desc: 'A vibrant hub where families, teams, and individuals thrive together.' },
  { icon: Trees,    label: 'Serenity',     desc: 'A peaceful retreat for relaxation and rejuvenation.' },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const leftRef   = useReveal<HTMLDivElement>();
  const rightRef  = useReveal<HTMLDivElement>();
  const pillarsRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-dark-900 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-subtitle">Our Commitment</span>
          <div className="gold-divider" />
          <h2 className="section-title text-white mt-4 max-w-3xl mx-auto leading-tight">
            More Than a Centre —<br />
            <em className="text-gold-400 not-italic">An Experience</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

          {/* Image block */}
          <div ref={leftRef} className="reveal-left relative">
            <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/38302159/pexels-photo-38302159.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Sir John Sports Centre facilities"
                className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-10 bg-dark700 border border-gold-500/20 px-8 py-6 shadow-2xl">
              <p className="font-serif text-5xl font-light text-gold-400 leading-none">15+</p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans mt-2">
                Facilities<br />Available
              </p>
            </div>
          </div>

          {/* Text block */}
          <div ref={rightRef} className="reveal-right lg:pl-8">
            <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-6 leading-snug">
              Join us <br />
              <span className="text-gold-400">Outdoor Adventures</span>
            </h3>
            <p className="text-white/60 font-sans font-light leading-relaxed text-sm md:text-base mb-6">
             Nestled in the heart of Gachoka, Embu County, Sir John Resort is where nature, comfort, and 
             adventure come together. Whether you're planning a family getaway, corporate retreat, or peaceful
             escape, enjoy elegant accommodation, breathtaking scenery, and unforgettable experiences.

            </p>
            

            {/* Stats row */}
            <div className="flex gap-10 border-t border-white/10 pt-8">
              {[
                { val: '50+',  label: 'Acres' },
                { val: '10+',     label: 'Activities' },
                { val: '3 yrs',  label: 'Of Excellence' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-serif text-3xl font-light text-gold-400">{s.val}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-sans mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Four pillars */}
        <div ref={pillarsRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group border border-white/8 hover:border-gold-500/40 p-8 transition-all duration-500 hover:bg-dark-700/30"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-gold-500/30 mb-6 group-hover:border-gold-500 group-hover:bg-gold-500/5 transition-all duration-500">
                <Icon size={18} className="text-gold-500" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl font-light text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {label}
              </h4>
              <p className="text-white/50 font-sans text-sm font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
