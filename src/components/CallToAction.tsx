import { useEffect, useRef } from 'react';

export default function CallToAction() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sir John Sports Centre"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/60 to-dark-900/30" />
      </div>

      {/* Content */}
      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="section-subtitle">No Fear, Only Fun</span>
          <div className="my-5 h-px bg-gold-500 w-12" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Start Your Journey<br />
            <em className="text-gold-400 not-italic">at Sir John Today</em>
          </h2>
          <p className="text-white/60 font-sans font-light leading-relaxed text-sm md:text-base mb-10 max-w-lg">
            Pack your kit and step into a world of sporting excellence. Whether you're here to
            train hard, relax deeply, or somewhere in between — we're ready to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold-solid"
            >
              Book a Visit
            </button>
            <button
              onClick={() => document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold"
            >
              Explore Activities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
