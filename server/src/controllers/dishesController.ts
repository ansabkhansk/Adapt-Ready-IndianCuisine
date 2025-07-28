import { Request, Response } from 'express';
import { getAllDishes } from '../services/dishesService';
import { parse } from 'qs';

export const getDishes = async (req: Request, res: Response) => {
  try {
    const fullUrl = new URL(req.originalUrl, `http://${req.headers.host}`);
    const filters = parse(fullUrl.search.slice(1));

    const dishes = await getAllDishes(filters);
    res.json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
