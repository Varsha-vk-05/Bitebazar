import { Restaurant } from '../types';

const foodImages = [
  'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
  'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
  'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
  'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
  'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg',
  'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg',
  'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg',
  'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg'
];

const cuisineTypes = [
  ['North Indian', 'Punjabi'],
  ['South Indian', 'Tamil'],
  ['Chinese', 'Asian'],
  ['Italian', 'Continental'],
  ['Mexican', 'Tex-Mex'],
  ['Thai', 'Asian'],
  ['Japanese', 'Sushi'],
  ['Mediterranean', 'Greek'],
  ['Indian', 'Vegetarian'],
  ['Fast Food', 'American'],
  ['Bengali', 'Indian'],
  ['Gujarati', 'Indian'],
  ['Rajasthani', 'Indian'],
  ['Kerala', 'South Indian'],
  ['Hyderabadi', 'Biryani'],
  ['Mughlai', 'North Indian'],
  ['Street Food', 'Indian'],
  ['Desserts', 'Sweets'],
  ['Beverages', 'Drinks'],
  ['Healthy', 'Salads']
];

const restaurantNames = [
  'Spice Garden', 'Golden Palace', 'Royal Kitchen', 'Taste of India', 'Food Paradise',
  'Curry House', 'Biryani Express', 'Dosa Corner', 'Pizza Hub', 'Burger Junction',
  'Noodle Bar', 'Tandoor Nights', 'Cafe Delight', 'Sweet Treats', 'Fresh Bites',
  'Ocean Pearl', 'Mountain View', 'City Lights', 'Garden Fresh', 'Spicy Affairs',
  'Masala Magic', 'Chaat Street', 'Kebab Corner', 'Rice Bowl', 'Bread Basket',
  'Tea Time', 'Coffee Culture', 'Juice Junction', 'Smoothie Station', 'Ice Cream Parlor',
  'Bakery Bliss', 'Pastry Palace', 'Cake Corner', 'Cookie Jar', 'Donut Delight',
  'Sandwich Shop', 'Wrap World', 'Salad Station', 'Soup Kitchen', 'Grill Master',
  'BBQ Nation', 'Roast House', 'Steam Kitchen', 'Fry Palace', 'Bake House',
  'Curry Express', 'Spice Route', 'Flavor Town', 'Taste Buds', 'Food Factory'
];

const offers = [
  '50% OFF up to ₹100',
  '40% OFF up to ₹80',
  '30% OFF up to ₹75',
  'Buy 1 Get 1 Free',
  'Free Delivery',
  '₹50 OFF on orders above ₹300',
  '₹100 OFF on orders above ₹500',
  'Flat 25% OFF',
  'Extra 20% OFF',
  'Weekend Special 60% OFF'
];

const generateRestaurants = (): Restaurant[] => {
  const restaurants: Restaurant[] = [];
  
  for (let i = 1; i <= 500; i++) {
    const nameIndex = (i - 1) % restaurantNames.length;
    const cuisineIndex = (i - 1) % cuisineTypes.length;
    const imageIndex = (i - 1) % foodImages.length;
    
    const restaurant: Restaurant = {
      id: i,
      name: `${restaurantNames[nameIndex]} ${Math.floor((i - 1) / restaurantNames.length) + 1}`,
      image: foodImages[imageIndex],
      cuisine: cuisineTypes[cuisineIndex],
      rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
      deliveryTime: `${20 + Math.floor(Math.random() * 40)}-${30 + Math.floor(Math.random() * 40)} mins`,
      distance: `${(0.5 + Math.random() * 4.5).toFixed(1)} km`,
      offers: Math.random() > 0.3 ? [offers[Math.floor(Math.random() * offers.length)]] : [],
      costForTwo: 200 + Math.floor(Math.random() * 800)
    };
    
    restaurants.push(restaurant);
  }
  
  return restaurants;
};

export const restaurants = generateRestaurants();