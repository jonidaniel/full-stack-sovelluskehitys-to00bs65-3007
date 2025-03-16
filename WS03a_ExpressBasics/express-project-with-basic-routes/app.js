// EXPRESS SERVER

const express = require("express");
const app = express();
require("dotenv").config();
const {
  root,
  about,
  add,
  contact,
  json,
  list,
  services,
  submit,
  error,
} = require("./routes/routes.js");
const bodyParser = require("body-parser");
const path = require("path");

// Exercise 3
// POST request body parser (application/json)
app.use(bodyParser.json());

// Primarily use the port defined in environment variables at ./.env
// Use 3000 if not defined
const PORT = process.env.PORT || 3000;

// Exercise 4
// Log method and URL to console for all requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Exercise 4
// Check requests for custom header
app.get("/test", (req, res) => {
  if (req.headers["x-content-type"]) {
    res.send("Header OK");
  } else {
    res.status(404).send("Header error");
  }
});

// Exercise 2
// Use static file serving... (comment this line out if you want to use routing instead)
app.use(express.static(path.join(__dirname, "public")));

// Exercise 1
// ...or routes middleware, for showing content in a browser
app.use("/", root);
app.use("/about", about);
// Exercise 5
app.use("/add", add);
app.use("/contact", contact);
app.use("/json", json);
app.use("/list", list);
app.use("/services", services);
app.use("/submit", submit);
// Error route is always the last one!
app.use("*", error);

// Make Express server listen on chosen port
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
