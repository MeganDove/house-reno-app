import fs from "node:fs/promises";

export async function readData(fileName) {
  const data = await fs.readFile(fileName+".json", "utf8");
  return JSON.parse(data);
}

export async function writeData(fileName, data) {
  console.log(data);
  await fs.writeFile(fileName+".json", JSON.stringify(data));
}