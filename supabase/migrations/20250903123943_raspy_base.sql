/*
  # Create menu items table

  1. New Tables
    - `menu_items`
      - `id` (integer, primary key)
      - `restaurant_id` (integer, foreign key)
      - `name` (text)
      - `description` (text)
      - `price` (integer, in paise)
      - `image` (text, URL)
      - `category` (text)
      - `is_veg` (boolean)
      - `rating` (decimal)
      - `bestseller` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `menu_items` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS menu_items (
  id integer PRIMARY KEY,
  restaurant_id integer NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL,
  price integer NOT NULL DEFAULT 0,
  image text NOT NULL,
  category text NOT NULL,
  is_veg boolean NOT NULL DEFAULT true,
  rating decimal(2,1) NOT NULL DEFAULT 0.0,
  bestseller boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read menu items"
  ON menu_items
  FOR SELECT
  TO public
  USING (true);

CREATE INDEX IF NOT EXISTS idx_menu_items_restaurant_id ON menu_items(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);