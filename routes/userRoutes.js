const express = require('express');
const router = express.Router();
const { register, login, editProfile, deleteAccount, getProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Edit user profile
router.put('/edit-profile', authMiddleware, editProfile);

// Delete user account
router.delete('/delete-account', authMiddleware, deleteAccount);

// Get logged-in user's profile
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
