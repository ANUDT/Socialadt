// all seed data 

const users = [
    {
      username: 'pipi_langkous',
      email: 'pipi_langkous@example.com',
      thoughts: [hello],
      friends: [Dora],
    },
    {
      username: 'tom_jerry',
      email: 'tom_jerry@example.com',
      thoughts: [hi],
      friends: [John],
    },

   {
    username: 'mini_mouse',
    email: 'mini_mouse@example.com',
    thoughts: [good],
    friends: [Jim],
  },
  {
    username: 'daffy_duck',
    email: 'daffy_duck@example.com',
    thoughts: [happy],
    friends: [Duck],
  },

  {
    username: 'shrek_green',
    email: 'shrek_green@example.com',
    thoughts: [Donkey],
    friends: [Fiona],
  },
  {
    username: 'hilly_billy',
    email: 'hilly_billy@example.com',
    thoughts: [Mountain],
    friends: [jean],
  },

 {
  username: 'top_cat',
  email: 'top_cat@example.com',
  thoughts: [Spin],
  friends: [Kitty],
},
{
  username: 'king_kong',
  email: 'king_kong@example.com',
  thoughts: [Tower],
  friends: [Godzilla],
},
];

const thoughts = [
  {
    thoughtText: 'This is posted by Pipi',
    username: 'pipi_langkous',
   reactions: [longhair ],
  },
  {
    thoughtText: 'Tom has send you a message',
    username: 'tom_jerry',
   reactions: [cat],
  },
  {
      thoughtText: 'This is posted by Mini',
      username: 'mini_mouses',
     reactions: [mouse],
    },
    {
      thoughtText: 'Daffy has send you a message',
      username: 'daffy_duck',
      results: [Duck],
    },
    {
      thoughtText: 'This is posted by Shrek',
      username: 'shrek_green',
      results: [Fiona],
    },
    {
      thoughtText: 'Hilly Billy has send you a message',
      username: 'hilly_billy',
      results: [Jean],
    },
    {
        thoughtText: 'This is posted by Top Cat',
        username: 'top_cat',
        results: [Fast],
      },
      {
        thoughtText: 'King Kong has send you a message',
        username: 'king_kong',
        results: [Godzilla],
      },
];

  
  module.exports = { users, thoughts };