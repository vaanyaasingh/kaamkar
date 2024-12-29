import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, BookOpen, Star, ArrowRight, Search } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-[#5ce1e6]" />,
      title: 'Find Perfect Projects',
      description: 'AI-powered matching system connects you with projects that fit your skills and experience.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#5ce1e6]" />,
      title: 'Skill Development',
      description: 'Get personalized course recommendations to enhance your professional skills.'
    },
    {
      icon: <Star className="h-8 w-8 text-[#5ce1e6]" />,
      title: 'Build Your Portfolio',
      description: 'Showcase your work and grow your professional network.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <div className="bg-white shadow rounded-lg p-12 mb-6 text-center">
        <h1 className="text-4xl font-bold mb-6" style={{ color: '#5ce1e6' }}>
          Find Your Next Opportunity
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with clients and showcase your skills on our AI-powered freelance platform
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for projects or skills..."
              className="w-full px-4 py-3 border rounded-lg pl-12"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#5ce1e6' }}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 inline" />
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg text-[#5ce1e6] font-medium border border-[#5ce1e6] hover:bg-[#5ce1e6]/10 transition-colors"
          >
            Browse Projects
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5ce1e6' }}>
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;