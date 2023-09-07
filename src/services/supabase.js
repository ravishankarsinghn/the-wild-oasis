import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dvvaclhtntneptcqvxdb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2dmFjbGh0bnRuZXB0Y3F2eGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MjYyNjAsImV4cCI6MjAwODEwMjI2MH0.svzs9LZizwKxZ5UsKbIHP6QnKWuOfkC4EpLdfiVqymM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
