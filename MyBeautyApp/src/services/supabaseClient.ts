<<<<<<< HEAD
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://dswmcichzoozguzmcylg.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzd21jaWNoem9vemd1em1jeWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjU4NTgsImV4cCI6MjA3OTYwMTg1OH0.XilmAbcb5kFTHAHEpNdnJmK41i6Smnlu6Ey2ouBJX2g"

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
=======
// tarea: implementar .env

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://enfiuhpcusasycnmrihv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZml1aHBjdXNhc3ljbm1yaWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjIyNTYsImV4cCI6MjA3OTU5ODI1Nn0.RVH9CvK2pSx8CCWIiWOmBSmy-P6zREdYeyaHmCJ3YHg"

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
>>>>>>> origin/mybeautyapp-refactor
