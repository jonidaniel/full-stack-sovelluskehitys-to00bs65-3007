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

    &nbsp;&nbsp;Request:

    &nbsp;&nbsp;&nbsp;&nbsp;_localhost:3000/api/getall_

    &nbsp;&nbsp;Response:

    &nbsp;&nbsp;&nbsp;&nbsp;_[_
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_{_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"\_id": "6800dc74f24cd1fb3de91720",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"name": "Joni",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"age": 35,_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"city": "Vantaa",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"email": "joni@live.fi"_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"\_\_v": 0_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_},_
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_{_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"\_id": "6800de9709ee6391603af1cf",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"name": "Jani",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"age": 41,_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"city": "Lahti",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"email": "jani@love.fi"_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"\_\_v": 0_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_}_
    &nbsp;&nbsp;&nbsp;&nbsp;_]_

- **GET (by ID)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/:id

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The person as JSON

  - Example:

    &nbsp;&nbsp;Request:

    &nbsp;&nbsp;&nbsp;&nbsp;_localhost:3000/api/6800aec5563f57db4d03df30_

    &nbsp;&nbsp;Response:

    &nbsp;&nbsp;&nbsp;&nbsp;_{_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"name": "Joni",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"age": 35,_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"city": "Vantaa",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"email": "joni@live.com"_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;_}_

- **POST (new)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/add

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The added person as JSON

  - Example:

    &nbsp;&nbsp;Request:

    &nbsp;&nbsp;&nbsp;&nbsp;_localhost:3000/api/add_

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with body:

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_{_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"name": "Joni",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"age": 35,_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"city": "Vantaa",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"email": "joni@live.fi"_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_}_

    &nbsp;&nbsp;Response:

    &nbsp;&nbsp;&nbsp;&nbsp;_{_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"name": "Joni",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"age": 35,_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"city": "Vantaa",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"email": "joni@live.com",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"\_id": "6800dc74f24cd1fb3de91720",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"\_\_v": 0_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;_}_

- **PATCH (by ID)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/update/:id

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The updated person as JSON

  - Example:

    &nbsp;&nbsp;Request:

    &nbsp;&nbsp;&nbsp;&nbsp;_localhost:3000/api/update/6800aec5563f57db4d03df30_

    &nbsp;&nbsp;Response:

    &nbsp;&nbsp;&nbsp;&nbsp;_{_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"name": "Joni",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"age": 35,_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"city": "Vantaa",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"email": "joni@live.com"_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;_}_

- **DELETE (by ID)**

  - URL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;localhost:3000/api/delete/:id

  - Returns:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The deleted person as JSON

  - Example:

    &nbsp;&nbsp;Request:

    &nbsp;&nbsp;&nbsp;&nbsp;_localhost:3000/api/delete/6800aec5563f57db4d03df30_

    &nbsp;&nbsp;Response:

    &nbsp;&nbsp;&nbsp;&nbsp;_{_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"name": "Joni",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"age": 35,_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"city": "Vantaa",_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_"email": "joni@live.com"_<br>
    &nbsp;&nbsp;&nbsp;&nbsp;_}_

## Author

© 2025 Joni Mäkinen [@jonidaniel](https://github.com/jonidaniel)
