

// src/App.js
// import React, { useState } from 'react';
// import HabitList from './components/HabitList';
// import HabitForm from './components/HabitForm';

// const App = () => {
//   const [editingHabitId, setEditingHabitId] = useState(null);

//   const handleAddNewHabit = () => {
//     setEditingHabitId(null); // Set to null to show the form for adding a new habit
//   };

//   const handleSave = () => {
//     setEditingHabitId(null); // Close the form after saving
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Daily Habit Tracker</h1>
//       <div className="flex mb-4">
//         <button
//           onClick={handleAddNewHabit}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add New Habit
//         </button>
//       </div>
//       {/* Conditionally render HabitForm if editingHabitId is not null, else render HabitList */}
//       {editingHabitId === null ? (
//         <>
//           <HabitList />
//           <HabitForm habitId={null} onSave={handleSave} />
//         </>
//       ) : (
//         <HabitForm habitId={editingHabitId} onSave={handleSave} />
//       )}
//     </div>
//   );
// };

// export default App;




// src/App.js
// import React, { useState } from 'react';
// import HabitList from './components/HabitList';
// import HabitForm from './components/HabitForm';

// const App = () => {
//   const [editingHabitId, setEditingHabitId] = useState(null);

//   const handleEdit = (id) => {
//     setEditingHabitId(id); // Set the id of the habit to be edited
//   };

//   const handleSave = () => {
//     setEditingHabitId(null); // Close the form after saving
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Daily Habit Tracker</h1>
//       <div className="flex mb-4">
//         <button
//           onClick={() => handleEdit(null)}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add New Habit
//         </button>
//       </div>
//       {/* Conditionally render HabitForm if editingHabitId is not null, else render HabitList */}
//       {editingHabitId === null ? (
//         <HabitList onEdit={handleEdit} />
//       ) : (
//         <HabitForm habitId={editingHabitId} onSave={handleSave} />
//       )}
//     </div>
//   );
// };

// export default App;




// src/App.js
// import React, { useState } from 'react';
// import HabitList from './components/HabitList';
// import HabitForm from './components/HabitForm';

// const App = () => {
//   const [editingHabitId, setEditingHabitId] = useState(null);

//   // Handle adding or editing a habit
//   const handleEdit = (id) => {
//     setEditingHabitId(id); // Set id to be edited or null to add a new habit
//   };

//   // Handle saving the habit and closing the form
//   const handleSave = () => {
//     setEditingHabitId(null); // Close the form after saving
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Daily Habit Tracker</h1>
//       <div className="flex mb-4">
//         <button
//           onClick={() => handleEdit(null)} // Set id to null to add a new habit
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Add New Habit
//         </button>
//       </div>
//       {/* Conditionally render HabitForm if editingHabitId is not null, else render HabitList */}
//       {editingHabitId === null ? (
//         <HabitList onEdit={handleEdit} />
//       ) : (
//         <HabitForm habitId={editingHabitId} onSave={handleSave} />
//       )}
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';

const App = () => {
  const [currentHabit, setCurrentHabit] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daily Habit Tracker</h1>
      {showForm ? (
        <HabitForm
          currentHabit={currentHabit}
          setCurrentHabit={setCurrentHabit}
          setShowForm={setShowForm}
        />
      ) : (
        <div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Add New Habit
          </button>
          <HabitList setCurrentHabit={setCurrentHabit} setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
};

export default App;
