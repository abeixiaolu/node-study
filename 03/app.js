const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let messages = ["今天很开心", "学会了 Express"];
app.get("/messages", (req, res) => {
  res.render("messages", { messages });
});

app.get("/messages/:id", (req, res) => {
  const { id } = req.params;
  const message = messages[id];
  res.render("message", { message, id });
});

app.get("/api/messages", (req, res) => {
  return res.json({ data: messages });
});

app.post("/api/messages", (req, res) => {
  const { message } = req.body;
  messages.push(message);
  return res.json({ data: messages });
});

app.patch("/api/messages/:id", (req, res) => {
  console.log("req: ", req);
  const { message, id } = req.body;
  if (id === "add") {
    messages.push(message);
  } else {
    messages[id] = message;
  }
  return res.json({ data: messages });
});

app.delete("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  messages.splice(id, 1);
  return res.json({ data: messages });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
