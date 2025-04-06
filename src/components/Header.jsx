import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-900'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo with red and blue accent */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              CineBook
            </span>
            <span className="h-3 w-3 bg-red-600 rounded-full group-hover:animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/home" 
              className="px-4 py-2 text-md font-medium text-gray-300 hover:text-red-400 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              Home
            </Link>
            <Link 
              to="/movies" 
              className="px-4 py-2 text-md font-medium text-gray-300 hover:text-red-400 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              Movies
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-md font-medium text-gray-300 hover:text-red-400 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-md font-medium text-gray-300 hover:text-red-400 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
                to="/signin" 
                className="px-5 py-2.5 rounded-lg bg-blue-800 hover:bg-blue-700 text-white font-semibold transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
                Sign In
            </Link>
            <Link 
                to="/signup" 
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
                Sign Up
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-md text-gray-300 hover:text-red-400 hover:bg-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-gray-900/95 backdrop-blur-sm left-0 right-0 pb-6">
            <div className="px-4 space-y-5">
              <Link 
                to="/home" 
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-red-400 hover:bg-blue-800 rounded-md"
              >
                Home
              </Link>
              <Link 
                to="/movies" 
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-red-400 hover:bg-blue-800 rounded-md"
              >
                Movies
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-red-400 hover:bg-blue-800 rounded-md"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-red-400 hover:bg-blue-800 rounded-md"
              >
                Contact
              </Link>
              <div className="pt-6 space-y-4 border-t border-blue-700">
                <Link 
                  to="/signin" 
                  className="block w-full px-6 py-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-500"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="block w-full px-6 py-3 text-center text-white bg-red-600 rounded-md hover:bg-red-500"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
