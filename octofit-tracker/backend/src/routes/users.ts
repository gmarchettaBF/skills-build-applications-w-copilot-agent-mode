import { Router } from 'express';
import { User } from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (_req, res, next) => {
  try {
    const data = await User.find().sort({ displayName: 1 }).lean();

    res.json({
      resource: 'users',
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
