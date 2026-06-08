import express from 'express';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit';
const PORT = Number(process.env.PORT || 8000);

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB:', MONGO_URI);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }

  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => res.json({ status: 'ok' }));

  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

start();
