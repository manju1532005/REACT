import React, { useState, useEffect } from 'react';

function Todolist() 
{
  const [tasks, setTasks] = useState([]);
 
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const AddTask = () => {
    if (newTask.trim()) {
      return; 
    }
    const newTaskObject = {
      id: Date.now(), 
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const ToggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const DeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={AddTask}>Add Task</button>

    
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => ToggleCompletion(task.id)}
            />
            {task.text}
            <button onClick={() => DeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;