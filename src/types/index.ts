export interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  distance: string;
  offers: string[];
  costForTwo: number;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating: number;
  bestseller?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: number;
  restaurantName: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}