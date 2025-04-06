import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
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
  );
}
