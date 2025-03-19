/*
  # Create Tags Schema

  1. New Tables
    - `tags`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for public read access
    - Add policies for admin write access
*/

-- Create tags table
CREATE TABLE IF NOT EXISTS tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can read tags"
  ON tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can do everything with tags"
  ON tags
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Create index
CREATE INDEX tags_name_idx ON tags(name);

-- Insert initial tags
INSERT INTO tags (name)
VALUES 
  ('rugpijn'),
  ('gewrichtspijn'),
  ('hoofdpijn'),
  ('stress'),
  ('burn-out'),
  ('depressie'),
  ('voeding'),
  ('lifestyle'),
  ('natuurlijk'),
  ('behandeling'),
  ('gezondheid'),
  ('welzijn');