const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const signupRoute = require('./routes/signup');
const userRoute = require('./routes/user');

app.use('/signup', signupRoute);
app.use('/user', userRoute);

// Root check
app.get('/', (req, res) => {
  res.send('Born Celebrity backend is live');
});

// Port setup for Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
