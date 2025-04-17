# Workshop 5

Exercise submit for Workshop 5

## App description

Express Server

Fetch, add, update and delete people from/to a database

REST API architecture

Uses Mongoose object modeling for interacting with MongoDB

## How to get started

- Start command (at root):

  - _node app_

- Install needed dependencies (at root):

  - _npm i_

## Available routes

- **GET (all)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/getall

  - Returns&nbsp;&nbsp;All people as JSON

  - Example:

- **GET (by ID)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/:id

  - Returns:&nbsp;&nbsp;The person as JSON

- **POST (new)**

  - URL: localhost:3000/api/add

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The added person as JSON

- **PATCH (by ID)**

  - URL: localhost:3000/api/update/:id

  - Returns the updated person as JSON

- **DELETE (by ID)**

  - URL: localhost:3000/api/delete/:id

  - Returns the deleted person as JSON

## Author

© 2025 Joni Mäkinen

@jonidaniel
