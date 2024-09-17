import React from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <motion.div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-4"
      />
      <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </motion.div>
  );
};

export default TodoItem;
