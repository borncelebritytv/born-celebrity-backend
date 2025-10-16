const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const signupRoute = require('./signup');

const app = express();
app.use(express.json());

// 🔐 Supabase connection
const supabase = createClient(
  'https://kkvwxtqrthsnlloimssb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrdnd4dHFydGhzbmxsb2ltc3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMzc5MjIsImV4cCI6MjA3NTcxMzkyMn0.rSRoPMDKfA6pXtpCvHgrVBTa7-9Aqo2MLfMw-k1wkWo'
);

// 🔗 Mount /signup route
app.use('/signup', signupRoute(supabase));

// 🚀 Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

