const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const { createTask, editTask, deleteTask, getTask, getAllTask } = require('../controllers/taskController');

// Create
router.post('/create', authMiddleware, createTask);

// Edit
router.put('/edit/:taskId', authMiddleware, editTask);

// Delete
router.delete('/delete/:taskId', authMiddleware, deleteTask);

// Get single task
router.get('/task/:taskId', authMiddleware, getTask);

// Get single task
router.get('/tasks', authMiddleware, getAllTask);

module.exports = router;
