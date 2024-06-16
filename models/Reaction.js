//reaction.js is to build schema for reaction in database Mongoose in MongoDB
//Types, schema and mongoose are teh parts we use to build the the models
const { Schema, Types } = require('mongoose');

const resultSchema = new Schema({
  resultId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  //text would not be longer the 200  and is the main text of reaction
  resultBody: {
    type: String,
    required: true,
    maxlength:200,
  },

  // String type is in this case text and required username is name 
  username: {
    type: String,
    required: true,
  },

  //
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(),
  },
}, {
  toJSON: {
    getters: true,
  },
  id: false,
});

