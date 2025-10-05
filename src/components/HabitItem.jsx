import { useState } from 'react';

function HabitItem({ habit, isCompletedToday, streak, onToggleComplete, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(habit.name);
  const [editDescription, setEditDescription] = useState(habit.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(habit.id, { name: editName.trim(), description: editDescription.trim() });
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditName(habit.name);
    setEditDescription(habit.description);
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Description"
          />
          <div className="flex space-x-2">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            <button type="button" onClick={handleEditCancel} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isCompletedToday}
                onChange={() => onToggleComplete(habit.id)}
                className="mr-3 w-5 h-5"
              />
              <div>
                <h3 className="text-lg font-semibold">{habit.name}</h3>
                {habit.description && <p className="text-gray-600">{habit.description}</p>}
                <p className="text-sm text-gray-500">Current streak: {streak} days</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(habit.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HabitItem;