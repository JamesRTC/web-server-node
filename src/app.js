const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express!");
});

app.get("/help", (req, res) => {
  res.send("help page");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is the about page</h1>");
});

app.get("/weather", (req, res) => {
  res.send({ location: "karatina", temperature: 21 });
});
app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
