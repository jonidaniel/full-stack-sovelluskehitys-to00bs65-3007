const fs = require("fs");

fs.watch("../watch.txt", (eventType) => {
  if (eventType === "change") console.log("File modified successfully");
});
