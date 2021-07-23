import express from 'express';

import PersonRouter from './person.route';
import { apiLimiter } from '../middleware/api-limiter.middleware';

const router = express.Router();

const rootAPI = '/api';

router.use(`${rootAPI}/persons`, apiLimiter, PersonRouter);

export default router;
