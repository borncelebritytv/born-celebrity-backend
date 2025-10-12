const express = require('express');
const cors = require('cors');
const supabase = require('./supabase'); // ✅ matches supabase.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
try {
res.send('Backend is live and connected to Supabase!');
} catch (error) {
console.error('Route error:', error);
res.status(500).send('Something went wrong.');
}
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});