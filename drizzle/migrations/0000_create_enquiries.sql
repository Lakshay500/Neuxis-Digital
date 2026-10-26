CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  organization text,
  email text NOT NULL,
  goals text NOT NULL,
  timeline text,
  budget text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

GRANT INSERT ON public.enquiries TO anon;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit enquiries"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);