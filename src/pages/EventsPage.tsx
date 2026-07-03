import { useRouter } from '../router';
import { EVENTS } from '../data/pages';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function EventsPage() {
  const { navigate } = useRouter();

  const handleBuyTicket = (eventSlug: string) => {
    navigate(`/checkout/${eventSlug}`);
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-6 mb-8">
          <h1 className="font-serif text-5xl font-light text-white">
            Events
          </h1>
          <div className="h-px flex-1 bg-white/8" />
        </div>
        <p className="text-white/60 font-sans text-lg font-light max-w-2xl">
          Discover and join our exciting events at Sir John Hotel. From pool parties to outdoor movie nights, we have unforgettable experiences waiting for you.
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {EVENTS.map(event => (
            <div
              key={event.id}
              className="group border border-white/8 hover:border-gold-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Event Details */}
              <div className="p-8 bg-dark-900">
                {/* Title & Tagline */}
                <h2 className="font-serif text-3xl font-light text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {event.title}
                </h2>

                {/* Event Meta */}
                <div className="space-y-3 mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-center gap-3 text-white/60 font-sans text-sm">
                    <Calendar size={16} className="text-gold-500" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 font-sans text-sm">
                    <MapPin size={16} className="text-gold-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 font-sans text-sm">
                    <Users size={16} className="text-gold-500" />
                    <span>Capacity: {event.capacity} guests</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 font-sans text-sm font-light leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-sans font-medium mb-3">
                    Highlights
                  </h3>
                  <ul className="space-y-2">
                    {event.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-white/60 font-sans text-sm font-light flex items-start gap-2">
                        <span className="text-gold-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Preview */}
                <div className="bg-dark-800 rounded p-4 mb-6">
                  <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-sans font-medium mb-2">
                    Ticket Pricing
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {event.ticketCategories.map(category => (
                      <div key={category.name}>
                        <p className="text-white/50 font-sans text-xs font-light">{category.name}</p>
                        <p className="text-white font-sans font-medium">
                          {category.currency} {category.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBuyTicket(event.slug)}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-dark-900 font-sans font-medium py-3 px-4 transition-all duration-300 uppercase text-sm tracking-wide"
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
