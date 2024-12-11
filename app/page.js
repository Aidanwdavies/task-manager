'use client';

import { useState } from 'react';
import TaskInput from './components/task-input';
import TaskList from './components/task-list';

const Page = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-700">
          Task Manager
        </h1>
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onToggleCompletion={toggleTaskCompletion}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default Page;
