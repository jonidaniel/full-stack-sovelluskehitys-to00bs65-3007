const fs = require("fs");
const rlSync = require("readline-sync");

// Make the directory
fs.mkdir("../testDir", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Directory created successfully");
    // Pause here so that the user can verify from directory structure that testDir is successfully created
    rlSync.question("Continue by pressing enter");
    // Remove the directory
    fs.rmdir("../testDir", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Directory removed successfully");
      }
    });
  }
});
