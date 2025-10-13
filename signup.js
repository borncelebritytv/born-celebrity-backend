const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// Replace with your actual Supabase keys
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-anon-or-service-role-key';
const supabase = createClient(supabaseUrl, supabaseKey);

router.post('/', async (req, res) => {
  const { email, show_id, device_type, platform } = req.body;

  const { error } = await supabase
    .from('user_signups')
    .insert([{ email, show_id, device_type, platform }]);

  if (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Signup failed' });
  }

  res.status(200).json({ message: 'Signup successful' });
});

module.exports = router;
module.exports = router;
