// controllers/taskController.js

const Task = require('../models/taskModel');  

// GET /api/tasks - Fetch all tasks
exports.getAllTasks = (req, res) => {
  const tasks = Task.getAllTasks();  
  res.status(200).json(tasks);
};

// POST /api/tasks - Add a new task
exports.addTask = (req, res) => {
  const { task, status } = req.body;

  if (!task || !status) {
    return res.status(400).json({ message: "Task and status are required." });
  }

  const newTask = Task.addTask({ task, status });  // Add task using the model
  res.status(201).json(newTask);
};

// PUT /api/tasks/:id - Update a specific task by ID
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;

  if (!task || !status) {
    return res.status(400).json({ message: "Task and status are required." });
  }

  const updatedTask = Task.updateTask(Number(id), { task, status });  // Update task using the model

  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found." });
  }

  res.status(200).json(updatedTask);
};

// DELETE /api/tasks/:id - Remove a specific task by ID
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  const deletedTask = Task.deleteTask(Number(id));  // Delete task using the model

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found." });
  }

  res.status(200).json({ message: "Task deleted successfully", task: deletedTask });
};
