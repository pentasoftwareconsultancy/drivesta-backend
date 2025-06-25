import express from 'express';
// import authRoutes from './routes/authRoutes.js';


const app = express();

// Middleware
app.use(express.json());

// Base route
// app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

export default app;
