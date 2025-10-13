const express = require('express');
const app = express();
const usersRoute = require('./users');

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Born Celebrity backend is live');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
