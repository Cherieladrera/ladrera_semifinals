// server.js

const express = require('express');
const bodyParser = require('body-parser');

// Import routes correctly
const taskRoutes = require('./routes/taskRoutes');  // Correct path to taskRoutes.js

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the task routes
app.use('/api', taskRoutes);  // This sets the base URL for task-related routes

// Set the port for the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
