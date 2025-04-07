import { useState, useEffect } from 'react';
import { fetchNowPlayingMovies, getMoviePoster } from '../services/tmdb';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchNowPlayingMovies(currentPage);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadMovies();
  }, [currentPage]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (error) {
    return <div className="text-red-500 text-center mt-8">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Search Bar Section */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          <h1 className="text-4xl font-bold text-white text-center">
            Discover Movies
          </h1>
          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg 
                className="w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for movies..."
              className="w-full px-12 py-3 rounded-full bg-gray-800 text-white 
                placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-red-500 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="text-center text-white">Loading movies...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMovies.map(movie => (
                <div
                  key={movie.id}
                  className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden 
                    transform transition hover:scale-105 hover:shadow-3xl"
                >
                  <div className="aspect-[2/3] bg-gray-700">
                    <img
                      src={getMoviePoster(movie.poster_path)}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/500x750?text=Poster+Not+Available';
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 truncate">
                      {movie.title}
                    </h3>
                    <div className="flex flex-col space-y-2 text-gray-400 text-sm">
                      <div className="flex justify-between">
                        <span>Release:</span>
                        <span>{movie.release_date || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{formatRuntime(movie.runtime)}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 
                      text-white px-4 py-2 rounded-xl hover:from-red-600 hover:to-red-500 
                      transition-all duration-300">
                      Book Tickets
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-5 py-2 rounded-full bg-gray-800 text-white 
                  hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed 
                  transition-colors"
              >
                Previous
              </button>
              <span className="px-5 py-2 text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-5 py-2 rounded-full bg-gray-800 text-white 
                  hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed 
                  transition-colors"
              >
                Next
              </button>
            </div>
          </>
        )}

        {!isLoading && filteredMovies.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            No movies found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
