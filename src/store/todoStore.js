import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      editingTask: null,

      // Add a new todo
      addTodo: (task) => set((state) => ({
        todos: [...state.todos, { id: uuidv4(), task }]
      })),

      // Delete a todo
      deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
        editingTask: state.editingTask?.id === id ? null : state.editingTask
      })),

      // Set the task being edited
      setEditingTask: (task) => set({ editingTask: task }),

      // Update a todo
      updateTodo: (newTask, id) => set((state) => {
        // Validate that we have both a new task and an id
        if (!newTask || !id) return state;
        
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, task: newTask } : todo
          ),
          editingTask: null
        };
      })
    }),
    {
      name: 'todo-storage', // unique name for localStorage
      partialize: (state) => ({ todos: state.todos }), // only persist todos
    }
  )
);

export default useTodoStore; 