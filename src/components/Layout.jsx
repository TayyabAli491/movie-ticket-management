import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Remove container from main to allow full-width sections */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}