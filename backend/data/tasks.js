import { v4 as uuidv4 } from 'uuid';

import { NotFoundError } from "../util/errors.js";
import { readData, writeData } from "./util.js";

export async function getAll() {
  const data = await readData("tasks");
  if (!data) {
    throw new NotFoundError("Could not find any tasks.");
  }
  return data;
}

export async function replaceAll(data) {
  await writeData("tasks", data);
}