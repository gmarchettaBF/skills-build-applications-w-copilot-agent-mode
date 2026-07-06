import { Router } from 'express';
import { Team } from '../models/Team';

const teamsRouter = Router();

teamsRouter.get('/', async (_req, res, next) => {
  try {
    const data = await Team.find().sort({ name: 1 }).lean();

    res.json({
      resource: 'teams',
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default teamsRouter;
