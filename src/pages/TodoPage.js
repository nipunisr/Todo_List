import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodos';

const TodoPage = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div className="flex flex-col items-center min-h-screen p-6 todo-page bg-gray-50">
      <h1 className="mb-6 text-4xl font-bold text-gray-700">To-Do List</h1>
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </div>
    </div>
  );
};

export default TodoPage;
