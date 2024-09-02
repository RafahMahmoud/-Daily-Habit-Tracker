const Habit = require('../models/habit');

const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: 'Habit not found' });
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createHabit = async (req, res) => {
  const { name, description, category } = req.body;
  const newHabit = new Habit({ name, description, category });

  try {
    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateHabit = async (req, res) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHabit) return res.status(404).json({ message: 'Habit not found' });
    res.json(updatedHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteHabit = async (req, res) => {
  try {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.id);
    if (!deletedHabit) return res.status(404).json({ message: 'Habit not found' });
    res.json({ message: 'Habit deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getHabits, getHabit, createHabit, updateHabit, deleteHabit };
