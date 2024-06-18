//create this and run npm run seed
// Importing necessary modules and configurations
const connection = require('../Backend/Config/Connection');
const Thought = require('../models/Thought');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('making connection wit MongoDB database');

  // here we are running thoughts created if it exists
  const thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // empty array generated to manage thoughts
  const thoughts = [];

  // Looping 30x - thoughts
  for (let i = 0; i < 30; i++) {
    // Random usernames and results will come up
    const result = getRandomThoughts(20);
    const username = getRandomName();

    thoughts.push({
      thoughtText: `Thought number ${i + 1}`,
      username,
      result,
    });
  }

  // Thoughts are being added with results
  const thoughtData = await Thought.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Successfully completed seeding!');
  process.exit(0);
});

  