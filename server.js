const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Health Tracker App API');
});

app.post('/health-data', (req, res) => {
  const healthData = req.body;
  console.log('Received health data:', healthData);
  res.json({ message: 'Health data received successfully!', data: healthData });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
