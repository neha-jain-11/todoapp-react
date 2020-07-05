const express = require("express");
const todos = require("../data/todos.json");
const todoRouter = express.Router();

todoRouter.get("/get", (req, res) => {
  res.json(todos);
  res.status(200);
});

module.exports = todoRouter;
