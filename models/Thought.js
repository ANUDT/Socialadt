//database mongoose is being imported here schema and model is build to give shape to the data
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
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
}, 
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}
);

thoughtSchema.virtual("resultCount").get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
