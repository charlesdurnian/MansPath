const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'Test route working!' });
  });  

// Import routes
const userRoutes = require('./modules/user/userRoutes');
const habitRoutes = require('./modules/habit/habitRoutes');
const progressRoutes = require('./modules/progress/progressRoutes');
  
// API Routes
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/progress', progressRoutes);

// Define port
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
