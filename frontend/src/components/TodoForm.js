import React, { useState } from "react";
import axios from "axios";

const TodoForm = ({ fetchTodos }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/todo", { name, description });
      setName("");
      setDescription("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <button
        type="submit"
        className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
