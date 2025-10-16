const express = require('express');

module.exports = function(supabase) {
  const router = express.Router();

  // POST /signup — handles incoming signup data
  router.post('/', async (req, res) => {
    console.log('POST /signup received:', req.body); // ✅ Logs incoming data

    const {
      email,
      show_id,
      device_type,
      platform,
      cover_art_id,
      referrer,
      user_agent
    } = req.body;

    const { error } = await supabase
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
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Signup successful' });
  });

  // GET /signup — confirms route is live
  router.get('/', (req, res) => {
    res.send('Signup route is live — POST only');
  });

  return router;
};
