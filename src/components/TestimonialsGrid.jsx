import { useEffect, useState } from 'react';

export default function TestimonialsGrid() {
  const [mounted, setMounted] = useState(false);
  const testimonials = [
    {
      text: '"The easiest booking experience I\'ve ever had! Got my tickets minutes before showtime without any hassle."',
      name: "Sarah Johnson",
      role: "Movie Enthusiast",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: '"Love the exclusive offers! The combo deals make movie nights so much more affordable."',
      name: "Mike Chen",
      role: "Frequent Viewer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pattern-dots pattern-red-500 pattern-size-4" />
      
      <div className="container mx-auto px-4 relative">
        <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
            What Our Moviegoers Say
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2"
            >
              <blockquote className="mb-4">
                <p className="text-gray-600 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                  {testimonial.text}
                </p>
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-red-100 group-hover:border-red-200 transition-all"
                />
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-red-100 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-red-200 rounded-full opacity-10 blur-3xl" />
      </div>
    </section>
  );
}
