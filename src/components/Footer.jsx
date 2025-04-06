export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-500">CineBook</h3>
              <p className="text-gray-400">
                Your ultimate movie ticket booking experience. Book tickets for the latest movies in theaters near you.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/home" className="hover:text-red-400 transition-colors">Home</a></li>
                <li><a href="/movies" className="hover:text-red-400 transition-colors">Movies</a></li>
                <li><a href="/about" className="hover:text-red-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-red-400 transition-colors">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@cinebook.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Movie St, Hollywood</li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CineBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
