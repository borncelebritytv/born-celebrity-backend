require('dotenv').config();
const express = require('express');
const app = express();
const supabase = require('./src/supabaseClient');

app.get('/', (req, res) => {
res.send('Born Celebrity TV backend is live with Express and Supabase');
});

app.get('/users', async (req, res) => {
const { data, error } = await supabase
.from('users')
.select('*');

if (error) return res.status(500).json({ error: error.message });
res.json(data);
});

app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});https://kkvwxtqrthsnlloimssb.supabase.co