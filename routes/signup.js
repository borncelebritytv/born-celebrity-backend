const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, username } = req.body;

  if (!email || !username) {
    return res.status(400).json({ error: 'Missing email or username' });
  }

  res.json({ message: 'Signup successful', email, username });
});

module.exports = router;
