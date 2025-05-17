import React from "react";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex items-center justify-between bg-gray-600 p-4 rounded mb-2">
      <p className="text-white">{task.task}</p>
      <div className="flex gap-2">
        <button
          onClick={() => editTodo(task)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(task.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
