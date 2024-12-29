import React from 'react';
import { ArrowRight, Briefcase, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Find Perfect Projects',
      description: 'AI-powered matching system connects you with projects that fit your skills and experience.'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Skill Development',
      description: 'Get personalized course recommendations to enhance your professional skills.'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Build Your Portfolio',
      description: 'Showcase your work and grow your professional network.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Find Your Next Opportunity
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with clients and showcase your skills on our AI-powered freelance platform
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose KaamKar?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform helps you grow professionally and find the perfect opportunities.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-6 px-6 pb-8 bg-white rounded-lg shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-md">
                  {feature.icon}
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;