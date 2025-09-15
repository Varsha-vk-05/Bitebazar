import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Varsha",
      role: "CEO",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      bio: "Visionary leader driving FoodieExpress to new heights.",
      bio: "Visionary leader driving BiteBazar to new heights.",
      email: "varsha@bitebazar.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals who are revolutionizing food delivery in India.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Leadership</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-md w-full text-center">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Varsha"
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Varsha</h3>
              <p className="text-orange-600 font-medium text-base sm:text-lg">CEO</p>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Culture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We encourage creative thinking and innovative solutions to complex problems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">Collaboration</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We believe in the power of teamwork and open communication.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We strive for excellence in everything we do, from code to customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Competitive Salary</h4>
                  <p className="text-sm sm:text-base text-gray-600">Industry-leading compensation packages</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Health Insurance</h4>
                  <p className="text-sm sm:text-base text-gray-600">Comprehensive medical coverage for you and family</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Learning & Development</h4>
                  <p className="text-sm sm:text-base text-gray-600">Continuous learning opportunities and skill development</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Flexible Work</h4>
                  <p className="text-sm sm:text-base text-gray-600">Remote work options and flexible schedules</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Stock Options</h4>
                  <p className="text-sm sm:text-base text-gray-600">Equity participation in company growth</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-1">Food Allowance</h4>
                  <p className="text-sm sm:text-base text-gray-600">Free meals and food credits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};