import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

import taskRoutes from "./routes/tasks.js";
import roomRoutes from "./routes/rooms.js";
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.use(authRoutes);

app.use("/tasks", taskRoutes);
app.use("/rooms", roomRoutes);

// 404
app.use((req, res, next) => {
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(PORT, () => {
  console.log("Server listening on ${PORT}");
});