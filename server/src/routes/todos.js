const express = require("express");
const todos = require("../data/todos.json");
const todoRouter = express.Router();

todoRouter.get("/get", (req, res) => {
  res.json(todos);
  res.status(200);
});

todoRouter.post("/post", (req, res) => {
  console.log("hi saving todos", req.body);
  res.send("Saved");
  res.status(200);
});

module.exports = todoRouter;
