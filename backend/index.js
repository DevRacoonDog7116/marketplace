const express = require('express');
const app = express();
const PORT = 300;

// Example route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
