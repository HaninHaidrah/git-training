const express = require("express");
const { parseOperands } = require("./utils");

const app = express();

app.get("/power", (req, res) => {
  const { x, y } = parseOperands(req.query);
  const power = x ** y;
  res.send(200, power);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, (req, res) => {
  console.log("Server connected on port 8000");
});
