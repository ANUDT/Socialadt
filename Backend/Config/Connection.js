//Example connection.js from mini project
const { connect, connection } = require('mongoose');

const connectionString = mongodb_URI=mongodb://localhost:27017/week-18-social-api'

connect(connectionString);

module.exports = connection;
