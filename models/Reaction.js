//reaction.js is to build schema for reaction in database Mongoose in MongoDB
//Types, schema and mongoose are teh parts we use to build the the models
const { Schema, Types } = require('mongoose');

const resultSchema = new Schema(
  {
reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  //text would not be longer the 200  and is the main text of reaction
reactionBody: {
    type: String,
    required: true,
    maxLength:200,
  },

  // String type is in this case text and required username is name 
  username: {
    type: String,
    required: true,
  },

  //this part records the output would be date and time when it made, and if not provided use current date and time
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(),
  },
},

// separate id is not needed because of resultId, toJSON will change this object to JSON
{
  toJSON: {
    getters: true,
  },
  id: false,
}
);
module.exports = reactionSchema;

