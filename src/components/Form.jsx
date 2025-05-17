import React, { useState, useEffect } from "react";

const Form = ({ createTodo, editTodo, taskToEdit }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setValue(taskToEdit.task);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTodo(value, taskToEdit.id);
    } else {
      createTodo(value);
    }
    setValue("");
  };

  return (
    <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
        placeholder="What task do you have today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2">
        {taskToEdit ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};

export default Form;
