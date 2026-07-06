import { Router } from 'express';
import { Workout } from '../models/Workout';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_req, res, next) => {
  try {
    const data = await Workout.find().sort({ title: 1 }).lean();

    res.json({
      resource: 'workouts',
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default workoutsRouter;
