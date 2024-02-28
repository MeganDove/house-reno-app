import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/tasks', async (req, res) => {
  const fileContent = await fs.readFile('./data/tasks.json');

  const tasks = JSON.parse(fileContent);

  res.status(200).json({ tasks });
});

app.put('/tasks', async (req, res) => {
  const tasks = req.body.tasks;

  await fs.writeFile('./data/tasks.json', JSON.stringify(tasks));

  res.status(200).json({ message: 'Tasks updated!' });
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});