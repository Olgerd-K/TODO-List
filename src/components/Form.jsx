import React, { useState } from "react";

const Form = ({ createTodo, editTodo, taskToEdit }) => {
  const [value, setValue] = useState("");

  // Update value when taskToEdit changes
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Set the initial value when taskToEdit changes
  React.useMemo(() => {
    if (taskToEdit) {
      setValue(taskToEdit.task);
    } else {
      setValue("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Don't submit empty tasks

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
        onChange={handleChange}
        value={value}
      />
      <button 
        type="submit"
        className="bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2 hover:bg-gray-600"
      >
        {taskToEdit ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};

export default Form;
