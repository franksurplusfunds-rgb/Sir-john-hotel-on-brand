import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    url: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heading: 'World-Class Facilities',
    sub: 'Your Premier Sports & Recreational Destination',
    ken: 'ken-b-1',
  },
  {
    url: 'https://images.pexels.com/photos/1553957/pexels-photo-1553957.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heading: 'Excellence in Sport',
    sub: 'Train. Compete. Triumph.',
    ken: 'ken-b-2',
  },
  {
    url: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heading: 'Crafted for Champions',
    sub: 'Professional courts and arenas at your disposal',
    ken: 'ken-b-3',
  },
  {
    url: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heading: 'Relax & Rejuvenate',
    sub: 'Where performance meets tranquillity',
    ken: 'ken-b-4',
  },
  {
    url: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heading: 'Dine in Distinction',
    sub: 'Curated culinary experiences after every session',
    ken: 'ken-b-5',
  },
];

const SLIDE_DURATION = 6400;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [imgKey, setImgKey]   = useState(0);
  const [progKey, setProgKey] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setPrev(current);
      setCurrent(idx);
      setImgKey(k => k + 1);
      setProgKey(k => k + 1);
      setTimeout(() => {
        setPrev(null);
        setTextVisible(true);
      }, 200);
    }, 200);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const back = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-dark-900">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          aria-hidden={i !== current}
        >
          <img
            key={i === current ? imgKey : i}
            src={slide.url}
            alt={slide.heading}
            className={`hero-slide-img ${i === current ? slide.ken : ''}`}
            draggable={false}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
      ))}

      {/* Previous slide (fading out) */}
      {prev !== null && (
        <div className="hero-slide" style={{ opacity: 0 }} aria-hidden>
          <img src={SLIDES[prev].url} alt="" className="hero-slide-img" draggable={false} />
        </div>
      )}

      {/* Centre content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Eyebrow */}
        <div
          className="transition-all duration-700"
          style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(12px)' }}
        >
          <span className="section-subtitle text-gold-400 text-[10px] tracking-[0.35em]">
            Sir John Sports &amp; Recreational Centre
          </span>
        </div>

        {/* Thin gold line */}
        <div
          className="my-5 h-px bg-gold-500 transition-all duration-700 delay-100"
          style={{ width: textVisible ? '48px' : '0px', opacity: textVisible ? 1 : 0 }}
        />

        {/* Heading */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-wide max-w-4xl transition-all duration-700 delay-150"
          style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          {SLIDES[current].heading}
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 font-sans text-sm md:text-base text-white/70 tracking-[0.15em] uppercase font-light max-w-xl transition-all duration-700 delay-200"
          style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)' }}
        >
          {SLIDES[current].sub}
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300"
          style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)' }}
        >
          <button
            onClick={() => document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold-solid"
          >
            Explore Activities
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Make a Booking
          </button>
        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={back}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-400 transition-all duration-400 backdrop-blur-sm bg-black/20 hover:bg-black/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-500 hover:text-gold-400 transition-all duration-400 backdrop-blur-sm bg-black/20 hover:bg-black/40"
        aria-label="Next slide"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* Slide counter + progress bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group flex flex-col items-center gap-1.5"
          >
            <span className="text-[9px] tracking-[0.2em] text-white/40 group-hover:text-gold-400 transition-colors duration-300 font-sans">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="slide-progress group-hover:bg-white/40 transition-colors duration-300">
              <div
                key={i === current ? progKey : `${i}-idle`}
                className={`slide-progress-fill ${i === current ? 'running' : ''}`}
                style={i === current ? { '--slide-duration': `${SLIDE_DURATION}ms` } as React.CSSProperties : {}}
              />
              {i < current && (
                <div className="absolute inset-0 bg-gold-500" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
        <span className="text-[8px] tracking-[0.3em] text-white/30 uppercase rotate-90 origin-center mt-6 font-sans">Scroll</span>
      </div>
    </section>
  );
}
