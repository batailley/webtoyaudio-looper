import React from 'react';

const Todos = ({ todos, onClick }) => (
  <div>
    <button onClick={onClick}>Add a todo!</button>
    <ul>
      {Object.keys(todos).map((k) => (
        <li key={k}>{todos[k]}</li>
      ))}
    </ul>
  </div>
)

export default Todos