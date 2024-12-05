// routes/taskRoutes.js

const express = require('express');
const router = express.Router();

// Import the taskController
const taskController = require('../controllers/taskController');  

// Define the routes
router.get('/tasks', taskController.getAllTasks);  // GET all tasks
router.post('/tasks', taskController.addTask);  // POST a new task
router.put('/tasks/:id', taskController.updateTask);  // PUT to update a task by ID
router.delete('/tasks/:id', taskController.deleteTask);  // DELETE a task by ID

// Export the router
module.exports = router;
