import { useEffect, useRef } from 'react';
import { ArrowRight, Ticket } from 'lucide-react';
import { Link, useRouter } from '../router';
import { ACTIVITIES, EVENTS } from '../data/pages';

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

export default function Activities() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const featured = ACTIVITIES[2]; // Team Building — full-width

  return (
    <section id="activities" className="bg-dark-800 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="section-subtitle">What We Offer</span>
          <div className="gold-divider" />
          <h2 className="section-title text-white mt-4">
            Activities &amp; <em className="text-gold-400 not-italic">Experiences</em>
          </h2>
          <p className="mt-6 text-white/50 font-sans font-light max-w-2xl mx-auto text-sm leading-relaxed">
            From starlit evenings to sun-dappled trails, Sir John offers a carefully curated
            programme of experiences designed to nourish the body, calm the mind, and awaken the spirit.
          </p>
        </div>

        {/* Top row: 2 cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {ACTIVITIES.slice(0, 2).map((act, i) => (
            <RevealCard key={act.slug} delay={i * 80}>
              <ActivityCard activity={act} />
            </RevealCard>
          ))}
        </div>

        {/* Featured card: full width */}
        <RevealCard delay={160}>
          <Link
            to={`/${featured.slug}/`}
            className="activity-card group relative overflow-hidden block mb-4"
            style={{ height: '340px' }}
          >
            <img
              src={featured.cardImage}
              alt={featured.title}
              className="activity-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16 max-w-2xl">
              <p className="section-subtitle text-gold-400 text-[10px] tracking-[0.3em] mb-4">Featured Experience</p>
              <h3 className="font-serif text-4xl md:text-5xl font-light text-white mb-4 group-hover:text-gold-300 transition-colors duration-400 leading-tight">
                {featured.title}
              </h3>
              <p className="text-white/60 font-sans text-sm font-light leading-relaxed mb-6 max-w-md">
                {featured.description.slice(0, 160)}…
              </p>
              <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold-400 font-medium font-sans">
                Learn More <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        </RevealCard>

        {/* Bottom row: 2 cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {ACTIVITIES.slice(3).map((act, i) => (
            <RevealCard key={act.slug} delay={(i + 3) * 80}>
              <ActivityCard activity={act} />
            </RevealCard>
          ))}
        </div>

        {/* Events Section */}
        <div className="mt-32 pt-24 border-t border-white/8">
          <div ref={headerRef} className="reveal text-center mb-16">
            <span className="section-subtitle">Upcoming Ticketed</span>
            <div className="gold-divider" />
            <h2 className="section-title text-white mt-4">
              Special <em className="text-gold-400 not-italic">Events</em>
            </h2>
            <p className="mt-6 text-white/50 font-sans font-light max-w-2xl mx-auto text-sm leading-relaxed">
              Join us for exclusive events featuring entertainment, dining, and unforgettable moments at Sir John.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {EVENTS.map((event, i) => (
              <RevealCard key={event.id} delay={i * 80}>
                <EventCard event={event} />
              </RevealCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ActivityCard({ activity }: { activity: (typeof ACTIVITIES)[0] }) {
  return (
    <Link
      to={`/${activity.slug}/`}
      className="activity-card group relative overflow-hidden cursor-pointer block h-72 md:h-80"
    >
      <img
        src={activity.cardImage}
        alt={activity.title}
        className="activity-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      {/* Default: title at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif text-2xl font-light text-white mb-1.5 group-hover:text-gold-400 transition-colors duration-400">
          {activity.title}
        </h3>
        <div className="h-px bg-gold-500 w-8 group-hover:w-full transition-all duration-500" />
      </div>

      {/* Hover overlay */}
      <div className="activity-card-overlay absolute inset-0 bg-dark-900/85 backdrop-blur-[2px] flex flex-col justify-end p-6 opacity-0 transition-opacity duration-400">
        <p className="section-subtitle text-gold-500 text-[9px] tracking-[0.3em] mb-3">Activity</p>
        <h3 className="font-serif text-2xl font-light text-gold-400 mb-2">{activity.title}</h3>
        <p className="text-white/60 font-sans text-sm leading-relaxed mb-5 line-clamp-3">{activity.description}</p>
        <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold-500 font-medium font-sans">
          Discover More <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}

function EventCard({ event }: { event: (typeof EVENTS)[0] }) {
  const { navigate } = useRouter();

  const handleBuyTicket = () => {
    navigate(`/checkout/${event.slug}`);
  };

  return (
    <div className="activity-card group relative overflow-hidden block h-72 md:h-80">
      <img
        src={event.image}
        alt={event.title}
        className="activity-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      {/* Default: title at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-center gap-2 mb-2">
          <Ticket size={14} className="text-gold-400" strokeWidth={1.8} />
          <span className="text-[8px] tracking-[0.2em] uppercase text-gold-400 font-sans font-medium">Event</span>
        </div>
        <h3 className="font-serif text-2xl font-light text-white mb-1.5 group-hover:text-gold-400 transition-colors duration-400">
          {event.title}
        </h3>
        <div className="h-px bg-gold-500 w-8 group-hover:w-full transition-all duration-500" />
      </div>

      {/* Hover overlay */}
      <div className="activity-card-overlay absolute inset-0 bg-dark-900/85 backdrop-blur-[2px] flex flex-col justify-between p-6 opacity-0 transition-opacity duration-400">
        <div>
          <p className="section-subtitle text-gold-500 text-[9px] tracking-[0.3em] mb-3 flex items-center gap-2">
            <Ticket size={12} strokeWidth={2} /> Ticketed Event
          </p>
          <h3 className="font-serif text-2xl font-light text-gold-400 mb-2">{event.title}</h3>
          <p className="text-white/60 font-sans text-sm leading-relaxed mb-3 line-clamp-2">{event.date} • {event.time}</p>
          <p className="text-white/60 font-sans text-sm leading-relaxed line-clamp-2">{event.description.slice(0, 120)}…</p>
        </div>
        <button
          onClick={handleBuyTicket}
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold-500 font-medium font-sans hover:text-gold-300 transition-colors duration-300"
        >
          Buy Ticket <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
