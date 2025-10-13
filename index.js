const express = require('express');
const app = express();
const usersRouter = require('./users'); // Make sure users.js is in the same folder

app.use(express.json());

// Mount the /users route
app.use('/users', usersRouter);

// Default root route (optional)
app.get('/', (req, res) => {
  res.send('Born Celebrity backend is live!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

