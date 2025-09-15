import { MenuItem } from '../types';

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

const menuItemTemplates = [
  // Starters
  { name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', category: 'Starters', isVeg: true, basePrice: 180 },
  { name: 'Chicken Tikka', description: 'Tender chicken pieces marinated in yogurt and spices', category: 'Starters', isVeg: false, basePrice: 220 },
  { name: 'Veg Spring Rolls', description: 'Crispy rolls filled with fresh vegetables', category: 'Starters', isVeg: true, basePrice: 150 },
  { name: 'Fish Fingers', description: 'Golden fried fish strips with tartar sauce', category: 'Starters', isVeg: false, basePrice: 250 },
  { name: 'Mushroom Pepper Fry', description: 'Spicy mushrooms with black pepper', category: 'Starters', isVeg: true, basePrice: 160 },
  
  // Main Course
  { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', category: 'Main Course', isVeg: false, basePrice: 320 },
  { name: 'Dal Makhani', description: 'Rich and creamy black lentils', category: 'Main Course', isVeg: true, basePrice: 180 },
  { name: 'Biryani', description: 'Fragrant basmati rice with spices and meat/vegetables', category: 'Main Course', isVeg: false, basePrice: 280 },
  { name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', category: 'Main Course', isVeg: true, basePrice: 200 },
  { name: 'Chicken Curry', description: 'Traditional chicken curry with aromatic spices', category: 'Main Course', isVeg: false, basePrice: 300 },
  { name: 'Veg Pulao', description: 'Aromatic rice with mixed vegetables', category: 'Main Course', isVeg: true, basePrice: 160 },
  { name: 'Mutton Rogan Josh', description: 'Tender mutton in rich Kashmiri gravy', category: 'Main Course', isVeg: false, basePrice: 380 },
  
  // Rice & Breads
  { name: 'Garlic Naan', description: 'Soft bread with garlic and herbs', category: 'Breads', isVeg: true, basePrice: 80 },
  { name: 'Butter Roti', description: 'Whole wheat bread with butter', category: 'Breads', isVeg: true, basePrice: 40 },
  { name: 'Jeera Rice', description: 'Basmati rice with cumin seeds', category: 'Rice', isVeg: true, basePrice: 120 },
  { name: 'Fried Rice', description: 'Wok-tossed rice with vegetables', category: 'Rice', isVeg: true, basePrice: 140 },
  
  // Desserts
  { name: 'Gulab Jamun', description: 'Sweet milk dumplings in sugar syrup', category: 'Desserts', isVeg: true, basePrice: 80 },
  { name: 'Ice Cream', description: 'Creamy vanilla ice cream', category: 'Desserts', isVeg: true, basePrice: 60 },
  { name: 'Chocolate Cake', description: 'Rich chocolate cake slice', category: 'Desserts', isVeg: true, basePrice: 120 },
  { name: 'Kulfi', description: 'Traditional Indian ice cream', category: 'Desserts', isVeg: true, basePrice: 70 },
  
  // Beverages
  { name: 'Lassi', description: 'Refreshing yogurt-based drink', category: 'Beverages', isVeg: true, basePrice: 60 },
  { name: 'Fresh Lime Soda', description: 'Tangy lime with soda water', category: 'Beverages', isVeg: true, basePrice: 50 },
  { name: 'Masala Chai', description: 'Spiced Indian tea', category: 'Beverages', isVeg: true, basePrice: 30 },
  { name: 'Cold Coffee', description: 'Iced coffee with milk and sugar', category: 'Beverages', isVeg: true, basePrice: 80 }
];

export const generateMenuItems = (restaurantId: number): MenuItem[] => {
  const menuItems: MenuItem[] = [];
  let itemId = restaurantId * 1000; // Ensure unique IDs
  
  // Generate 8-15 items per restaurant
  const itemCount = 8 + Math.floor(Math.random() * 8);
  const selectedTemplates = [...menuItemTemplates]
    .sort(() => Math.random() - 0.5)
    .slice(0, itemCount);
  
  selectedTemplates.forEach((template, index) => {
    const priceVariation = 0.8 + Math.random() * 0.4; // ±20% price variation
    const item: MenuItem = {
      id: itemId + index,
      name: template.name,
      description: template.description,
      price: Math.round(template.basePrice * priceVariation),
      image: foodImages[index % foodImages.length],
      category: template.category,
      isVeg: template.isVeg,
      rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
      bestseller: Math.random() > 0.7
    };
    
    menuItems.push(item);
  });
  
  return menuItems;
};