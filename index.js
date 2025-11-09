require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const signupRoute = require('./routes/signup');
const userRoute = require('./routes/user');

app.use('/signup', signupRoute);
app.use('/user', userRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Born Celebrity backend is live');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
