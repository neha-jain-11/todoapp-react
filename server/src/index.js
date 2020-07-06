const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/todos");
const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.use(bodyParser.json());

// app.use(todoRouter);
app.use("/api/todos", todoRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen("3000", () => {
    console.log("hi, i am listening on port 3000");
  });
}

module.exports = app;
