// Exercise 1
// ROUTES

const express = require("express");
const router = express.Router();
const fs = require("fs");

const routes = {
  root: router.get("/", (req, res) => {
    res.send("Home Page through router");
  }),
  about: router.get("/about", (req, res) => {
    res.send("About Page through router");
  }),
  add: router.post("/add", (req, res) => {
    let newData = req.body;
    fs.readFile("./files/data.json", "utf8", (err, data) => {
      if (err) {
        res.send(err);
      } else {
        let arr = JSON.parse(data);
        arr.push(newData);
        arr = JSON.stringify(arr);
        fs.writeFile("./files/data.json", arr, (err, data) => {
          if (err) {
            res.send(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }),
  contact: router.get("/contact", (req, res) => {
    res.send("Contact Page through router");
  }),
  json: router.get("/json", (req, res) => {
    fs.readFile("./files/data.json", "utf8", (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(JSON.parse(data));
      }
    });
  }),
  list: router.get("/list", (req, res) => {
    fs.readFile("./files/data.txt", "utf8", (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  }),
  services: router.get("/services", (req, res) => {
    res.send("Services Page through router");
  }),
  submit: router.post("/submit", (req, res) => {
    console.log(req.body);
  }),
  error: router.get("*", (req, res) => {
    res.status(404).send("Can't find the requested page");
  }),
};

// Export routes for ../app.js
module.exports = routes;
