import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodos';

const TodoPage = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div className="todo-page">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
};

export default TodoPage;
