const fs = require("fs").promises;
const path = require("path");

const aPath = path.join(__dirname, "a.txt");
const bPath = path.join(__dirname, "b.txt");

async function main() {
  const a = await fs.readFile(aPath, "utf-8");
  const b = await fs.readFile(bPath, "utf-8");
  console.log(a + b);
}

main();
