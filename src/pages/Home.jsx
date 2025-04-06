export default function Home() {
    const movies = [
      { id: 1, title: 'Movie 1', genre: 'Action', time: '2h 15m' },
      { id: 2, title: 'Movie 2', genre: 'Comedy', time: '1h 50m' },
      // Add more movies
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">Now Showing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map(movie => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
              <p className="text-gray-600 mb-1">Genre: {movie.genre}</p>
              <p className="text-gray-600">Duration: {movie.time}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Book Tickets
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}
