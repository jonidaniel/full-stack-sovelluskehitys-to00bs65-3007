const express = require("express");
const Person = require("../models/person");

const router = express.Router();

// GET all people
router.get("/getall", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch people" });
  }
});

// GET a person by ID
router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the person" });
  }
});

// POST a person
router.post("/add", async (req, res) => {
  try {
    const added = await Person.create(req.body);
    res.status(200).json(added);
  } catch (error) {
    res.status(500).json({ error: "Failed to add the person" });
  }
});

// PATCH a person by ID
router.patch("/update/:id", async (req, res) => {
  try {
    await Person.findByIdAndUpdate(req.params.id, req.body);
    const updated = await Person.findById(req.params.id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the person" });
  }
});

// DELETE a person by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Person.findByIdAndDelete(req.params.id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the person" });
  }
});

module.exports = router;
