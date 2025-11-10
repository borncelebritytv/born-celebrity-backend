const express = require('express');
const router = express.Router();
const supabase = require('../supabase'); // shared client

// Basic route to confirm it's working
router.get('/', (req, res) => {
  res.send('User route is working');
});

// GET /user/all — fetch all user signups
router.get('/all', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('user_signups')
      .select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ users: data });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
