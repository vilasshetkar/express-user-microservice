const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Task = require('../models/taskModel');

// Create new task
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user.userId;
        const task = new Task({
            title,
            description,
            status: 'NEW',
            userId
        });

        await task.save();

        res.status(201).json({ message: 'task created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Edit task
const editTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const { title, description } = req.body;

        const updateTask = await Task.findByIdAndUpdate(
            taskId,
            { title, description },
            { new: true }
        );

        if (!updateTask) {
            return res.status(404).json({ error: 'Task Not Found' });
        }

        res.json({ message: 'Task updated successfully', task: updateTask });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete user account
const deleteTask = async (req, res) => {
    try {
        const taskID = req.params.taskId; // Extracted from JWT token in middleware

        const deletedTask = await Task.findByIdAndDelete(taskID);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get single task
const getTask = async (req, res) => {
    try {
        const taskId = req.params.taskId; // Extracted from JWT token in middleware

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ task });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Get single task
const getAllTask = async (req, res) => {
    try {
        const query = req.query; // Extracted from JWT token in middleware

        const task = await Task.find(query);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ task });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createTask, editTask, deleteTask, getTask, getAllTask };

