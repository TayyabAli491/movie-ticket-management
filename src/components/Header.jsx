import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
            CineBook
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/home" className="hover:text-red-400 transition-colors">Home</Link>
            <Link to="/movies" className="hover:text-red-400 transition-colors">Movies</Link>
            <Link to="/about" className="hover:text-red-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link>
          </div>

          {/* Auth Links */}
          <div className="flex items-center space-x-4">
            <Link to="/signin" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors">
              Sign In
            </Link>
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
