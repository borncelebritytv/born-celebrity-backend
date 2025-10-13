const express = require('express');
const app = express();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase credentials are missing.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

const signupRoute = require('./signup')(supabase); // pass client in

app.use(express.json());
app.use('/signup', signupRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
