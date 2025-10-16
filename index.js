const express = require('express');
const app = express();
const { createClient } = require('@supabase/supabase-js');

// TEMP: Hardcoded Supabase credentials for debugging
const supabaseUrl = 'https://kkvwxtqrthsnlloimssb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrdnd4dHFydGhzbmxsb2ltc3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMzc5MjIsImV4cCI6MjA3NTcxMzkyMn0.rSRoPMDKfA6pXtpCvHgrVBTa7-9Aqo2MLfMw-k1wkWo';

const supabase = createClient(supabaseUrl, supabaseKey);

const signupRoute = require('./signup')(supabase);

app.use(express.json());
app.use('/signup', signupRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

