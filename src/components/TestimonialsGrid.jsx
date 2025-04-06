export default function TestimonialsGrid() {
    const testimonials = [
      {
        text: '"The easiest booking experience I\'ve ever had! Got my tickets minutes before showtime without any hassle."',
        name: "Sarah Johnson",
        role: "Movie Enthusiast"
      },
      {
        text: '"Love the exclusive offers! The combo deals make movie nights so much more affordable."',
        name: "Mike Chen",
        role: "Frequent Viewer"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Moviegoers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
