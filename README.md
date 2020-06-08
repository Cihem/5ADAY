
# 5ADAY

5 a day and more... Reach your Goal

## Introduction

The app is designed for users who wants to eat better and have a better lifestyle. The users are able to track their nutritions and calories with the choosen ingredients. They can also look for recipes, and check fruits and vegetables per seasons.
Feature will include a dashboard where the users can save the nutrition and calories data, and a shopping list that allow users to add groceries to shopping list manually

### Available Scripts

In the project directory, you can run:

### Dependencies

Run yarn on root folder to install dependencies related to Express.

cd client and run yarn install dependencies related to React.

### Run Your Development Servers

Run yarn start in project directory to start the Express server on port 5000.

cd client and run yarn start to start the client server.

Open [http://localhost:3000](http://localhost:3000)to view the client in the browser.

Open [http://localhost:3000](http://localhost:5000) to view the data in the browser.

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called tips: `create database tips`
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=5ADAY
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create a table in your database.

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.
