import React from 'react';
import { AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';
const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <AnimatePresence>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </AnimatePresence>
  );
};

export default TodoList;
