import express from 'express';

import { getAll, replaceAll } from "../data/rooms.js";
import { checkAuthMiddleware as checkAuth } from "../util/auth.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log(req.token);
  try {
    const rooms = await getAll();
    console.log(rooms);
    res.json({ rooms: rooms });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//router.use(checkAuth);

router.put('/', async (req, res, next) => {
  console.log(req.token);
  const data = req.body.rooms;

  let errors = {};

  try {
    await replaceAll(data);
    res.status(201).json({ message: 'Rooms saved.', rooms: data });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;