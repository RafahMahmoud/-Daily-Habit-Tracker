const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: { type: String, enum: ['health', 'productivity', 'mindfulness'], default: 'health' },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Habit', habitSchema, "Rafah");
