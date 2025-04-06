import { Link } from 'react-router-dom';
import { getMoviePoster } from '../services/tmdb';

export default function MovieGrid({ movies }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Now Playing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[2/3]">
                <img
                  src={getMoviePoster(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              
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
  );
}
