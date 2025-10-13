const express = require('express');
const app = express();
const signupRoute = require('./signup'); // Adjust path if signup.js is in a subfolder

app.use(express.json()); // Middleware to parse JSON

app.use('/signup', signupRoute); // Mount the signup route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
