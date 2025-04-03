const express = require("express");
const app = express();
const ejs = require("ejs");

// Set an absolute path to the views directory
app.set("views", `${__dirname}/views`);
// Set the EJS Templating Engine to be used
app.set("view engine", "ejs");

// Exercise 1
const message = "Here's three people:";
const people = [
  {
    name: "Joni Mäkinen",
    born: 1990,
  },
  {
    name: "Jani Korhonen",
    born: 1984,
  },
  {
    name: "Tino Mäkinen",
    born: 1997,
  },
];

// Exercise 4
const bool = true;

// Exercise 5
const carBrands = [
  {
    name: "Toyota",
    quality: 90,
  },
  {
    name: "Mazda",
    quality: 64,
  },
  {
    name: "Nissan",
    quality: 97,
  },
];

app.get("/", (req, res) => {
  // Render ./views/index.ejs in order for it to be sent to the client
  // The information passed to the template should always be an object
  // So, we'll wrap the two variables inside an object
  res.render("index", { message, people, bool, carBrands });
});

app.listen(3000);
