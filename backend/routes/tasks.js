import express from 'express';

import { getAll, replaceAll } from "../data/tasks.js";
import { checkAuthMiddleware as checkAuth } from "../util/auth.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log(req.token);
  try {
    const tasks = await getAll();
    res.json({ tasks: tasks });
  } catch (error) {
    next(error);
  }
});

//router.use(checkAuth);

router.put('/', async (req, res, next) => {
  console.log(req.token);
  const data = req.body.tasks;

  let errors = {};

  try {
    await replaceAll(data);
    res.status(201).json({ message: 'Tasks saved.', tasks: data });
  } catch (error) {
    next(error);
  }
});

export default router;