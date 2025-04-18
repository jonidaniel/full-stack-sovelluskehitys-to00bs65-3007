const express = require("express");
const Person = require("../models/person");

const router = express.Router();

// GET all people
router.get("/getall", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    if (error.message) res.status(500).send(error.message);
    else res.status(500).json({ error: "Failed to fetch people" });
  }
});

// GET a person by ID
router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    // Person might be null
    // This happens when fetching a previously deleted document with an ID
    // MongoDB doesn't give an error in those cases, this workaround does
    if (!person)
      res.status(410).json({ error: "The person doesn't exist anymore" });
    else res.status(200).json(person);
  } catch (error) {
    if (error.message) res.status(404).send(error.message);
    else res.status(404).json({ error: "Failed to fetch the person" });
  }
});

// POST a person
router.post("/add", async (req, res) => {
  try {
    const added = await Person.create(req.body);
    res.status(201).json(added);
  } catch (error) {
    // Inform the user if a required key-value pair is missing
    if (error.message) res.status(400).send(error.message);
    else res.status(400).json({ error: "Failed to add the person" });
  }
});

// PATCH a person by ID
router.patch("/update/:id", async (req, res) => {
  try {
    await Person.findByIdAndUpdate(req.params.id, req.body);
    const updated = await Person.findById(req.params.id);
    res.status(201).json(updated);
  } catch (error) {
    if (error.message) res.status(400).send(error.message);
    else res.status(400).json({ error: "Failed to update the person" });
  }
});

// DELETE a person by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    if (error.message) res.status(404).send(error.message);
    else res.status(404).json({ error: "Failed to delete the person" });
  }
});

module.exports = router;
