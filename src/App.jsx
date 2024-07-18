import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <p className="title">To Do List</p>
        <div className="taskbar">
          <input type="text" className="task" placeholder="Enter the Task" />
        </div>
        <button className="add">Add Task</button>
        <div className="taskcontainer">
          <p className="taskname">Task-1</p>
          <div className="buttons">
            <button className="delete">Delete</button>
          </div>
        </div>
        <div className="taskcontainer">
          <p className="taskname">Task-2</p>       
          <div className="buttons">
            <button className="delete">Delete</button>
          </div>
        </div>
        <div className="taskcontainer">
          <p className="taskname">Task-3</p>
          <div className="buttons">
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App