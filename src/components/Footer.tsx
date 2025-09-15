import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">BiteBazar</h3>
            <p className="text-gray-300 mb-4">
              India's largest food delivery platform bringing delicious meals to your doorstep.
            </p>
            <div className="flex space-x-4 perspective-container">
              <button onClick={() => onPageChange('facebook')}>
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-125 card-3d" />
              </button>
              <button onClick={() => onPageChange('twitter')}>
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-300 cursor-pointer transition-all duration-300 hover:scale-125 card-3d" />
              </button>
              <button onClick={() => onPageChange('instagram')}>
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-all duration-300 hover:scale-125 card-3d" />
              </button>
              <button onClick={() => onPageChange('youtube')}>
                <Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-all duration-300 hover:scale-125 card-3d" />
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onPageChange('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('careers')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('team')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('investor')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investor Relations
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onPageChange('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('help')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help & FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('partner')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Partner with us
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onPageChange('terms')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('privacy')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('refund')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 BiteBazar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                +91 1800-123-4567
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                support@bitebazar.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};