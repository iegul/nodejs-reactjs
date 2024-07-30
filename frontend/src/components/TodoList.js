import React from "react";
import axios from "axios";

const TodoList = ({ todos, fetchTodos }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <ul className="mt-6 space-y-4">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{todo.name}</h3>
            <p className="text-gray-600">{todo.description}</p>
          </div>
          <button
            onClick={() => handleDelete(todo._id)}
            className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
