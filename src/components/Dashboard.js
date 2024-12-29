import React, { useState } from 'react';
import { Search, Briefcase, BookOpen, Bell, User } from 'lucide-react';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      description: 'Looking for an experienced developer to build a full-featured e-commerce website.',
      budget: '$3000-$5000',
      skills: ['React', 'Node.js', 'MongoDB'],
      postedDate: '2 days ago'
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      description: 'Need a creative designer for a fitness tracking mobile app interface.',
      budget: '$1500-$2500',
      skills: ['Figma', 'UI/UX', 'Mobile Design'],
      postedDate: '1 day ago'
    }
  ];

  const recommendedCourses = [
    {
      id: 1,
      title: 'Advanced React Development',
      provider: 'Tech Academy',
      duration: '8 weeks',
      rating: 4.8
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      provider: 'Design School',
      duration: '6 weeks',
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-500 cursor-pointer" />
            <User className="w-6 h-6 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 pl-12 text-gray-900 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for projects or courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Briefcase className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available Projects</p>
                <p className="text-2xl font-semibold text-gray-900">48</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Recommended Courses</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <User className="w-8 h-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Profile Matches</p>
                <p className="text-2xl font-semibold text-gray-900">85%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map(skill => (
                    <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">{project.budget}</span>
                  <span className="text-gray-500 text-sm">{project.postedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map(course => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-2">Provider: {course.provider}</p>
                <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">{course.rating}/5.0</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;