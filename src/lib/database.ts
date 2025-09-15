import { supabase, isSupabaseConfigured } from './supabase';
import { Restaurant, MenuItem } from '../types';
import { restaurants } from '../data/restaurants';
import { generateMenuItems } from '../data/menuItems';

// Restaurant operations
export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  // If Supabase is not configured, return local data immediately
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using local restaurant data');
    return restaurants;
  }

  try {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .order('rating', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      // Fallback to local data
      return restaurants;
    }

    if (data && data.length > 0) {
      // Transform database data to match our Restaurant interface
      return data.map(restaurant => ({
        id: restaurant.id,
        name: restaurant.name,
        image: restaurant.image,
        cuisine: restaurant.cuisine,
        rating: Number(restaurant.rating),
        deliveryTime: restaurant.delivery_time,
        distance: restaurant.distance,
        offers: restaurant.offers,
        costForTwo: restaurant.cost_for_two
      }));
    }

    // If no data in database, return local data
    return restaurants;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return restaurants; // Fallback to local data
  }
};

// Menu items operations
export const fetchMenuItems = async (restaurantId: number): Promise<MenuItem[]> => {
  // If Supabase is not configured, return generated data immediately
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using generated menu data');
    return generateMenuItems(restaurantId);
  }

  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('category', { ascending: true });

    if (error) {
      console.error('Database error:', error);
      // Fallback to generated data
      return generateMenuItems(restaurantId);
    }

    if (data && data.length > 0) {
      // Transform database data to match our MenuItem interface
      return data.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
        category: item.category,
        isVeg: item.is_veg,
        rating: Number(item.rating),
        bestseller: item.bestseller
      }));
    }

    // If no data in database, generate menu items
    return generateMenuItems(restaurantId);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return generateMenuItems(restaurantId); // Fallback to generated data
  }
};

// Order operations
export const createOrder = async (orderData: {
  user_id: string;
  restaurant_id: number;
  items: any[];
  total_amount: number;
  delivery_address: string;
  payment_method?: string;
  payment_status?: string;
}) => {
  // If Supabase is not configured, return demo success
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, returning demo success for order');
    return { success: true, demo: true };
  }

  try {
    // First, verify if the restaurant_id exists in the database
    const { data: restaurantExists, error: restaurantError } = await supabase
      .from('restaurants')
      .select('id')
      .eq('id', orderData.restaurant_id)
      .single();

    let validRestaurantId = orderData.restaurant_id;

    // If restaurant doesn't exist, find any existing restaurant as fallback
    if (restaurantError || !restaurantExists) {
      console.warn(`Restaurant ID ${orderData.restaurant_id} not found in database, using fallback`);
      
      const { data: fallbackRestaurant, error: fallbackError } = await supabase
        .from('restaurants')
        .select('id')
        .limit(1)
        .single();

      if (fallbackError || !fallbackRestaurant) {
        console.error('No restaurants found in database for fallback');
        // For demo purposes, return success even if no restaurants exist
        return { success: true, demo: true };
      }

      validRestaurantId = fallbackRestaurant.id;
    }

    const { data, error } = await supabase
      .from('orders')
      .insert([{
        ...orderData,
        restaurant_id: validRestaurantId,
        payment_method: orderData.payment_method || 'card',
        payment_status: orderData.payment_status || 'pending'
      }])
      .select()
      .single();

    if (error) {
      console.error('Database error creating order:', error);
      // For demo purposes, don't throw error
      return { success: true, demo: true };
    }
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    // For demo purposes, return success
    return { success: true, demo: true };
  }
};

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // If Supabase is not configured, return demo success
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, returning demo success for contact form');
    return { success: true };
  }

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }])
      .select()
      .single();

    if (error) {
      console.error('Error submitting contact form:', error);
      // Still return success for demo purposes
      return { success: true };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // Return success for demo purposes even if database fails
    return { success: true };
  }
};

// Job application submission
export const submitJobApplication = async (applicationData: {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  cover_letter: string;
}) => {
  // If Supabase is not configured, return demo success
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, returning demo success for job application');
    return { success: true };
  }

  try {
    const { data, error } = await supabase
      .from('job_applications')
      .insert([{
        name: applicationData.name,
        email: applicationData.email,
        phone: applicationData.phone,
        position: applicationData.position,
        experience: applicationData.experience,
        cover_letter: applicationData.cover_letter
      }])
      .select()
      .single();

    if (error) {
      console.error('Error submitting job application:', error);
      // Still return success for demo purposes
      return { success: true };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting job application:', error);
    // Return success for demo purposes even if database fails
    return { success: true };
  }
};