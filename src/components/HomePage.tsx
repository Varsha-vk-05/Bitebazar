import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { fetchRestaurants } from '../lib/database';
import { Restaurant } from '../types';
import { RestaurantCard } from './RestaurantCard';
import { DemoSection } from './DemoSection';

interface HomePageProps {
  searchQuery: string;
  onRestaurantClick: (restaurant: Restaurant) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ searchQuery, onRestaurantClick }) => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 20;

  // Load restaurants from database
  React.useEffect(() => {
    const loadRestaurants = async () => {
      setLoading(true);
      const data = await fetchRestaurants();
      setRestaurants(data);
      setLoading(false);
    };
    loadRestaurants();
  }, []);

  const cuisines = useMemo(() => {
    const allCuisines = restaurants.flatMap(r => r.cuisine);
    return Array.from(new Set(allCuisines)).sort();
  }, []);

  const filteredAndSortedRestaurants = useMemo(() => {
    let filtered = restaurants.filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          restaurant.cuisine.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCuisine = !selectedCuisine || restaurant.cuisine.includes(selectedCuisine);
      const matchesRating = !selectedRating || restaurant.rating >= parseFloat(selectedRating);
      const matchesPriceRange = !selectedPriceRange || (() => {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        return restaurant.costForTwo >= min && (max ? restaurant.costForTwo <= max : true);
      })();
      const matchesDeliveryTime = !selectedDeliveryTime || (() => {
        const maxTime = parseInt(restaurant.deliveryTime.split('-')[1]);
        return maxTime <= parseInt(selectedDeliveryTime);
      })();
      
      return matchesSearch && matchesCuisine && matchesRating && matchesPriceRange && matchesDeliveryTime;
    });

    // Sort restaurants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'none':
          return 0;
        case 'rating':
          return b.rating - a.rating;
        case 'deliveryTime':
          const aTime = parseInt(a.deliveryTime.split('-')[0]);
          const bTime = parseInt(b.deliveryTime.split('-')[0]);
          return aTime - bTime;
        case 'costForTwo':
          return a.costForTwo - b.costForTwo;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCuisine, selectedRating, selectedPriceRange, selectedDeliveryTime, sortBy, restaurants]);

  const totalPages = Math.ceil(filteredAndSortedRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRestaurants = filteredAndSortedRestaurants.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12 perspective-container">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4 floating-animation">
          Order food from 500+ restaurants
        </h1>
        <p className="text-base sm:text-xl text-gray-600 mb-8 floating-animation" style={{animationDelay: '0.5s'}}>
          Fast delivery • Fresh food • Best prices
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg rotate-y-12 floating-animation" style={{animationDelay: '1s'}}>
            <span className="text-2xl">🍕</span>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg floating-animation" style={{animationDelay: '1.5s'}}>
            <span className="text-2xl">🍔</span>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg rotate-y-minus-12 floating-animation" style={{animationDelay: '2s'}}>
            <span className="text-2xl">🍜</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm sm:text-base touch-target"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </button>
            <span className="text-sm sm:text-base text-gray-600">{filteredAndSortedRestaurants.length} restaurants</span>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base touch-target"
          >
            <option value="none">No Sorting</option>
            <option value="rating">Sort by Rating</option>
            <option value="deliveryTime">Sort by Delivery Time</option>
            <option value="costForTwo">Sort by Price</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        {showFilters && (
          <div className="mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              {/* Cuisine Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Cuisine</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedCuisine('')}
                    className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                      selectedCuisine === '' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    All
                  </button>
                  {cuisines.map(cuisine => (
                    <button
                      key={cuisine}
                      onClick={() => setSelectedCuisine(cuisine)}
                      className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                        selectedCuisine === cuisine ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                      }`}
                    >
                      {cuisine}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Minimum Rating</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedRating('')}
                    className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                      selectedRating === '' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    Any
                  </button>
                  {['4.0', '4.2', '4.5'].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating)}
                      className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                        selectedRating === rating ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                      }`}
                    >
                      {rating}+ ⭐
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range (for two)</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedPriceRange('')}
                    className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                      selectedPriceRange === '' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    Any
                  </button>
                  {[
                    { label: 'Under ₹300', value: '0-300' },
                    { label: '₹300-₹600', value: '300-600' },
                    { label: '₹600-₹1000', value: '600-1000' },
                    { label: 'Above ₹1000', value: '1000-9999' }
                  ].map(range => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPriceRange(range.value)}
                      className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                        selectedPriceRange === range.value ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Time Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Maximum Delivery Time</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedDeliveryTime('')}
                    className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                      selectedDeliveryTime === '' ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    Any
                  </button>
                  {['30', '45', '60'].map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedDeliveryTime(time)}
                      className={`px-3 py-2 rounded-full text-xs sm:text-sm transition-colors touch-target ${
                        selectedDeliveryTime === time ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-orange-100'
                      }`}
                    >
                      Under {time} mins
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedCuisine('');
                    setSelectedRating('');
                    setSelectedPriceRange('');
                    setSelectedDeliveryTime('');
                    setSortBy('rating');
                  }}
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {(selectedCuisine || selectedRating || selectedPriceRange || selectedDeliveryTime) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedCuisine && (
              <button
                onClick={() => setSelectedCuisine('')}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs flex items-center gap-1"
              >
                {selectedCuisine}
                <X className="w-3 h-3" />
              </button>
            )}
            {selectedRating && (
              <button
                onClick={() => setSelectedRating('')}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs flex items-center gap-1"
              >
                {selectedRating}+ ⭐
                <X className="w-3 h-3" />
              </button>
            )}
            {selectedPriceRange && (
              <button
                onClick={() => setSelectedPriceRange('')}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs flex items-center gap-1"
              >
                Price: {selectedPriceRange.split('-').map(p => `₹${p}`).join('-')}
                <X className="w-3 h-3" />
              </button>
            )}
            {selectedDeliveryTime && (
              <button
                onClick={() => setSelectedDeliveryTime('')}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs flex items-center gap-1"
              >
                Under {selectedDeliveryTime} mins
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Restaurant Grid */}
      {loading ? (
        <div className="text-center py-8 sm:py-12">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">Loading restaurants...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {paginatedRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={onRestaurantClick}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-8">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm sm:text-base touch-target"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base touch-target ${
                  currentPage === pageNum
                    ? 'bg-orange-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm sm:text-base touch-target"
          >
            Next
          </button>
        </div>
      )}

      {filteredAndSortedRestaurants.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-base sm:text-lg">No restaurants found matching your criteria</p>
        </div>
      )}
    </div>
  );
};