/*
  # Insert Sample Blog Post

  1. Insert sample data
    - Add a sample blog category
    - Add sample tags
    - Add a sample blog post
    - Link tags to the post
*/

-- Insert sample category
INSERT INTO blog_categories (name, slug, description)
VALUES (
  'Gezondheid',
  'gezondheid',
  'Artikelen over gezondheid en welzijn'
);

-- Insert sample tags
INSERT INTO blog_tags (name)
VALUES 
  ('gezondheid'),
  ('welzijn'),
  ('natuurlijk'),
  ('behandeling');

-- Insert sample blog post
INSERT INTO blog_posts (
  title,
  slug,
  content,
  excerpt,
  status,
  language,
  meta_title,
  meta_description,
  meta_keywords,
  category_id,
  published_at
)
VALUES (
  'De kracht van natuurlijke beweging',
  'de-kracht-van-natuurlijke-beweging',
  '# De kracht van natuurlijke beweging

Ons lichaam is gemaakt om te bewegen. Natuurlijke beweging is essentieel voor onze gezondheid en welzijn. In dit artikel ontdek je waarom natuurlijke beweging zo belangrijk is en hoe je het kunt integreren in je dagelijks leven.

## Waarom natuurlijke beweging?

Natuurlijke beweging helpt bij:
- Het verbeteren van je houding
- Het verminderen van pijn en stijfheid
- Het verhogen van je energie
- Het versterken van je immuunsysteem

## Tips voor meer natuurlijke beweging

1. Begin je dag met rustige rekoefeningen
2. Maak regelmatig een wandeling
3. Neem vaker de trap in plaats van de lift
4. Doe regelmatig simpele mobiliteitsoefeningenw

## Conclusie

Door meer natuurlijk te bewegen, help je je lichaam om in balans te komen en te blijven. Start vandaag nog met kleine veranderingen in je dagelijkse routine.',
  'Ontdek waarom natuurlijke beweging essentieel is voor je gezondheid en hoe je het kunt integreren in je dagelijks leven.',
  'published',
  'nl',
  'De kracht van natuurlijke beweging | Praktijk Tielo',
  'Leer waarom natuurlijke beweging essentieel is voor je gezondheid en welzijn. Ontdek praktische tips om meer natuurlijke beweging in je dag te brengen.',
  ARRAY['natuurlijke beweging', 'gezondheid', 'welzijn', 'beweging', 'houding', 'energie'],
  (SELECT id FROM blog_categories WHERE slug = 'gezondheid'),
  now()
);

-- Link tags to post
INSERT INTO blog_post_tags (post_id, tag_id)
SELECT 
  (SELECT id FROM blog_posts WHERE slug = 'de-kracht-van-natuurlijke-beweging'),
  id
FROM blog_tags
WHERE name IN ('gezondheid', 'welzijn', 'natuurlijk');