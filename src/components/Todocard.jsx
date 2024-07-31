import React from 'react';

export default function Todocard({ name, onDelete }) {
  return (
    <div className="taskcontainer">
      <p className="taskname">{name}</p>
      <div className="buttons">
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
