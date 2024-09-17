import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodos';


const TodoPage = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">To-Do List</h1>
      <div className="w-full max-w-lg bg-white shadow-md p-6 rounded-lg">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </div>
    </div>
  );
};

export default TodoPage;
