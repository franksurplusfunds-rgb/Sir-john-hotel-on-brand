import { Router, useRouter } from './router';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AccommodationRoomPage from './pages/AccommodationRoomPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import { ALL_PAGES, ACCOMMODATION_ROOMS, getAccommodationRoomBySlug } from './data/pages';

function Routes() {
  const { path } = useRouter();
  const cleanPath = path.split('?')[0].replace(/^\/|\/$/g, '');
  const fullPath = typeof window !== 'undefined' ? window.location.pathname + window.location.search : path;

  // Parse dynamic routes
  const checkoutMatch = cleanPath.match(/^checkout\/(.+)$/);
  const confirmationMatch = cleanPath.match(/^order-confirmation\/(.+)$/);

  // Checkout route
  if (checkoutMatch) {
    return <CheckoutPage eventSlug={checkoutMatch[1]} />;
  }

  // Order confirmation route
  if (confirmationMatch) {
    const orderId = confirmationMatch[1];
    const params = new URL(`http://dummy${fullPath}`).searchParams;
    return (
      <OrderConfirmationPage
        orderId={orderId}
        eventSlug={params.get('event') || ''}
        category={params.get('category') || ''}
        quantity={params.get('quantity') || '1'}
        firstName={params.get('firstName') || ''}
        lastName={params.get('lastName') || ''}
      />
    );
  }

  // Accommodation routes
  const isAccommodation = cleanPath !== '' && ACCOMMODATION_ROOMS.some(r => r.slug === cleanPath);
  const room = isAccommodation ? getAccommodationRoomBySlug(cleanPath) : null;
  if (isAccommodation && room) return <AccommodationRoomPage room={room} />;

  // Detail pages
  const isDetail = cleanPath !== '' && ALL_PAGES.some(p => p.slug === cleanPath);
  if (isDetail) return <DetailPage slug={cleanPath} />;

  return <HomePage />;
}

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
