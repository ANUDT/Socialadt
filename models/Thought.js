//database mongoose is being imported here schema and model is build to give shape to the data
const { Schema, model } = require('mongoose');
const resultSchema = require('./Result');

const resultSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxLength: 200,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleString(),
  },
  username: {
    type: String,
    required: true,
  },
 result: [s],
}, {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

s.virtual('resultCount').get(function () {
  return this.result.length;
});

const Thought = model('Thought', resultsSchema);

module.exports = Thought;
