// all seed data 

const users = [
    {
      username: 'pipi_langkous',
      email: 'pipi_langkous@example.com',
      thoughts: [],
      friends: [],
    },
    {
      username: 'tom_jerry',
      email: 'tom_jerry@example.com',
      thoughts: [],
      friends: [],
    },
  ];
  
  const thoughts = [
    {
      thoughtText: 'This is posted by Pipi',
      username: 'pipi_langkous',
      results: [],
    },
    {
      thoughtText: 'Tom has send you a message',
      username: 'tom_jerry',
      results: [],
    },
  ];
  
  module.exports = { users, thoughts };