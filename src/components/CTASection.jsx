import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CTASection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
      {/* Background elements with built-in animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-48 h-48 bg-red-400 rounded-full -top-24 -left-24 animate-pulse" />
        <div className="absolute w-64 h-64 bg-red-300 rounded-full -bottom-32 -right-32 animate-pulse delay-1000" />
        <div className="absolute w-32 h-32 bg-red-400 rounded-full top-1/4 right-1/4 animate-pulse delay-1500" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-100 to-white">
            Ready for Your Next Movie Night?
          </span>
        </h2>
        
        <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-150 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          Join millions of movie enthusiasts experiencing the magic of cinema in premium comfort
        </p>

        <div className={`transition-all duration-700 ease-out delay-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <Link 
            to="/signup" 
            className="inline-block bg-white text-red-600 px-10 py-4 rounded-xl text-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-red-900/30"
          >
            Start Your Journey
            <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Decorative stars with ping animation */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}