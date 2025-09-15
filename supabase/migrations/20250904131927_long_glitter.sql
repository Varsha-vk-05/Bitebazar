/*
  # Create job applications table

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `position` (text)
      - `experience` (text)
      - `cover_letter` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `job_applications` table
    - Add policy for anyone to submit applications
    - Add policy for authenticated users to read their own applications
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  position text NOT NULL,
  experience text NOT NULL,
  cover_letter text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit job applications"
  ON job_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own job applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (email = auth.email());