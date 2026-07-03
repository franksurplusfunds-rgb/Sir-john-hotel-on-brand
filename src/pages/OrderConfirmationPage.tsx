import { useEffect, useState } from 'react';
import { useRouter } from '../router';
import { getEventBySlug } from '../data/pages';
import { generateTicketPDF, downloadTicket } from '../utils/ticketGenerator';
import { CheckCircle, Download, Home } from 'lucide-react';

interface OrderConfirmationPageProps {
  orderId: string;
  eventSlug: string;
  category: string;
  quantity: string;
  firstName: string;
  lastName: string;
}

export default function OrderConfirmationPage({
  orderId,
  eventSlug,
  category,
  quantity,
  firstName,
  lastName
}: OrderConfirmationPageProps) {
  const { navigate } = useRouter();
  const event = getEventBySlug(eventSlug);
  const [isDownloading, setIsDownloading] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);

  const selectedTicket = event?.ticketCategories.find(cat => cat.name === category);
  const totalPrice = selectedTicket ? selectedTicket.price * parseInt(quantity) : 0;

  const handleDownloadTicket = async () => {
    if (!event || !selectedTicket) return;

    setIsDownloading(true);
    try {
      const ticketData = {
        orderId,
        eventTitle: event.title,
        eventDate: event.date,
        eventTime: event.time,
        eventLocation: event.location,
        firstName,
        lastName,
        ticketCategory: category,
        quantity: parseInt(quantity),
        totalPrice,
        currency: selectedTicket.currency
      };

      const ticketBlob = await generateTicketPDF(ticketData);
      downloadTicket(ticketBlob, orderId);
    } catch (error) {
      console.error('Error generating ticket:', error);
      alert('Failed to generate ticket. Please try again.');
    } finally {
      setIsDownloading(false);
      setTicketGenerated(true);
    }
  };

  if (!event || !selectedTicket) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-white mb-4">Order Not Found</h1>
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

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500/20 p-4 rounded-full">
              <CheckCircle size={64} className="text-green-500" />
            </div>
          </div>
          <h1 className="font-serif text-4xl font-light text-white mb-2">Payment Successful!</h1>
          <p className="text-white/60 font-sans text-lg">
            Your order has been confirmed. Your ticket is ready to download.
          </p>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Order Info */}
          <div className="border border-white/8 p-8 bg-dark-800">
            <h2 className="font-serif text-xl font-light text-white mb-6">Order Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 font-sans text-xs uppercase tracking-wide font-light mb-1">
                  Order Reference
                </p>
                <p className="text-gold-500 font-sans font-bold text-lg break-all">{orderId}</p>
              </div>
              <div className="h-px bg-white/8" />
              <div>
                <p className="text-white/60 font-sans text-xs uppercase tracking-wide font-light mb-1">
                  Attendee Name
                </p>
                <p className="text-white font-sans font-medium">
                  {firstName} {lastName}
                </p>
              </div>
              <div>
                <p className="text-white/60 font-sans text-xs uppercase tracking-wide font-light mb-1">
                  Order Date
                </p>
                <p className="text-white font-sans font-medium">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Event & Ticket Details */}
          <div className="border border-white/8 p-8 bg-dark-800">
            <h2 className="font-serif text-xl font-light text-white mb-6">Event & Ticket Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 font-sans text-xs uppercase tracking-wide font-light mb-1">
                  Event
                </p>
                <p className="text-white font-sans font-medium">{event.title}</p>
              </div>
              <div className="h-px bg-white/8" />
              <div>
                <p className="text-white/60 font-sans text-xs uppercase tracking-wide font-light mb-1">
                  Ticket Category
                </p>
                <p className="text-white font-sans font-medium">{category}</p>
              </div>
              <div>
                <p className="text-white/60 font-sans text-xs uppercase tracking-wide font-light mb-1">
                  Number of Tickets
                </p>
                <p className="text-white font-sans font-medium">{quantity}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Summary */}
        <div className="border border-white/8 p-8 bg-dark-800 mb-8">
          <h3 className="font-serif text-xl font-light text-white mb-4">Event Details</h3>
          <div className="space-y-3 mb-6 pb-6 border-b border-white/8">
            <div className="flex justify-between">
              <span className="text-white/60 font-sans">Date & Time</span>
              <span className="text-white font-sans font-medium">
                {event.date} at {event.time}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60 font-sans">Location</span>
              <span className="text-white font-sans font-medium">{event.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60 font-sans">Price per Ticket</span>
              <span className="text-white font-sans font-medium">
                {selectedTicket.currency} {selectedTicket.price}
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="font-serif text-lg font-light text-white">Total Amount Paid</span>
            <span className="font-serif text-3xl font-light text-gold-500">
              {selectedTicket.currency} {totalPrice}
            </span>
          </div>
        </div>

        {/* Ticket Download */}
        <div className="border border-gold-500/30 bg-gold-500/5 p-8 mb-8">
          <h3 className="font-serif text-xl font-light text-white mb-4">Your Ticket</h3>
          <p className="text-white/70 font-sans text-sm mb-6 leading-relaxed">
            Your event ticket has been generated and is ready to download. The PDF contains your entry ticket with a QR code for easy check-in at the event.
          </p>
          <button
            onClick={handleDownloadTicket}
            disabled={isDownloading}
            className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 text-dark-900 font-sans font-bold py-3 px-6 transition-all duration-300 uppercase text-sm tracking-wide"
          >
            <Download size={18} />
            {isDownloading ? 'Generating Ticket...' : ticketGenerated ? 'Download Again' : 'Download Ticket (PDF)'}
          </button>
        </div>

        {/* What's Next */}
        <div className="border border-white/8 p-8 bg-dark-800 mb-8">
          <h3 className="font-serif text-xl font-light text-white mb-4">What&apos;s Next?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 text-lg">•</span>
              <span className="text-white/70 font-sans">Download and save your ticket PDF to your device</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 text-lg">•</span>
              <span className="text-white/70 font-sans">Present the ticket at the event entrance for check-in</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 text-lg">•</span>
              <span className="text-white/70 font-sans">
                Arrive early to ensure smooth entry. Gates open {event.time.split(' - ')[0]}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 text-lg">•</span>
              <span className="text-white/70 font-sans">Have questions? Contact our support team</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/events/')}
            className="flex items-center justify-center gap-2 bg-dark-800 hover:bg-dark-700 border border-white/8 text-white font-sans font-medium py-3 px-6 transition-all duration-300 uppercase text-sm tracking-wide"
          >
            <Home size={18} />
            Back to Events
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-gold-500 hover:bg-gold-600 text-dark-900 font-sans font-bold py-3 px-6 transition-all duration-300 uppercase text-sm tracking-wide"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
