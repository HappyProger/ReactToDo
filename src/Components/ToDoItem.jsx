import React from "react";
import Check from "./Check";
import { FaRegTrashCan } from "react-icons/fa6";

const ToDoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className="flex items-center justify-between mb-5 mx-5 p-5 rounded-lg bg-gray-700"
      onClick={() => changeTodo(todo.id)}
    >
      <button>
        <Check isCompleted={todo.isCompleted} />
      </button>

      {todo.title}
      
      <button
        onClick={(e) => {
          e.stopPropagation(); // Предотвращаем всплытие события
          removeTodo(todo.id);
        }}
      >
        <FaRegTrashCan size={24} className="hover:text-gray-400" />
      </button>
    </div>
  );
};

export default ToDoItem;
