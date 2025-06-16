const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();

app.use(express.json());

app.use('/api', apiRoutes);

app.get('/api/enroll', (req, res) => {
  res.send(' Use POST method to enroll a user. This endpoint does not support GET requests.');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
