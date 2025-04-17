const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Add a method to the schema before compiling it with mongoose.model()
personSchema.methods.knowHow = function knowHow() {
  const greeting = this.name
    ? "My name's " + this.name + " and I know how to code!"
    : "I don't have a name but I know how to code!";
  console.log(greeting);
};

module.exports = mongoose.model("Person", personSchema);
