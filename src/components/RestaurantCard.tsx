import React from 'react';
import { Star, Clock, MapPin, Tag } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: (restaurant: Restaurant) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <div
      onClick={() => onClick(restaurant)}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer card-3d overflow-hidden touch-target relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {restaurant.offers.length > 0 && (
          <div className="absolute bottom-2 left-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-medium flex items-center shadow-lg neon-glow">
              <Tag className="w-3 h-3 mr-1 flex-shrink-0" />
              {restaurant.offers[0]}
            </div>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
        </div>
      </div>
      
      <div className="p-3 sm:p-4 relative z-10">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-1">{restaurant.name}</h3>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">{restaurant.rating}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-600 bg-blue-50 px-2 py-1 rounded-full">
            <Clock className="w-4 h-4 mr-1" />
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{restaurant.cuisine.join(', ')}</p>
          <div className="flex items-center text-xs sm:text-sm text-gray-600 ml-2 bg-green-50 px-2 py-1 rounded-full">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{restaurant.distance}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-xs sm:text-sm font-medium text-gray-700 bg-purple-50 px-2 py-1 rounded-full">₹{restaurant.costForTwo} for two</p>
          <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};