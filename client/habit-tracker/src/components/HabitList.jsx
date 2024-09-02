import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import HabitItem from './HabitItem';

const HabitList = ({ setCurrentHabit, setShowForm }) => {
  const [habits, setHabits] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get('/');
        setHabits(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    fetchHabits();
  }, []);

  const handleEdit = (habit) => {
    setCurrentHabit(habit);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${id}`);
      setHabits(habits.filter(habit => habit._id !== id));
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="ml-2 p-2 border border-gray-300 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="health">Health</option>
          <option value="productivity">Productivity</option>
          <option value="mindfulness">Mindfulness</option>
        </select>
      </div>
      <div>
        {habits
          .filter(habit => habit.name.toLowerCase().includes(search.toLowerCase()))
          .filter(habit => category === 'all' || habit.category === category)
          .map(habit => (
            <HabitItem
              key={habit._id}
              habit={habit}
              onEdit={() => handleEdit(habit)}
              onDelete={() => handleDelete(habit._id)}
            />
          ))}
      </div>
    </div>
  );
};

export default HabitList;
