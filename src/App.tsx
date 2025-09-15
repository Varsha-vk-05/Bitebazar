import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { RestaurantDetail } from './components/RestaurantDetail';
import { CartModal } from './components/CartModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { TermsPage } from './components/pages/TermsPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { HelpPage } from './components/pages/HelpPage';
import { RefundPage } from './components/pages/RefundPage';
import { CareersPage } from './components/pages/CareersPage';
import { TeamPage } from './components/pages/TeamPage';
import { InvestorPage } from './components/pages/InvestorPage';
import { SocialPage } from './components/pages/SocialPages';
import { Restaurant } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentPage('restaurant');
  };

  const handleBackToHome = () => {
    setSelectedRestaurant(null);
    setCurrentPage('home');
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedRestaurant(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            searchQuery={searchQuery}
            onRestaurantClick={handleRestaurantClick}
          />
        );
      case 'restaurant':
        return selectedRestaurant ? (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onBack={handleBackToHome}
          />
        ) : (
          <HomePage
            searchQuery={searchQuery}
            onRestaurantClick={handleRestaurantClick}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'help':
        return <HelpPage />;
      case 'refund':
        return <RefundPage />;
      case 'careers':
        return <CareersPage />;
      case 'team':
        return <TeamPage />;
      case 'investor':
        return <InvestorPage />;
      case 'facebook':
        return <SocialPage platform="facebook" />;
      case 'twitter':
        return <SocialPage platform="twitter" />;
      case 'instagram':
        return <SocialPage platform="instagram" />;
      case 'youtube':
        return <SocialPage platform="youtube" />;
      default:
        return (
          <HomePage
            searchQuery={searchQuery}
            onRestaurantClick={handleRestaurantClick}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            onAuthClick={() => setIsAuthOpen(true)}
            onCartClick={() => setIsCartOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <main className="min-h-screen">
            {renderPage()}
          </main>
          
          <Footer onPageChange={handlePageChange} />
          
          <CartModal
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
          
          <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;