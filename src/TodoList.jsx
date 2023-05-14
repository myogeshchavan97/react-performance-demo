import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul className='mt-3'>
      {todos.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
