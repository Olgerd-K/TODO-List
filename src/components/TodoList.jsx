import React from "react";
import Form from "./Form";
import Todo from "./Todo";
import useTodoStore from "../store/todoStore";

const TodoList = () => {
  const { todos, editingTask, addTodo, deleteTodo, setEditingTask, updateTodo } = useTodoStore();

  return (
    <div className="container bg-gray-700 mx-auto mt-20 p-8 rounded-md">
      <Form 
        createTodo={addTodo} 
        editTodo={updateTodo}
        taskToEdit={editingTask} 
      />
      {todos.map((todo) => (
        <Todo
          task={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          editTodo={setEditingTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
