const axios = require('axios');

axios.post('https://born-celebrity-backend.onrender.com/signup', {
  email: 'testuser@example.com',
  show_id: 'show_001',
  device_type: 'iPhone',
  platform: 'iOS'
})
.then(response => {
  console.log('✅ Success:', response.data);
})
.catch(error => {
  if (error.response) {
    console.log('❌ Error:', error.response.data);
  } else {
    console.log('❌ Network Error:', error.message);
  }
});
