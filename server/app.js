const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../build')));

// Define any additional API routes or middleware here

// For all other requests, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.js'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});