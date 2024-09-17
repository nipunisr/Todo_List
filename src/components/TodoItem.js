import React from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <motion.div
      className={`flex justify-between items-center p-4 border-b border-gray-200 ${todo.completed ? 'bg-gray-100' : 'bg-white'}`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-4"
        />
        <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-200"
      >
        Delete
      </button>
    </motion.div>
  );
};

export default TodoItem;
