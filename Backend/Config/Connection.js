//importing mongodb functions and string connection with mongodb database from own pc
const { connect, connection } = require('mongoose');

//database connection 
const connectionString = 'mongodb://localhost:27017/week-18-social-api'

connect(connectionString);

//connection has been generated
module.exports = connection;
