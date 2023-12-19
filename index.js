const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // or any desired port

process.env.SECRET_KEY = 'secret-key-ABC123';

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://vhshetkar:tkScZ7GTDHgQ8Kr2@cluster0.umtsvuw.mongodb.net/Org', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
const userRouter = require('./routes/userRoutes');
app.use('/api/users', userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
