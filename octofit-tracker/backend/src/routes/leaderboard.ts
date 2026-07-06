import { Router } from 'express';
import { LeaderboardEntry } from '../models/LeaderboardEntry';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_req, res, next) => {
  try {
    const data = await LeaderboardEntry.find().sort({ rank: 1 }).lean();

    res.json({
      resource: 'leaderboard',
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default leaderboardRouter;
