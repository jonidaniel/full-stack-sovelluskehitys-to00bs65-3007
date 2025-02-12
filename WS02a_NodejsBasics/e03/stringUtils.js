const myToUpperCase = (str) => {
  return str.toUpperCase();
};

const revert = (str) => {
  // Split characters, then reverse them, and finally join them together
  return str.split("").reverse().join("");
};

module.exports = { myToUpperCase, revert };
