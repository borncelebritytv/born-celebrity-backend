const express = require('express');
const app = express();
const cors = require('cors');

// Import route files from the routes folder
const signupRoute = require('./routes/signup');
const userRoute = require('./routes/user');

// Middleware
app.use(cors());
app.use(express.json());

// Route handlers
app.use('/signup', signupRoute);
app.use('/user', userRoute);

// Server listener
app.listen(10000, () => {
  console.log('✅ Server running on port 10000');
});
