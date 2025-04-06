import { useEffect, useState } from 'react';
import { fetchRandomMovies } from '../services/tmdb';
import HeroSection from '../components/HeroSection';
import MovieGrid from '../components/MovieGrid';
import BenefitsGrid from '../components/BenefitsGrid';
import CTASection from '../components/CTASection';
import TestimonialsGrid from '../components/TestimonialsGrid';

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
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex-grow bg-gray-100">
      <HeroSection />
      <MovieGrid movies={movies} />
      <BenefitsGrid />
      <CTASection />
      <TestimonialsGrid />
    </div>
  );
}
