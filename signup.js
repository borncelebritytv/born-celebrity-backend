const express = require('express');

module.exports = function(supabase) {
  const router = express.Router();

  router.post('/', async (req, res) => {
    const {
      email,
      showid,
      device_type,
      platform,
      // Add any additional fields here if your table includes more
      // Example: user_agent, location, referral_code, etc.
    } = req.body;

    // Validate required fields
    if (!email || !showid || !device_type || !platform) {
      console.warn('⚠️ Missing required fields:', req.body);
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const { error } = await supabase
        .from('user_signups')
        .insert([{
          email,
          showid,
          "device type": device_type, // quoted if column has space
          platform
          // Add any additional fields here as needed
        }]);

      if (error) {
        console.error('🔥 Supabase insert error:', error);
        return res.status(500).json({ error: error.message || 'Signup failed' });
      }

      console.log('✅ Signup inserted:', { email, showid, device_type, platform });
      res.status(200).json({ message: 'Signup successful' });
    } catch (err) {
      console.error('🔥 Unexpected error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/', (req, res) => {
    res.send('Signup route is live — POST only');
  });

  return router;
};
