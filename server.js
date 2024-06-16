// following will help to import the modules in express which build web servers in javascript, 
//db is database connection with connection.js and paths like routes
const express = require('express');
const db = require('./config/Connection.js');
const routes = require('./routes');

//port number 3001 is the assigned port where the server listens too
// express gives the app which will be used to set up the web server
const PORT = process.env.PORT || 3001;
const app = express();

//support to parse JSON data into requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app will check and use routes from routes file 
app.use(routes);

//is making connection via the port with the server and console log will appear is connection has been made
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`The running port for API server ${PORT}!`);
  });
});

//note