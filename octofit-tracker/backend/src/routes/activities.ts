import { Router } from 'express';
import { Activity } from '../models/Activity';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_req, res, next) => {
  try {
    const data = await Activity.find().sort({ activityDate: -1 }).lean();

    res.json({
      resource: 'activities',
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default activitiesRouter;
