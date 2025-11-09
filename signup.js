const express = require('express');
const router = express.Router();
const supabase = require('../supabase'); // shared client

// POST /signup
router.post('/signup', async (req, res) => {
  const {
    email,
    show_id,
    device_type,
    platform,
    cover_art_id,
    referrer,
    user_agent
  } = req.body;

  if (!email || !cover_art_id) {
    return res.status(400).json({ error: 'Missing required fields: email or cover_art_id' });
  }

  try {
    const { data, error } = await supabase
      .from('user_signups')
      .insert([{
        email,
        show_id,
        device_type,
        platform,
        cover_art_id,
        referrer,
        user_agent
      }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Signup successful', data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
