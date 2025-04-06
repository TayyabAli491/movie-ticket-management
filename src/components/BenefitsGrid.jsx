export default function BenefitsGrid() {
    const benefits = [
      {
        icon: '🎟️',
        title: 'Instant Booking',
        description: 'Secure your seats in just a few clicks with our seamless booking process'
      },
      {
        icon: '🍿',
        title: 'Exclusive Offers',
        description: 'Special discounts and combo deals available only to our members'
      },
      {
        icon: '📱',
        title: 'Mobile Tickets',
        description: 'Easy access to tickets right on your phone - no printing needed'
      }
    ];
  
    return (
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5 pattern-dots pattern-red-500 pattern-size-4" />
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
              Why Choose CineBook?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative z-10">
                  <div className="text-red-600 text-5xl mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
  
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-red-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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