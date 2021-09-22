import React, { useState, useEffect } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

import { getTodos, addTodo, updateTodo, deleteTodo } from "./API";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const fetchTodos = async() => {
    try {
      const {
        data: { todos },
      }: ITodo[] | any = await getTodos();
      setTodos(todos);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleUpdateTodo = async(todo: ITodo) => {
    try {
      const {
        data: { todos },
      }: ITodo[] | any = await  updateTodo(todo);
     
      setTodos(todos);
    } catch (error: any) {
      throw new Error(error);
    }

    updateTodo(todo);
  };

  const handleDeleteTodo =async  (_id: string) => {
    try {
      const {
        data: { todos },
      }: ITodo | any = await deleteTodo(_id);
      setTodos(todos);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  const handleSaveTodo = async(e: React.FormEvent, formData: ITodo) => {
    e.preventDefault();
    const {
      data: { todos },
    }: ITodo | any = await addTodo(formData);

    setTodos(todos);
  };
  return (
    <div className="App">
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default App;
