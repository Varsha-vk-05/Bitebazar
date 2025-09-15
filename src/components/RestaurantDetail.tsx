import React, { useState, useMemo } from 'react';
import { ArrowLeft, Star, Clock, MapPin, Plus, Minus, Tag } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';
import { fetchMenuItems } from '../lib/database';
import { useCart } from '../context/CartContext';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onBack: () => void;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, onBack }) => {
  const { addToCart, cart, updateQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load menu items from database
  React.useEffect(() => {
    const loadMenuItems = async () => {
      setLoading(true);
      const data = await fetchMenuItems(restaurant.id);
      setMenuItems(data);
      setLoading(false);
    };
    loadMenuItems();
  }, [restaurant.id]);
  
  const categories = useMemo(() => {
    return Array.from(new Set(menuItems.map(item => item.category)));
  }, [menuItems]);

  const filteredMenu = selectedCategory 
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  const getCartQuantity = (itemId: number): number => {
    const cartItem = cart.items.find(item => item.id === itemId);
    return cartItem?.quantity || 0;
  };

  const handleAddToCart = (menuItem: MenuItem) => {
    const cartItem = {
      ...menuItem,
      quantity: 1,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name
    };
    addToCart(cartItem);
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number) => {
    updateQuantity(itemId, newQuantity);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-orange-600 mb-4 transition-colors touch-target"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to restaurants
          </button>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full lg:w-48 xl:w-64 h-40 lg:h-48 object-cover rounded-lg"
            />
            
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{restaurant.name}</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-3 lg:mb-4">{restaurant.cuisine.join(', ')}</p>
              
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-medium">{restaurant.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-500 mr-1" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                  <span>{restaurant.distance}</span>
                </div>
                <span className="text-gray-600 hidden sm:inline">₹{restaurant.costForTwo} for two</span>
              </div>
              
              {restaurant.offers.length > 0 && (
                <div className="mt-3 lg:mt-4">
                  <div className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 sm:py-2 rounded-lg inline-flex items-center text-xs sm:text-sm">
                    <Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {restaurant.offers[0]}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Category Sidebar */}
          <div className="lg:w-64 mb-6 lg:mb-0">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Menu Categories</h3>
            
            {/* Mobile Category Scroll */}
            <div className="lg:hidden flex overflow-x-auto space-x-2 pb-2 mb-4">
              <button
                onClick={() => setSelectedCategory('')}
                className={`whitespace-nowrap px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === '' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                All Items
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Desktop Category List */}
            <div className="hidden lg:block space-y-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors touch-target ${
                  selectedCategory === '' ? 'bg-orange-600 text-white' : 'hover:bg-gray-100'
                }`}
              >
                All Items
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors touch-target ${
                    selectedCategory === category ? 'bg-orange-600 text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1">
            {loading ? (
              <div className="text-center py-8 sm:py-12">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-orange-600 mx-auto"></div>
                <p className="text-gray-500 mt-4 text-sm sm:text-base">Loading menu...</p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {filteredMenu.map((item) => {
                  const cartQuantity = getCartQuantity(item.id);
                  
                  return (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-3 h-3 rounded border-2 ${
                              item.isVeg ? 'border-green-500' : 'border-red-500'
                            }`}>
                              <div className={`w-full h-full rounded ${
                                item.isVeg ? 'bg-green-500' : 'bg-red-500'
                              }`}></div>
                            </div>
                            {item.bestseller && (
                              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                                Bestseller
                              </span>
                            )}
                          </div>
                          
                          <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{item.name}</h4>
                          <p className="text-gray-600 mb-3 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                          
                          <div className="flex items-center justify-between mb-3 sm:mb-0">
                            <span className="text-base sm:text-lg font-bold text-gray-800">₹{item.price}</span>
                            <div className="flex items-center">
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current mr-1" />
                              <span className="text-xs sm:text-sm text-gray-600">{item.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-16 sm:w-24 sm:h-20 lg:w-32 lg:h-24 object-cover rounded-lg flex-shrink-0"
                          />
                          
                          {cartQuantity > 0 ? (
                            <div className="flex items-center bg-orange-600 text-white rounded-lg touch-target">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, cartQuantity - 1)}
                                className="p-2 sm:p-3 hover:bg-orange-700 rounded-l-lg transition-colors touch-target"
                              >
                                <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                              <span className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-sm sm:text-base min-w-[2rem] text-center">{cartQuantity}</span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, cartQuantity + 1)}
                                className="p-2 sm:p-3 hover:bg-orange-700 rounded-r-lg transition-colors touch-target"
                              >
                                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center text-sm sm:text-base touch-target"
                            >
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              ADD
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Category Filter - Fixed at bottom */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors touch-target ${
                selectedCategory === '' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors touch-target ${
                  selectedCategory === category ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};