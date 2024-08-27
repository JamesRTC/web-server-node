const path = require("path");
const express = require("express");

const app = express();

// define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates");

//setup handlebars engine and views locations
app.set("views", viewPath);
app.set("view engine", "hbs");

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
    title: "this is the help page",
    name: "James Rotich",
  });
});
app.get("/weather", (req, res) => {
  res.send({ location: "karatina", temperature: 21 });
});

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
