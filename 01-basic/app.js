const { addNote, readNote } = require("./note");

const [, , ...args] = process.argv;

if (args[0] === "add") {
  // write note
  addNote(args[1], args[2]);
} else if (args[0] === "read") {
  readNote();
}
