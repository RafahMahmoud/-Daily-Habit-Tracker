import React from 'react';

const HabitItem = ({ habit, onEdit, onDelete }) => {
  return (
    <div className="mb-2 p-4 border border-gray-300 rounded flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{habit.name}</h3>
        <p>{habit.description}</p>
        <p className="text-gray-600">Category: {habit.category}</p>
      </div>
      <div>
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
