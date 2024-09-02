import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const HabitForm = ({ currentHabit, setCurrentHabit, setShowForm }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('health');

  useEffect(() => {
    if (currentHabit) {
      setName(currentHabit.name);
      setDescription(currentHabit.description);
      setCategory(currentHabit.category);
    }
  }, [currentHabit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const habit = { name, description, category };
    try {
      if (currentHabit) {
        await axios.put(`/${currentHabit._id}`, habit);
      } else {
        await axios.post('/', habit);
      }
      setShowForm(false);
      setCurrentHabit(null);
    } catch (error) {
      console.error('Error saving habit:', error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Habit Name"
          className="p-2 border border-gray-300 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="p-2 border border-gray-300 rounded w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="health">Health</option>
          <option value="productivity">Productivity</option>
          <option value="mindfulness">Mindfulness</option>
        </select>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {currentHabit ? 'Update Habit' : 'Add Habit'}
        </button>
        <button
          type="button"
          onClick={() => {
            setShowForm(false);
            setCurrentHabit(null);
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default HabitForm;
