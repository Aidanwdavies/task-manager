const TaskList = ({ tasks, onToggleCompletion, onDeleteTask }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`flex justify-between items-center p-4 border rounded-lg shadow-sm ${
            task.completed ? 'bg-green-50' : 'bg-white'
          } hover:shadow-lg transition-shadow`}
        >
          <span
            onClick={() => onToggleCompletion(index)}
            className={`cursor-pointer ${
              task.completed
                ? 'line-through text-gray-400'
                : 'text-gray-800 font-medium'
            }`}
          >
            {task.text}
          </span>
          <button
            onClick={() => onDeleteTask(index)}
            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
