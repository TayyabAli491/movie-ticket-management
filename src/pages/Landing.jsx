import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRandomMovies, getMoviePoster } from '../services/tmdb';

export default function Landing() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchRandomMovies();
        setMovies(data);
      } catch (err) {
        console.error(err);
        // You could add error state handling here
      } finally {
        setLoading(false);
      }
    };
    // Fetch new movies when component mounts
    loadMovies();
  }, []);

  return (
    <div className="flex-grow bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-95"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Experience Cinema Magic
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Book tickets for the latest blockbusters in premium comfort. Your perfect movie experience starts here!
          </p>
          <div className="space-x-4">
            <Link 
              to="/signup" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/home" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all"
            >
              Browse Movies
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Now Playing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[2/3]"> {/* 2:3 aspect ratio for movie posters */}
                  <img
                    src={getMoviePoster(movie.poster_path)}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                
                {/* Movie Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                    {movie.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {new Date(movie.release_date).getFullYear()} | ⭐{' '}
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <Link
                    to={`/movies/${movie.id}`}
                    className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CineBook?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-red-600 text-4xl mb-4">🎟️</div>
              <h3 className="text-xl font-bold mb-3">Instant Booking</h3>
              <p className="text-gray-600">Secure your seats in just a few clicks with our seamless booking process</p>
            </div>
            <div className="text-center p-6">
              <div className="text-red-600 text-4xl mb-4">🍿</div>
              <h3 className="text-xl font-bold mb-3">Exclusive Offers</h3>
              <p className="text-gray-600">Special discounts and combo deals available only to our members</p>
            </div>
            <div className="text-center p-6">
              <div className="text-red-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Mobile Tickets</h3>
              <p className="text-gray-600">Easy access to tickets right on your phone - no printing needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Next Movie Night?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of movie lovers enjoying the best cinema experience</p>
          <Link 
            to="/signup" 
            className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Moviegoers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">"The easiest booking experience I've ever had! Got my tickets minutes before showtime without any hassle."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-red-600 mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500">Movie Enthusiast</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">"Love the exclusive offers! The combo deals make movie nights so much more affordable."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-red-600 mr-4"></div>
                <div>
                  <h4 className="font-bold">Mike Chen</h4>
                  <p className="text-gray-500">Frequent Viewer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
