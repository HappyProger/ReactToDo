import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddTodo from "./AddTodo";

const data = [
  { id: "1", title: "1st todo", isCompleted: false },
  { id: "2", title: "2nd todo", isCompleted: false },
  { id: "3", title: "3rd todo", isCompleted: false },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted; // toggle completion status
    setTodos(copy);
  };

  const removeTodo = (id) => setTodos([...todos].filter((t) => t.id !== id));

  return (
    <div className="bg-gray-800 h-screen py-10 text-white w-3/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">ToDo list</h1>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id} // Используем id вместо _id
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <AddTodo setTodos={setTodos}/>
    </div>
  );
};

export default Home;
