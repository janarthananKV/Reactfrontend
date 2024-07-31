import React, { useState } from 'react';
import './App.css';
import Todocard from './components/Todocard';

function App() {
  const [newtask, setnewtask] = useState('');
  const [tasks, settasks] = useState([]);

  const newchange = (e) => {
    setnewtask(e.target.value);
  };

  const newaddtask = () => {
    if (newtask.trim() !== '') {
      settasks([...tasks, newtask]);
      setnewtask(''); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((ele, i) => i !== index);
    settasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <p className="title">To Do List</p>
        <div className="taskbar">
          <input 
            type="text" 
            className="task" 
            value={newtask} 
            onChange={newchange} 
            placeholder="Enter the Task" 
          />
        </div>
        <button className="add" onClick={newaddtask}>Add Task</button>
        <div>
          <ul>
            {tasks.map((task, index) => (
              <Todocard 
                key={index} 
                name={task} 
                onDelete={() => deleteTask(index)} 
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
