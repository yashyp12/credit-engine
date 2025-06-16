const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();

app.use(express.json());

app.use('/api', apiRoutes);

app.get('/api/enroll', (req, res) => {
  res.send(' Use POST method to enroll a user. This endpoint does not support GET requests.');
});


app.get('/', (req, res) => {
  res.send('🚀 Credit Engine API is running. Use /api/enroll (POST) or /api/credits/:userId (GET)');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
