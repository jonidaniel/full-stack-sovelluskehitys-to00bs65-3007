# Workshop 5

Exercise submit for Workshop 5

## App description

- **[Express](https://expressjs.com) Server**

  - Fetch, add, update and delete people from/to a database

  - REST API architecture

  - Uses [Mongoose](https://mongoosejs.com) object modeling for interacting with [MongoDB](https://www.mongodb.com)

## How to get started

- **Start command**

  - node app (at root)

- **Install needed dependencies**

  - npm i (at root)

## Available routes

- **GET (all)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/getall

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All people as JSON

  - Example:

    - Request:

    > localhost:3000/api/getall

    - Response:

      {<br>
      &nbsp;&nbsp;"name": "Joni",<br>
      &nbsp;&nbsp;"age": 35,<br>
      &nbsp;&nbsp;"city": "Vantaa",<br>
      &nbsp;&nbsp;"email": "joni@live.com<br>
      }

- **GET (by ID)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/:id

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The person as JSON

  - Example:

- **POST (new)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/add

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The added person as JSON

  - Example:

- **PATCH (by ID)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/update/:id

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The updated person as JSON

  - Example:

- **DELETE (by ID)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/delete/:id

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The deleted person as JSON

  - Example:

## Author

© 2025 Joni Mäkinen [@jonidaniel](https://github.com/jonidaniel)
