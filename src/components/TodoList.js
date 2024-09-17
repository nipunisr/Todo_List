import React from 'react';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';

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
