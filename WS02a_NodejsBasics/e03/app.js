const { add, subtract } = require("./math.js");
const { myToUpperCase, revert } = require("./stringUtils.js");
const { getDate, formatDate } = require("./dateUtils.js");

const int01 = 1;
const int02 = 2;
const str01 = "a";
const str02 = "ab";
const american = "yyyy-MM-dd";
const european = "dd-MM-yyyy";

// Demonstrate math operations
console.log(add(int01, int02));
console.log(subtract(int01, int02));

// Demostrate string operations
console.log(myToUpperCase(str01));
console.log(revert(str02));

// Demonstrate date operations
console.log(getDate());
console.log(formatDate(european));
