import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only create Supabase client if both URL and key are provided
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey && supabase);
};

// Database types
export interface Database {
  public: {
    Tables: {
      restaurants: {
        Row: {
          id: number;
          name: string;
          image: string;
          cuisine: string[];
          rating: number;
          delivery_time: string;
          distance: string;
          offers: string[];
          cost_for_two: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          image: string;
          cuisine: string[];
          rating: number;
          delivery_time: string;
          distance: string;
          offers: string[];
          cost_for_two: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          image?: string;
          cuisine?: string[];
          rating?: number;
          delivery_time?: string;
          distance?: string;
          offers?: string[];
          cost_for_two?: number;
          created_at?: string;
        };
      };
      menu_items: {
        Row: {
          id: number;
          restaurant_id: number;
          name: string;
          description: string;
          price: number;
          image: string;
          category: string;
          is_veg: boolean;
          rating: number;
          bestseller: boolean;
          created_at: string;
        };
        Insert: {
          id?: number;
          restaurant_id: number;
          name: string;
          description: string;
          price: number;
          image: string;
          category: string;
          is_veg: boolean;
          rating: number;
          bestseller?: boolean;
          created_at?: string;
        };
        Update: {
          id?: number;
          restaurant_id?: number;
          name?: string;
          description?: string;
          price?: number;
          image?: string;
          category?: string;
          is_veg?: boolean;
          rating?: number;
          bestseller?: boolean;
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: number;
          user_id: string;
          restaurant_id: number;
          items: any[];
          total_amount: number;
          status: string;
          delivery_address: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          restaurant_id: number;
          items: any[];
          total_amount: number;
          status?: string;
          delivery_address: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          restaurant_id?: number;
          items?: any[];
          total_amount?: number;
          status?: string;
          delivery_address?: string;
          created_at?: string;
        };
      };
    };
  };
}