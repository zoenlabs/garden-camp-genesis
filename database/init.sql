CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS garden_camp_applications (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name             TEXT NOT NULL,
  age_range             TEXT NOT NULL,
  city_state            TEXT NOT NULL,
  whatsapp              TEXT NOT NULL UNIQUE,
  email                 TEXT NOT NULL UNIQUE,
  music_roles           TEXT[] NOT NULL,
  music_role_other      TEXT NULL,
  music_experience      TEXT NOT NULL,
  music_bio             TEXT NOT NULL,
  instagram             TEXT NOT NULL,
  portfolio_url         TEXT NOT NULL,
  availability          TEXT NOT NULL,
  has_food_restriction  BOOLEAN NOT NULL DEFAULT FALSE,
  food_restriction_details TEXT NULL,
  investment_readiness  TEXT NOT NULL,
  selection_reason      TEXT NOT NULL,
  status                TEXT NOT NULL DEFAULT 'new',
  source                TEXT DEFAULT 'landing_page',
  created_at            TIMESTAMPTZ DEFAULT NOW(),
  updated_at            TIMESTAMPTZ DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_updated_at
BEFORE UPDATE ON garden_camp_applications
FOR EACH ROW EXECUTE FUNCTION update_updated_at();
