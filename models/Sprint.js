const mongoose = require('mongoose');

const sprintSchema = new mongoose.Schema({
  title: String,
  goals: [String],
  retro: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Sprint', sprintSchema);
