const fs = require("fs");

// Create ../output.txt with text content
fs.writeFile("../output.txt", "Hello, World!", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("../output.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // Log ../output.txt contents before appending more text to file
        console.log("File contents before appending:\n" + data);
        // Append more text to ../output.txt
        fs.appendFile("../output.txt", "\nHow are you?", (err) => {
          if (err) {
            console.log(err);
          } else {
            // Log ../output.txt contents after appending more text
            console.log("File contents after appending:");
            fs.readFile("../output.txt", "utf-8", (err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
              }
            });
          }
        });
      }
    });
  }
});
