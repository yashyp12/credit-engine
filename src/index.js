const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();

app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Credit Engine API is live. Use POST /api/enroll or GET /api/credits/:userId');
});

app.get('/api/enroll', (req, res) => {
  res.send('📝 This endpoint only supports POST requests to enroll users.');
});

app.get('/api/credits/:userId', (req, res) => {
  res.send('🧾 This endpoint requires a valid userId in the URL to fetch credits.');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
