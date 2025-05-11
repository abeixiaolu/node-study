const path = require("path");

const fsPromise = require("fs").promises;

const notePath = path.join(__dirname, "note.txt");

async function readNote() {
  const note = await fsPromise.readFile(notePath, "utf-8");

  console.log(note);
}

async function addNote(content, flag = "a") {
  await fsPromise.appendFile(notePath, content, { flag });
}

module.exports = {
  readNote,
  addNote,
};
