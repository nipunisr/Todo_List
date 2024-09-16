// Simulate local storage or database
let todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do List', completed: true },
  ];
  
  // Get all todos
  export const getTodos = () => {
    return todos;
  };
  
  // Add a new todo
  export const addTodoService = (todo) => {
    const newTodo = { ...todo, id: todos.length + 1 };
    todos.push(newTodo);
    return newTodo;
  };
  
  // Delete a todo
  export const deleteTodoService = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };
  
  // Toggle a todo's completion status
  export const toggleTodoService = (id) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    return todos;
  };
  