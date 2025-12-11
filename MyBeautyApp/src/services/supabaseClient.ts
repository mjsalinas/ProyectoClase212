import { createClient } from "@supabase/supabase-js";
<<<<<<< HEAD
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@env";
=======
import {SUPABASE_URL, SUPABASE_ANON_KEY} from  "@env";
>>>>>>> origin/mybeautyapp-refactor

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);