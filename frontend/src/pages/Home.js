import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todo");
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">
          Todo App
        </h1>
        <TodoForm fetchTodos={fetchTodos} />
        <TodoList todos={todos} fetchTodos={fetchTodos} />
      </div>
    </div>
  );
};

export default Home;
