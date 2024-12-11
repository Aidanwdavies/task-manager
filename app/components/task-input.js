import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="flex-grow border border-gray-300 px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
