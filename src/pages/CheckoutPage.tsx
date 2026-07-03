import { useState } from 'react';
import { useRouter } from '../router';
import { getEventBySlug } from '../data/pages';
import { ArrowLeft } from 'lucide-react';

interface CheckoutPageProps {
  eventSlug: string;
}

export default function CheckoutPage({ eventSlug }: CheckoutPageProps) {
  const { navigate } = useRouter();
  const event = getEventBySlug(eventSlug);
  const [selectedCategory, setSelectedCategory] = useState<string>('Common');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-white mb-4">Event Not Found</h1>
          <button
            onClick={() => navigate('/events/')}
            className="text-gold-500 hover:text-gold-400 font-sans text-sm uppercase tracking-wide"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const selectedTicket = event.ticketCategories.find(cat => cat.name === selectedCategory);
  const totalPrice = selectedTicket ? selectedTicket.price * parseInt(quantity) : 0;

  const handleCompletePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const orderId = `ORD-${Date.now()}`;
      const confirmUrl = `/order-confirmation/${orderId}?event=${event.slug}&category=${selectedCategory}&quantity=${quantity}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;
      console.log('[v0] Navigating to:', confirmUrl);
      navigate(confirmUrl);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <button
          onClick={() => navigate('/events/')}
          className="flex items-center gap-2 text-gold-500 hover:text-gold-400 font-sans text-sm uppercase tracking-wide mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Events
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleCompletePayment} className="space-y-8">
              {/* Event Summary */}
              <div className="border border-white/8 p-8 bg-dark-800">
                <h2 className="font-serif text-2xl font-light text-white mb-4">Event Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/60 font-sans">Event</span>
                    <span className="text-white font-sans font-medium">{event.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60 font-sans">Date & Time</span>
                    <span className="text-white font-sans font-medium">
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="h-px bg-white/8" />
                  <p className="text-white/70 font-sans text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Ticket Category Selection */}
              <div className="border border-white/8 p-8 bg-dark-800">
                <h3 className="font-serif text-xl font-light text-white mb-6">Select Ticket Category</h3>
                <div className="grid gap-4">
                  {event.ticketCategories.map(category => (
                    <label key={category.name} className="cursor-pointer">
                      <div
                        className={`p-4 border-2 transition-all duration-300 ${
                          selectedCategory === category.name
                            ? 'border-gold-500 bg-gold-500/10'
                            : 'border-white/8 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <input
                            type="radio"
                            name="category"
                            value={category.name}
                            checked={selectedCategory === category.name}
                            onChange={e => setSelectedCategory(e.target.value)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-sans font-medium text-white">{category.name}</h4>
                              <p className="text-gold-500 font-sans font-bold">
                                {category.currency} {category.price}
                              </p>
                            </div>
                            <p className="text-white/60 font-sans text-sm">{category.description}</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="border border-white/8 p-8 bg-dark-800">
                <h3 className="font-serif text-xl font-light text-white mb-6">Attendee Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 font-sans text-sm font-light mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full bg-dark-900 border border-white/8 text-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 font-sans text-sm font-light mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full bg-dark-900 border border-white/8 text-white px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="border border-white/8 p-8 bg-dark-800">
                <h3 className="font-serif text-xl font-light text-white mb-6">Quantity</h3>
                <div className="flex items-center gap-4">
                  <label className="text-white/70 font-sans text-sm">Number of Tickets:</label>
                  <select
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                    className="bg-dark-900 border border-white/8 text-white px-4 py-2 font-sans text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Payment Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 text-dark-900 font-sans font-bold py-4 px-6 transition-all duration-300 uppercase text-sm tracking-wide"
              >
                {isProcessing ? 'Processing Payment...' : 'Complete Payment'}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 border border-white/8 p-8 bg-dark-800">
              <h3 className="font-serif text-xl font-light text-white mb-6">Order Summary</h3>

              <div className="space-y-4 pb-6 border-b border-white/8 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60 font-sans">Ticket Type</span>
                  <span className="text-white font-sans font-medium">{selectedCategory}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60 font-sans">Quantity</span>
                  <span className="text-white font-sans font-medium">{quantity}</span>
                </div>
                {selectedTicket && (
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60 font-sans">Price per Ticket</span>
                    <span className="text-white font-sans font-medium">
                      {selectedTicket.currency} {selectedTicket.price}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-serif text-lg font-light text-white">Total</span>
                <span className="font-serif text-2xl font-light text-gold-500">
                  {selectedTicket?.currency} {totalPrice}
                </span>
              </div>

              {/* Payment Method */}
              <div className="bg-dark-900 p-4 rounded mb-6">
                <p className="text-white/60 font-sans text-xs uppercase tracking-wide font-light mb-2">
                  Payment Method
                </p>
                <p className="text-white font-sans text-sm font-medium">Mock Payment Processing</p>
                <p className="text-white/50 font-sans text-xs mt-2">
                  This is a test environment. No real charges will be made.
                </p>
              </div>

              {/* Security Note */}
              <p className="text-white/50 font-sans text-xs text-center leading-relaxed">
                Your payment information is encrypted and secure. We never store your payment details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
