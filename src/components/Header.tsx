import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, User, Menu, X, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onAuthClick: () => void;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onAuthClick, onCartClick, searchQuery, onSearchChange }) => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState('Detecting location...');
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);

  const detectLocation = () => {
    setIsDetectingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Use a more reliable geocoding service
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`)
            .then(response => response.json())
            .then(data => {
              if (data && data.address) {
                const address = data.address;
                const city = address.city || address.town || address.village || address.suburb;
                const state = address.state;
                const area = address.neighbourhood || address.suburb || '';
                
                if (city && state) {
                  setLocation(area ? `${area}, ${city}` : `${city}, ${state}`);
                } else {
                  setLocation('Location detected');
                }
              } else {
                setLocation('Location detected');
              }
              setIsDetectingLocation(false);
            })
            .catch(() => {
              setLocation('Bangalore, Karnataka');
              setIsDetectingLocation(false);
            });
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLocation('Enable location access');
          setIsDetectingLocation(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000
        }
      );
    } else {
      setLocation('Location not supported');
      setIsDetectingLocation(false);
    }
  };

  React.useEffect(() => {
    detectLocation();
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent pulse-glow">BiteBazar</h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for restaurants and food"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-gray-700 hover:text-orange-600 cursor-pointer transition-colors group">
              <MapPin className="w-5 h-5 mr-1" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Deliver to</span>
                <span className="text-sm font-medium">{location}</span>
              </div>
              <button
                onClick={detectLocation}
                disabled={isDetectingLocation}
                className="ml-2 p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isDetectingLocation ? 'animate-spin' : ''}`} />
              </button>
            </div>
            
            <button
              onClick={onCartClick}
              className="flex items-center text-gray-700 hover:text-orange-600 cursor-pointer transition-colors relative"
            >
              <ShoppingCart className="w-6 h-6 mr-1" />
              <span>Cart</span>
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                  {cart.totalItems}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Hi, {user.name}</span>
                <button
                  onClick={logout}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="flex items-center text-gray-700 hover:text-orange-600 cursor-pointer transition-colors"
              >
                <User className="w-5 h-5 mr-1" />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for restaurants and food"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-gray-700">
                <MapPin className="w-5 h-5 mr-2" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Deliver to</div>
                  <div className="text-sm font-medium">{location}</div>
                </div>
                <button
                  onClick={detectLocation}
                  disabled={isDetectingLocation}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 ${isDetectingLocation ? 'animate-spin' : ''}`} />
                </button>
              </div>
              
              <button
                onClick={() => {
                  onCartClick();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center text-gray-700 w-full"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span>Cart</span>
                {cart.totalItems > 0 && (
                  <span className="ml-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                    {cart.totalItems}
                  </span>
                )}
              </button>

              {user ? (
                <div className="space-y-2">
                  <div className="text-gray-700">Hi, {user.name}</div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-orange-600 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onAuthClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center text-gray-700 w-full"
                >
                  <User className="w-5 h-5 mr-2" />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};