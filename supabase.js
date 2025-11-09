require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Optional: log partial values to confirm env is loading
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY?.slice(0, 5)); // safe preview

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = supabase;
