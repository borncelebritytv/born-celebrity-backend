const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// Replace with your actual Supabase credentials
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// POST /signup — logs user signup to Supabase
router.post('/', async (req, res) => {
  const { email, show_id, device_type, platform } = req.body;

  if (!email || !show_id || !device_type || !platform) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { error } = await supabase
    .from('user_signups')
    .insert([{ email, show_id, device_type, platform }]);

  if (error) {
    console.error('Supabase insert error:', error);
    return res.status(500).json({ error: 'Signup failed' });
  }

  res.status(200).json({ message: 'Signup successful' });
});

// GET /signup — test route to confirm it's live
router.get('/', (req, res) => {
  res.send('Signup route is live — POST only');
});

module.exports = router;
