const express = require('express');
const app = express();
const usersRoute = require('./users'); // assumes users.js is in the same folder

app.use('/users', usersRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
