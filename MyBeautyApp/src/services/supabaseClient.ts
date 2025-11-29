import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://dswmcichzoozguzmcylg.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzd21jaWNoem9vemd1em1jeWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjU4NTgsImV4cCI6MjA3OTYwMTg1OH0.XilmAbcb5kFTHAHEpNdnJmK41i6Smnlu6Ey2ouBJX2g"

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);