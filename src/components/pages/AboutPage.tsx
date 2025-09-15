import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">About BiteBazar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize food delivery in India, connecting hungry customers 
            with their favorite restaurants through technology and exceptional service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">50M+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Partner Restaurants</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">100+</h3>
            <p className="text-gray-600">Cities Served</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1M+</h3>
            <p className="text-gray-600">Daily Orders</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, BiteBazar started with a simple idea: to make great food 
                accessible to everyone, everywhere. What began as a small startup in Bangalore 
                has now grown into India's largest food delivery platform.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that good food brings people together and creates moments of joy. 
                Our technology platform connects millions of customers with their favorite 
                restaurants, enabling seamless food discovery and delivery experiences.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve over 50 million customers across 100+ cities, 
                working with 500+ restaurant partners to deliver happiness, one meal at a time.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="Our story"
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is centered around providing the best possible 
                experience for our customers, from discovery to delivery.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of food quality and safety, 
                working closely with restaurants to ensure every meal is perfect.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology to continuously improve our platform 
                and create new solutions for the food delivery ecosystem.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};