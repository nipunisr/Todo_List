import { useState } from 'react';
import { getTodos, addTodoService, deleteTodoService, toggleTodoService } from '../services/todoServices';

const useTodos = () => {
  const [todos, setTodos] = useState(getTodos());

  const addTodo = (todo) => {
    const newTodo = addTodoService(todo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    deleteTodoService(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    const updatedTodos = toggleTodoService(id);
    setTodos(updatedTodos);
  };

  return { todos, addTodo, deleteTodo, toggleTodo };
};

export default useTodos;
