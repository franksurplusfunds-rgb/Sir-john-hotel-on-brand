import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowLeft, MapPin, Users, Wifi, Droplet, Zap, Lock } from 'lucide-react';
import { Link, useRouter } from '../router';
import GalleryLightbox from '../components/GalleryLightbox';

export interface AccommodationRoomData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  mainImage: string;
  boardOptions: {
    name: string;
    price: string;
    description: string;
  }[];
  amenities: string[];
  features: string[];
  galleryImages: { url: string; label: string }[];
}

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

const AMENITY_ICONS: { [key: string]: React.ReactNode } = {
  'Free Wi-Fi': <Wifi size={20} />,
  'Free Bottled Water': <Droplet size={20} />,
  'Daily Housekeeping': <Zap size={20} />,
  'Soft Towels': <Lock size={20} />,
};

export default function AccommodationRoomPage({ room }: { room: AccommodationRoomData }) {
  const { navigate, back } = useRouter();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [room.slug]);

  const contentRef = useReveal<HTMLDivElement>();
  const boardRef = useReveal<HTMLDivElement>();
  const amenitiesRef = useReveal<HTMLDivElement>();
  const featuresRef = useReveal<HTMLDivElement>();
  const galleryRef = useReveal<HTMLDivElement>();

  const goHome = () => navigate('/');
  const goHomeContact = () => { navigate('/'); scrollToContact(); };
  const whatsappLink = `https://wa.me/254739149610?text=Hello, I'm interested in booking the ${room.title} at Sir John Hotel.`;

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
          <div className="flex items-center gap-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold text-[10px] py-2 px-5">
              WhatsApp
            </a>
            <button onClick={goHomeContact} className="btn-gold text-[10px] py-2 px-5">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden pt-16">
        <img
          src={room.heroImage}
          alt={room.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 lg:left-10 z-10 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40 font-sans">
          <button onClick={goHome} className="hover:text-gold-400 transition-colors duration-300">Home</button>
          <ChevronRight size={10} />
          <button onClick={goHome} className="hover:text-gold-400 transition-colors duration-300">Accommodation</button>
          <ChevronRight size={10} />
          <span className="text-white/60">{room.title}</span>
        </div>

        {/* Hero text */}
        <div className="absolute inset-x-0 bottom-0 px-6 lg:px-10 pb-16 max-w-7xl mx-auto">
          <p className="section-subtitle text-gold-400 text-[10px] tracking-[0.35em] mb-4">
            Accommodation
          </p>
          <div className="h-px bg-gold-500 w-10 mb-5" />
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight mb-3">
            {room.title}
          </h1>
          <p className="font-sans text-sm md:text-base text-white/60 tracking-[0.12em] uppercase font-light">
            {room.tagline}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        
        {/* Description */}
        <div ref={contentRef} className="reveal mb-20">
          <h2 className="font-serif text-3xl font-light text-white mb-6 leading-snug">
            About the <span className="text-gold-400">{room.title}</span>
          </h2>
          <p className="text-white/60 font-sans font-light leading-[1.9] text-sm md:text-base max-w-3xl mb-8">
            {room.description}
          </p>
        </div>

        {/* Board Options */}
        <div ref={boardRef} className="reveal mb-24">
          <div className="flex items-center gap-6 mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-medium">Board Options</p>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {room.boardOptions.map(board => (
              <div key={board.name} className="border border-white/8 p-8 hover:border-gold-500/30 transition-colors duration-300">
                <h3 className="font-serif text-2xl font-light text-white mb-2">{board.name}</h3>
                <div className="h-px bg-gold-500 w-10 mb-4" />
                <p className="text-white/60 font-sans font-light leading-[1.8] text-sm md:text-base mb-6">
                  {board.description}
                </p>
                <p className="text-gold-400 font-serif text-xl font-light mb-6">{board.price}</p>
                <button onClick={goHomeContact} className="text-gold-500 hover:text-gold-300 text-[10px] tracking-[0.25em] uppercase font-sans font-medium flex items-center gap-2 transition-colors duration-300">
                  Enquire <ChevronRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div ref={amenitiesRef} className="reveal mb-24">
          <div className="flex items-center gap-6 mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-medium">Amenities</p>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {room.amenities.map(amenity => (
              <div key={amenity} className="flex flex-col items-center text-center p-6 border border-white/8 hover:border-gold-500/30 transition-colors duration-300">
                <div className="text-gold-400 mb-3">
                  {AMENITY_ICONS[amenity] || <Wifi size={20} />}
                </div>
                <p className="text-white/70 font-sans text-sm font-light leading-snug">
                  {amenity}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="reveal mb-24">
          <div className="flex items-center gap-6 mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-medium">Room Features</p>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="border border-white/8 p-8">
            <ul className="space-y-4">
              {room.features.map(feature => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <span className="text-white/60 font-sans text-sm font-light leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div ref={galleryRef} className="reveal mb-24">
          <div className="flex items-center gap-6 mb-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-sans font-medium">Gallery</p>
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {room.galleryImages.map((img, idx) => (
              <button
                key={img.label}
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
                className="relative group overflow-hidden"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 font-sans translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                    {img.label}
                  </p>
                  <div className="h-px bg-gold-500 w-0 group-hover:w-8 transition-all duration-500 mt-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-white/6 py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-light text-white">Ready to Book Your Stay?</p>
            <p className="text-white/40 font-sans text-sm font-light mt-1">Contact us to check availability and rates.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold flex-shrink-0">
              Chat on WhatsApp
            </a>
            <button onClick={goHomeContact} className="btn-gold-solid flex-shrink-0">
              Make a Booking
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      {lightboxOpen && (
        <GalleryLightbox
          images={room.galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
