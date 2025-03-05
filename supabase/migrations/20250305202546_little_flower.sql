/*
  # Information Section Schema

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `category` (text)
      - `image_url` (text)
      - `author_id` (uuid, references authors)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `language` (text)
      - `status` (text)
      - `tags` (text[])
      - `metadata` (jsonb)

    - `authors`
      - `id` (uuid, primary key)
      - `name` (text)
      - `bio` (text)
      - `avatar_url` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `client_stories`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `client_name` (text)
      - `image_url` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `language` (text)
      - `status` (text)
      - `treatment_type` (text)
      - `outcome` (text)

    - `health_tips`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `category` (text)
      - `image_url` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `language` (text)
      - `status` (text)
      - `tags` (text[])

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage content
    - Add policies for public read access to published content
*/

-- Create authors table
CREATE TABLE IF NOT EXISTS authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  category text NOT NULL,
  image_url text,
  author_id uuid REFERENCES authors(id),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  language text NOT NULL DEFAULT 'nl',
  status text NOT NULL DEFAULT 'draft',
  tags text[],
  metadata jsonb DEFAULT '{}'::jsonb,
  CONSTRAINT valid_status CHECK (status IN ('draft', 'published', 'archived'))
);

-- Create client_stories table
CREATE TABLE IF NOT EXISTS client_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  client_name text NOT NULL,
  image_url text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  language text NOT NULL DEFAULT 'nl',
  status text NOT NULL DEFAULT 'draft',
  treatment_type text NOT NULL,
  outcome text NOT NULL,
  CONSTRAINT valid_status CHECK (status IN ('draft', 'published', 'archived'))
);

-- Create health_tips table
CREATE TABLE IF NOT EXISTS health_tips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  image_url text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  language text NOT NULL DEFAULT 'nl',
  status text NOT NULL DEFAULT 'draft',
  tags text[],
  CONSTRAINT valid_status CHECK (status IN ('draft', 'published', 'archived'))
);

-- Enable Row Level Security
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_tips ENABLE ROW LEVEL SECURITY;

-- Create policies for authors
CREATE POLICY "Authors are viewable by everyone"
  ON authors
  FOR SELECT
  USING (true);

-- Create policies for articles
CREATE POLICY "Published articles are viewable by everyone"
  ON articles
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Articles are manageable by authenticated users"
  ON articles
  USING (auth.role() = 'authenticated');

-- Create policies for client stories
CREATE POLICY "Published client stories are viewable by everyone"
  ON client_stories
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Client stories are manageable by authenticated users"
  ON client_stories
  USING (auth.role() = 'authenticated');

-- Create policies for health tips
CREATE POLICY "Published health tips are viewable by everyone"
  ON health_tips
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Health tips are manageable by authenticated users"
  ON health_tips
  USING (auth.role() = 'authenticated');

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_authors_updated_at
  BEFORE UPDATE ON authors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_client_stories_updated_at
  BEFORE UPDATE ON client_stories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_health_tips_updated_at
  BEFORE UPDATE ON health_tips
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();