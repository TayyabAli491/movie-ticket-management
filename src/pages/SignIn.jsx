import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signin logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="grid md:grid-cols-2 h-screen">
        {/* Left Side  */}
        <div className="hidden md:block relative bg-gradient-to-br from-gray-900 to-gray-800 h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-gray-900/25">
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="text-center max-w-2xl px-4 space-y-8">
                {/* Animated heading with shadow */}
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent mb-6 transition-all duration-500 hover:scale-105">
                  Experience Cinematic Magic
                </h2>
                
                {/* Enhanced text container */}
                <div className="relative inline-block group">
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed bg-gray-800/30 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-700 transition-all duration-300 hover:border-red-400 hover:bg-gray-800/50">
                    Join millions of movie lovers enjoying seamless ticket booking
                  </p>
                  {/* Decorative elements */}
                  <div className="absolute -inset-2 rounded-xl border border-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl pointer-events-none" />
                </div>

                {/* Grid pattern background */}
                <div className="absolute inset-0 opacity-10 bg-grid-small-red-500/30 pointer-events-none" />
                
                {/* Animated dots pattern */}
                <div className="absolute inset-0 opacity-15 bg-dot-grid-red-500/30 animate-pulse pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signin Form */}
        <div className="flex items-center justify-center p-8 bg-gray-800">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="mt-2 text-gray-400">Sign in to your CineBook account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400"
                    placeholder="Enter your password"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                  <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3.5 rounded-lg font-semibold hover:from-red-500 hover:to-red-400 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-red-500/20"
              >
                Sign In
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-400">
                  Don't have an account? {' '}
                  <Link 
                    to="/signup" 
                    className="font-semibold text-red-400 hover:text-red-300 hover:underline transition-colors"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
