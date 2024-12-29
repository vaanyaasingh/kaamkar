import React from 'react';
import { Search, Briefcase, BookOpen, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      description: 'Looking for an experienced developer to build a full-featured e-commerce website.',
      budget: '$3000-$5000',
      skills: ['React', 'Node.js', 'MongoDB'],
      matchScore: 95
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      description: 'Need a creative designer for a fitness tracking mobile app interface.',
      budget: '$1500-$2500',
      skills: ['Figma', 'UI/UX', 'Mobile Design'],
      matchScore: 88
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      provider: 'Tech Academy',
      duration: '8 weeks',
      rating: 4.8,
      progress: 65
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      provider: 'Design School',
      duration: '6 weeks',
      rating: 4.9,
      progress: 32
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for projects, courses, or skills..."
            className="w-full px-4 py-3 border rounded-lg pl-12"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <Briefcase className="h-10 w-10 text-[#5ce1e6]" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <BookOpen className="h-10 w-10 text-[#5ce1e6]" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Courses In Progress</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <TrendingUp className="h-10 w-10 text-[#5ce1e6]" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Profile Strength</p>
              <p className="text-2xl font-semibold">85%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Projects */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4" style={{ color: '#5ce1e6' }}>Recommended Projects</h2>
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="bg-[#5ce1e6] text-white px-2 py-1 rounded-full text-sm">
                  {project.matchScore}% Match
                </span>
              </div>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.skills.map(skill => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-[#5ce1e6] font-semibold">{project.budget}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4" style={{ color: '#5ce1e6' }}>Recommended Courses</h2>
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-2">{course.provider} • {course.duration}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                <span>{course.rating}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${course.progress}%`, backgroundColor: '#5ce1e6' }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{course.progress}% Complete</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;