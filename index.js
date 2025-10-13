const express = require('express');
const app = express();
const usersRoute = require('./users');
const signupRoute = require('./signup');

app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use('/users', usersRoute);
app.use('/signup', signupRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Born Celebrity backend is live');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
