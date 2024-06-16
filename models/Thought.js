const { Schema, model } = require('mongoose');
const resultSchema = require('./Reaction');

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
  reactions: [reactionSchema],
}, {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

resultSchema.virtual('resultCount').get(function () {
  return this.results.length;
});

const Thought = model('Thought', resultSchema);

module.exports = Thought;
