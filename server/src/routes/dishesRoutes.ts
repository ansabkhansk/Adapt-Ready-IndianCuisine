import express from 'express';
import { getDishes } from '../controllers/dishesController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', authenticate, getDishes);

export default router;
