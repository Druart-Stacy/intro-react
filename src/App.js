import React, { useState, useRef } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef(null);

  const addTask = () => {
    const taskInput = taskInputRef.current;
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      setTasks(prevTasks => [
        ...prevTasks,
        { id: Date.now(), text: taskText, completed: false }
      ]);
      taskInputRef.current.value = '';
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <header>
      <h1>My Todo App</h1>
      </header>
      <label class="taskInput">Add Task</label>
      <input type="text" id="taskInput" ref={taskInputRef} />
      <button onClick={addTask}>Add</button>

      <h2>Todos</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
