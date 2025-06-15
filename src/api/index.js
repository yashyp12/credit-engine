 
const express = require('express');
const apiRoutes = require('../src/routes/apiRoutes'); // adjust path if needed
const app = express();

app.use(express.json());
app.get('/', (req, res) => res.send('Credit Engine API is live!'));
app.use('/api', apiRoutes);

module.exports = app;
