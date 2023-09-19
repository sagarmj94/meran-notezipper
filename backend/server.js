const express = require("express");
const notes = require("../data/note");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.PORT | 5000;
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/notes", (req, res) => {
  res.send(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const noteSingle = notes.find((n) => n._id === req.params.id);
  console.log("paramaeter__", noteSingle);
  res.send(noteSingle);
});

app.listen(PORT, console.log("server is running"));
