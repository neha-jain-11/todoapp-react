const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todos");
const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

// app.use(todoRouter);
app.use("/api/todos", todoRouter);

app.listen("3000", () => {
  console.log("hi, i am listening on port 3000");
});

module.exports = app;
