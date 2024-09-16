import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';
import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks ([...tasks, newTask]);
  };

  return (
    <div className='app'>
      <h1 className='app-title'>
        <AiFillCheckCircle className='app-icon ' /> Lista de Tarefas
      </h1>
      <TaskForm addTask={addTask} />
      <div className='task-list-container'>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );  
}

export default App;
