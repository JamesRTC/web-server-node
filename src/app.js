const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

// define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//setup handlebars engine and views locations
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);
//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "James Rotich",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "James Rotich",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "James Rotich",
  });
});

app.get("/weather", (req, res) => {
  res.send({ location: "karatina", temperature: 21 });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 error",
    error: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 error",
    error: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
