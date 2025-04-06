import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRandomBackdrop, getMovieBackdrop } from '../services/tmdb';

export default function HeroSection() {
  const [backdrop, setBackdrop] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadBackdrop = async () => {
      try {
        const movie = await fetchRandomBackdrop();
        setBackdrop(movie.backdrop_path);
      } catch (error) {
        console.error('Error loading backdrop:', error);
      }
    };
    loadBackdrop();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background */}
      <div className="absolute inset-0 z-0 w-full">
        <img
          src={getMovieBackdrop(backdrop) || '/default-hero.jpg'}
          alt="Cinema Background"
          className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          onLoad={() => setIsLoaded(true)}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/95"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            Experience Cinema Magic
            </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Book tickets for the latest blockbusters in premium comfort. Your perfect movie experience starts here!
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
            <Link 
            to="/signup" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
            >
            Get Started
            </Link>
            <Link 
            to="/home" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-white/20"
            >
            Browse Movies
            </Link>
        </div>
        </div>
      </div>
    </section>
  );
}