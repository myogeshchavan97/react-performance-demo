import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = todo.trim();
    if (value) {
      addTodo({
        id: Date.now(),
        title: value
      });
      setTodo('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='todo' className='mt-2'>
        <Form.Label>Add a todo</Form.Label>
        <Form.Control
          name='todo'
          value={todo}
          type='text'
          onChange={(event) => setTodo(event.target.value)}
        />
      </Form.Group>
      <Form.Group className='mt-2'>
        <Button type='submit'>Submit</Button>
      </Form.Group>
    </Form>
  );
};

export default React.memo(TodoForm);
