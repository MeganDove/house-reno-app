import { v4 as uuidv4 } from 'uuid';

import { NotFoundError } from "../util/errors.js";
import { readData, writeData } from "./util.js";

export async function getAll() {
  const data = await readData("rooms");
  console.log(data);
  if (!data) {
    throw new NotFoundError("Could not find any rooms.");
  }
  return data;
}

export async function replaceAll(data) {
    console.log("Replacing tasks");
    console.log(data);
    await writeData("rooms", data);
}