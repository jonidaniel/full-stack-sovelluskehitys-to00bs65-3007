const axios = require("axios");

async function main() {
  try {
    const response = await axios.get("http://swapi.dev/api/people/1/");
    console.log(response.data.name);
  } catch (error) {
    console.error(error);
  }
}

main();
