/*
  # Create Posts Schema

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `image_url` (text)
      - `published_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `author_id` (uuid, references users)
      - `category_id` (uuid, references categories)
      - `language` (text)
      - `status` (text)
      - `meta_title` (text)
      - `meta_description` (text)
      - `meta_keywords` (text[])

    - `post_tags`
      - `post_id` (uuid, references posts)
      - `tag_id` (uuid, references tags)

  2. Security
    - Enable RLS
    - Add policies for public read access
    - Add policies for admin write access
*/

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text NOT NULL,
  excerpt text,
  image_url text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  author_id uuid REFERENCES users(id),
  category_id uuid REFERENCES categories(id),
  language text NOT NULL DEFAULT 'nl',
  status text NOT NULL DEFAULT 'draft',
  meta_title text,
  meta_description text,
  meta_keywords text[],
  CONSTRAINT valid_language CHECK (language = ANY (ARRAY['nl'::text, 'en'::text])),
  CONSTRAINT valid_status CHECK (status = ANY (ARRAY['draft'::text, 'published'::text, 'archived'::text]))
);

-- Create post_tags table
CREATE TABLE IF NOT EXISTS post_tags (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;

-- Create policies for posts
CREATE POLICY "Public can read published posts"
  ON posts
  FOR SELECT
  TO public
  USING (status = 'published');

CREATE POLICY "Admins can do everything with posts"
  ON posts
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Create policies for post_tags
CREATE POLICY "Public can read post_tags"
  ON post_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can do everything with post_tags"
  ON post_tags
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Create indexes
CREATE INDEX posts_language_status_idx ON posts(language, status);
CREATE INDEX posts_published_at_idx ON posts(published_at DESC);
CREATE INDEX posts_slug_idx ON posts(slug);

-- Add trigger for updating updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();