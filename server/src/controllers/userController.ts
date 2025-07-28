import { Request, Response } from 'express';
import pool from '../database/client';

export const getUsers = async (_req: Request, res: Response) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
};

export const createUser = async (req: Request, res: Response) => {
  const name = req.body["name"]; // LHS notation
  const email = req.body["email"];

  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  res.status(201).json(result.rows[0]);
};
