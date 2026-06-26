import { useEffect, useRef } from 'react';
import { CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, useRouter } from '../router';
import { getPageBySlug, ACTIVITIES, FACILITIES } from '../data/pages';

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function scrollToContact() {
  setTimeout(() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }, 400);
}

export default function DetailPage({ slug }: { slug: string }) {
  const { navigate, back } = useRouter();
  const page = getPageBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  if (!page) {
    return (
      <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center gap-6 px-6">
        <p className="font-serif text-4xl text-white/30 font-light">Page not found</p>
        <button onClick={() => navigate('/')} className="btn-gold text-[10px]">
          Back to Home
        </button>
      </div>
    );
  }

  const related = (page.category === 'activity' ? ACTIVITIES : FACILITIES)
    .filter(p => p.slug !== page.slug)
    .slice(0, 3);

  const contentRef = useReveal<HTMLDivElement>();
  const galleryRef = useReveal<HTMLDivElement>();
  const relatedRef = useReveal<HTMLDivElement>();

  const goHome = () => navigate('/');
  const goHomeContact = () => { navigate('/'); scrollToContact(); };

  return (
    <div className="min-h-screen bg-dark-900">

      {/* Sticky mini-nav */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-dark-900/97 backdrop-blur-md border-b border-white/6 flex items-center px-6 lg:px-10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <button
            onClick={back}
            className="flex items-center gap-2 text-white/50 hover:text-gold-400 transition-colors duration-300 text-[11px] tracking-[0.2em] uppercase font-sans"
          >
            <ArrowLeft size={14} strokeWidth={1.8} />
            Back
          </button>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/assets/images/logo.png" alt="Sir John" className="h-9 w-auto" />
            <span className="hidden sm:block font-serif text-base text-white tracking-wide">Sir John</span>
          </Link>
          <button onClick={goHomeContact} className="btn-gold text-[10px] py-2 px-5">
            Book Now
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={page.heroImage}
          alt={page.title}
          className="absolute inset-0 w-full h-full object-cover object-center ken-b-1"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 lg:left-10 z-10 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40 font-sans">
          <button onClick={goHome} className="hover:text-gold-400 transition-colors duration-300">Home</button>
          <ChevronRight size={10} />
          <button onClick={goHome} className="hover:text-gold-400 transition-colors duration-300">
            {page.category === 'activity' ? 'Activities' : 'Facilities'}
          </button>
          <ChevronRight size={10} />
          <span className="text-white/60">{page.title}</span>
        </div>

        {/* Hero text */}
        <div className="absolute inset-x-0 bottom-0 px-6 lg:px-10 pb-16 max-w-7xl mx-auto">
          <p className="section-subtitle text-gold-400 text-[10px] tracking-[0.35em] mb-4">
            {page.category === 'activity' ? 'Activity' : 'Facility'}
          </p>
          <div className="h-px bg-gold-500 w-10 mb-5" />
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight mb-3">
            {page.title}
          </h1>
          <p className="font-sans text-sm md:text-base text-white/60 tracking-[0.12em] uppercase font-light">
            {page.tagline}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div ref={contentRef} className="reveal grid lg:grid-cols-3 gap-16">

          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-light text-white mb-6 leading-snug">
              About <span className="text-gold-400">{page.title}</span>
            </h2>
            <p className="text-white/60 font-sans font-light leading-[1.9] text-sm md:text-base mb-10">
              {page.description}
            </p>
            <button onClick={goHomeContact} className="btn-gold-solid">
              {page.cta}
            </button>
          </div>

          {/* Highlights sidebar */}
          <div className="border border-white/8 p-8 h-fit">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-medium mb-6">
              What to Expect
            </p>
            <ul className="space-y-4">
              {page.highlights.map(h => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-gold-500 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                  <span className="text-white/60 font-sans text-sm font-light leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-sans mb-3">Ready to visit?</p>
              <button
                onClick={goHomeContact}
                className="text-gold-500 hover:text-gold-300 text-[10px] tracking-[0.25em] uppercase font-sans font-medium flex items-center gap-2 transition-colors duration-300"
              >
                Make an Enquiry <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="reveal mt-20">
          <div className="flex items-center gap-6 mb-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-medium">Gallery</p>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {page.gallery.map(g => (
              <div key={g.label} className="relative group overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={g.url}
                  alt={g.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                    {g.label}
                  </p>
                  <div className="h-px bg-gold-500 w-0 group-hover:w-8 transition-all duration-500 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div ref={relatedRef} className="reveal mt-24">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="section-subtitle">You Might Also Like</p>
                <div className="h-px bg-gold-500 w-10 mt-4" />
              </div>
              <button
                onClick={goHome}
                className="text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-gold-400 transition-colors duration-300 font-sans hidden sm:block"
              >
                View All
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map(r => (
                <Link
                  key={r.slug}
                  to={`/${r.slug}/`}
                  className="group relative overflow-hidden block"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={r.cardImage}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-xl font-light text-white group-hover:text-gold-400 transition-colors duration-300">
                      {r.title}
                    </h3>
                    <div className="h-px bg-gold-500 w-0 group-hover:w-8 transition-all duration-500 mt-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-white/6 py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-light text-white">{page.cta}</p>
            <p className="text-white/40 font-sans text-sm font-light mt-1">Contact us to check availability and rates.</p>
          </div>
          <button onClick={goHomeContact} className="btn-gold-solid flex-shrink-0">
            Make a Booking
          </button>
        </div>
      </div>
    </div>
  );
}
