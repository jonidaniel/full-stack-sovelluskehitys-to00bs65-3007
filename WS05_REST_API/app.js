const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
const uri = process.env.URI;

// Import routes
const personRoutes = require("./routes/personRoutes");

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(uri);

// Use the routes
app.use("/api", personRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
