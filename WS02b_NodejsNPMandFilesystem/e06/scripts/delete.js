const fs = require("fs");

fs.unlink("../temp.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File successfully deleted");
  }
});
