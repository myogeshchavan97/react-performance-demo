import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const style = { color: 'red', background: 'yellow' };

function App() {
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const user = {
    name: 'Mike',
    age: 30
  };

  const count = 0;

  const addTodo = useCallback((value) => {
    setTodos((prev) => [...prev, value]);
  }, []);

  // useEffect(() => {
  //   console.log('user changed');
  // }, [user]);

  useEffect(() => {
    console.log('style changed');
  }, [style]);

  // console.log('count', count, refresh);
  return (
    <div className='container'>
      <div style={style}>This is a div</div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
      <Button variant='secondary' onClick={() => setRefresh(!refresh)}>
        Refresh
      </Button>
    </div>
  );
}

export default App;
