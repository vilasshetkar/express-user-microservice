const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3300; // or any desired port

console.log('This is server file');
process.env.SECRET_KEY = 'secret-key-ABC123';

// Connect to MongoDB using Mongoose new change
mongoose.connect('mongodb+srv://ApnaERP-Admin:YJtGrIp4NZ6MRKdF@cluster1.2lk9mic.mongodb.net/USER-SERVICE', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.json());

// Routes
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
