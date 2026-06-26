import { Router, useRouter } from './router';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { ALL_PAGES } from './data/pages';

function Routes() {
  const { path } = useRouter();
  const slug = path.replace(/^\/|\/$/g, '');
  const isDetail = slug !== '' && ALL_PAGES.some(p => p.slug === slug);

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
