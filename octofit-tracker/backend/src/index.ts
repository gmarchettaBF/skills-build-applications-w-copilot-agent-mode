import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import db from './config/database';

const app = express();
const port = Number(process.env.PORT) || 8000;

void db;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'octofit-backend',
    port,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db',
  });
});

app.listen(port, () => {
  console.log(`OctoFit backend listening on http://localhost:${port}`);
});
