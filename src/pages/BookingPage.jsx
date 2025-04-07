import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails, getMoviePoster } from '../services/tmdb';

export default function BookingPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    seats: 1
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
        // Fetch actual showtimes from your API
        const mockShowtimes = [
          { time: '10:00 AM', seats: 50 },
          { time: '02:00 PM', seats: 30 },
          { time: '06:00 PM', seats: 20 }
        ];
        setShowtimes(mockShowtimes);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/');
      }
    };
    fetchData();
  }, [movieId, navigate]);

  if (!movie) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-400 hover:text-white"
        >
          ← Back to Movies
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={getMoviePoster(movie.poster_path)}
              alt={movie.title}
              className="rounded-xl shadow-2xl"
            />
          </div>
          
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-6">{movie.title}</h1>
            
            <div className="space-y-6">
              <div>
                <label className="block text-lg mb-2">Select Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-800 rounded-lg p-3"
                  onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-lg mb-2">Select Showtime</label>
                <div className="grid grid-cols-2 gap-4">
                  {showtimes.map((showtime, index) => (
                    <button
                      key={index}
                      className={`p-4 rounded-lg ${bookingDetails.time === showtime.time ? 'bg-red-500' : 'bg-gray-800'} hover:bg-red-600`}
                      onClick={() => setBookingDetails({...bookingDetails, time: showtime.time})}
                    >
                      {showtime.time}<br/>
                      <span className="text-sm">({showtime.seats} seats left)</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg mb-2">Number of Seats</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={bookingDetails.seats}
                  onChange={(e) => setBookingDetails({...bookingDetails, seats: e.target.value})}
                  className="w-full bg-gray-800 rounded-lg p-3"
                />
              </div>

              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition-colors"
                onClick={() => {
                  // Handle booking submission
                  console.log('Booking details:', bookingDetails);
                  navigate('/confirmation');
                }}
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
