/*
# Create bookings table (single-tenant, no auth)

1. New Tables
- `bookings`
- `id` (uuid, primary key)
- `name` (text, not null) — guest name from the booking form
- `phone` (text, not null) — guest phone from the booking form
- `date` (text, not null) — requested booking date
- `comment` (text, nullable) — optional message
- `created_at` (timestamp)

2. Security
- Enable RLS on `bookings`.
- Grant INSERT to `anon` + `authenticated` only (visitors submit bookings; nobody can read them from the browser).
- Insert-only policy for `anon` + `authenticated` so the landing page form can save requests.
- No SELECT policy: booking data is not publicly readable.
*/

CREATE TABLE IF NOT EXISTS bookings (
id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
name text NOT NULL,
phone text NOT NULL,
date text NOT NULL,
comment text,
created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON bookings TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings
FOR INSERT TO anon, authenticated
WITH CHECK (true);
