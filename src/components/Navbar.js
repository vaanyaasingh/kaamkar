import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Bell, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Projects', path: '/projects' },
    { name: 'Courses', path: '/courses' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold" style={{ color: '#5ce1e6' }}>
                KaamKar
              </h1>
            </Link>
            
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                    location.pathname === item.path
                      ? 'border-[#5ce1e6] text-[#5ce1e6]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-[#5ce1e6] transition-colors">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-500 hover:text-[#5ce1e6] transition-colors">
              <MessageSquare className="h-6 w-6" />
            </button>
            <Link to="/profile" className="p-2 text-gray-500 hover:text-[#5ce1e6] transition-colors">
              <User className="h-6 w-6" />
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-[#5ce1e6]"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-[#5ce1e6] bg-[#5ce1e6]/10'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;