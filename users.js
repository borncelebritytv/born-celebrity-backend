const express = require('express');
const router = express.Router();
const supabase = require('./supabase'); // Make sure supabase.js is in the same folder

// GET /users → fetch all users from Supabase
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    res.json(data);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
