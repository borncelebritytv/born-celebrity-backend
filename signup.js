const express = require('express');

module.exports = function(supabase) {
  const router = express.Router();

  router.post('/', async (req, res) => {
    const { email, show_id, device_type, platform } = req.body;

    if (!email || !show_id || !device_type || !platform) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const { error } = await supabase
        .from('user_signups')
        .insert([{ email, show_id, device_type, platform }]);

      if (error) {
        console.error('Supabase insert error:', error);
        return res.status(500).json({ error: 'Signup failed' });
      }

      res.status(200).json({ message: 'Signup successful' });
    } catch (err) {
      console.error('Unexpected error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/', (req, res) => {
    res.send('Signup route is live — POST only');
  });

  return router;
};
