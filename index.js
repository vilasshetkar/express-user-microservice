const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3300; // or any desired port

process.env.SECRET_KEY = 'secret-key-ABC123';

// Connect to MongoDB using Mongoose new change
mongoose.connect('mongodb+srv://vhshetkar:tkScZ7GTDHgQ8Kr2@cluster0.umtsvuw.mongodb.net/Org', {
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
