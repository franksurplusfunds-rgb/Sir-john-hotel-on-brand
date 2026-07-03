import { Router, useRouter } from './router';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AccommodationRoomPage from './pages/AccommodationRoomPage';
import { ALL_PAGES, ACCOMMODATION_ROOMS, getAccommodationRoomBySlug } from './data/pages';

function Routes() {
  const { path } = useRouter();
  const slug = path.replace(/^\/|\/$/g, '');
  const isDetail = slug !== '' && ALL_PAGES.some(p => p.slug === slug);
  const isAccommodation = slug !== '' && ACCOMMODATION_ROOMS.some(r => r.slug === slug);
  const room = isAccommodation ? getAccommodationRoomBySlug(slug) : null;

  if (isAccommodation && room) return <AccommodationRoomPage room={room} />;
  if (isDetail) return <DetailPage slug={slug} />;
  return <HomePage />;
}

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
