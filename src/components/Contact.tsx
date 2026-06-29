import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const HOURS = [
  { days: 'Monday – Friday', time: 'Activities: 6am – 9pm\nRestaurant: 7am – 10pm' },
  { days: 'Saturday',        time: 'Activities: 6am – 10pm\nRestaurant: 7am – 11pm' },
  { days: 'Sunday & Holidays', time: 'Activities: 7am – 8pm\nRestaurant: 7am – 9pm' },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
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
  return ref;
}
//expose port to wrap the function around the contact form and the contact information and define intrinsic logic
export default function Contact() {
  const leftRef  = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '', interest: '' });
  };

  const inputClass =
    'w-full bg-transparent border-b border-white/15 focus:border-gold-500 text-white placeholder:text-white/25 text-sm font-sans py-3 outline-none transition-colors duration-400 font-light';

  const selectClass =
    'w-full bg-dark-900 border-b border-white/15 focus:border-gold-500 text-white placeholder:text-white/25 text-sm font-sans py-3 outline-none transition-colors duration-400 font-light appearance-none cursor-pointer';

  return (
    <section id="contact" className="bg-dark-800 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Get In Touch</span>
          <div className="gold-divider" />
          <h2 className="section-title text-white mt-4">
            Visit Sir John <em className="text-gold-400 not-italic">Today</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact info */}
          <div ref={leftRef} className="reveal-left space-y-10">
            <div className="flex gap-5">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/30">
                <MapPin size={16} className="text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold-500 font-sans mb-2">Location</p>
                <p className="text-white/70 font-sans font-light text-sm leading-relaxed">
                  Sir John Sports &amp; Recreational Centre<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/30">
                <Phone size={16} className="text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold-500 font-sans mb-2">Reservations &amp; Booking</p>
                <a href="tel:+254700000000" className="text-white/70 font-sans font-light text-sm hover:text-gold-400 transition-colors duration-300 block">
                  +254 700 000 000
                </a>
                <a href="tel:+254711000000" className="text-white/70 font-sans font-light text-sm hover:text-gold-400 transition-colors duration-300 block mt-1">
                  +254 711 000 000
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/30">
                <Mail size={16} className="text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold-500 font-sans mb-2">Email Us</p>
                <a href="mailto:info@sirjohncentre.com" className="text-white/70 font-sans font-light text-sm hover:text-gold-400 transition-colors duration-300">
                  info@sirjohncentre.com
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-500/30">
                <Clock size={16} className="text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold-500 font-sans mb-3">Opening Hours</p>
                <div className="space-y-3">
                  {HOURS.map(h => (
                    <div key={h.days} className="border-l border-gold-500/20 pl-4">
                      <p className="text-white/80 text-xs font-sans font-medium tracking-wide">{h.days}</p>
                      <p className="text-white/40 text-xs font-sans font-light mt-0.5 whitespace-pre-line">{h.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-52 overflow-hidden border border-white/8">
              <img
                src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Location"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-gold-500 mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans">Embu, Gachoka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div ref={rightRef} className="reveal-right">
            <h3 className="font-serif text-2xl font-light text-white mb-8">Send an Enquiry</h3>
            {sent ? (
              <div className="border border-gold-500/40 bg-gold-500/5 p-8 text-center">
                <p className="font-serif text-2xl text-gold-400 mb-2">Message Received</p>
                <p className="text-white/50 font-sans text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-7">
                  <div>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled className="bg-dark-900 text-white">Area of Interest</option>
                      <option value="pool" className="bg-dark-900 text-white">Swimming Pool</option>
                      <option value="football" className="bg-dark-900 text-white">Football</option>
                      <option value="team" className="bg-dark-900 text-white">Team Building</option>
                      <option value="event" className="bg-dark-900 text-white">Event Booking</option>
                      <option value="other" className="bg-dark-900 text-white">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message or enquiry..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold-solid w-full sm:w-auto justify-center gap-3"
                >
                  <Send size={13} strokeWidth={2} />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
