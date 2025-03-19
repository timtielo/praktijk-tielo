/*
  # Insert Initial Data

  1. Insert Data
    - Add admin user
    - Add initial categories
*/

-- Insert admin user
INSERT INTO users (email, name, role)
VALUES (
  'info@praktijk-tielo.nl',
  'Tim Tielkemeijer',
  'admin'
);

-- Insert initial categories
INSERT INTO categories (name, slug, description)
VALUES 
  (
    'Fysieke klachten',
    'fysieke-klachten',
    'Behandelingen voor fysieke klachten zoals rugpijn, gewrichtspijn en hoofdpijn'
  ),
  (
    'Mentale klachten',
    'mentale-klachten',
    'Behandelingen voor mentale klachten zoals stress, burn-out en depressie'
  ),
  (
    'Voeding & Lifestyle',
    'voeding-lifestyle',
    'Advies over voeding en leefstijl voor optimale gezondheid'
  ),
  (
    'Behandelmethode',
    'behandelmethode',
    'Uitleg over onze natuurlijke behandelmethode'
  );