/*
  # Create restaurants table

  1. New Tables
    - `restaurants`
      - `id` (integer, primary key)
      - `name` (text)
      - `image` (text, URL)
      - `cuisine` (text array)
      - `rating` (decimal)
      - `delivery_time` (text)
      - `distance` (text)
      - `offers` (text array)
      - `cost_for_two` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `restaurants` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS restaurants (
  id integer PRIMARY KEY,
  name text NOT NULL,
  image text NOT NULL,
  cuisine text[] NOT NULL DEFAULT '{}',
  rating decimal(2,1) NOT NULL DEFAULT 0.0,
  delivery_time text NOT NULL,
  distance text NOT NULL,
  offers text[] NOT NULL DEFAULT '{}',
  cost_for_two integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read restaurants"
  ON restaurants
  FOR SELECT
  TO public
  USING (true);