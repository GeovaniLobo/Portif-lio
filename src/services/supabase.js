// src/services/supabase.js
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://coteszjxrrhjslbgnksu.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable__oMI4eA7DLe5o3oQ4fUvJw_Ri3h8HqK'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)