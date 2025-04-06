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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CineBook?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-red-600 text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  