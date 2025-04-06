const TMDB_API_KEY = '0934411ca5fe7951b44d70a6b26b43d6';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const fetchNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMoviePoster = (path) => {
  return path ? `${TMDB_IMAGE_BASE_URL}/w500${path}` : 'https://via.placeholder.com/500x750?text=Poster+Not+Available';
};

export const fetchRandomMovies = async () => {
    try {
      // Generate a random page number between 1 and 10
      const randomPage = Math.floor(Math.random() * 10) + 1;
      
      const response = await fetch(
        `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&page=${randomPage}`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
  
      const data = await response.json();
      // Shuffle the results and take first 6
      return shuffleArray(data.results).slice(0, 6);
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };

  export const fetchRandomBackdrop = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 5) + 1;
      const response = await fetch(
        `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&page=${randomPage}&include_adult=false`
      );
      const data = await response.json();
      const moviesWithBackdrops = data.results.filter(movie => movie.backdrop_path);
      return moviesWithBackdrops[Math.floor(Math.random() * moviesWithBackdrops.length)];
    } catch (error) {
      console.error('Error fetching backdrop:', error);
      throw error;
    }
  };
  
  export const getMovieBackdrop = (path, size = 'w1280') => {
    return path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : null;
  };
  
  
  // Helper function to shuffle array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  