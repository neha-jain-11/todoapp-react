const express = require("express");
const todos = require("../data/todos.json");
const todoRouter = express.Router();

//middleware router level
todoRouter.use("/get", (req, res, next) => {
  console.log("cool cool");
  next();
});

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
