# Workshop 5

Exercise submit for Workshop 5

## App description

- **Express Server**

  - Fetch, add, update and delete people from/to a database

  - REST API architecture

  - Uses Mongoose object modeling for interacting with MongoDB

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

    - Request: localhost:3000/api/getall

    - Response: {}

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

© 2025 Joni Mäkinen @jonidaniel
