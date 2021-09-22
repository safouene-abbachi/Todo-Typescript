// Creating API controllers
import { Request, Response } from "express";
import { ITodo } from "../types/todo";
import Todo from "../models/todo";

//Fetching todos

const getTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

//Adding a todo

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

//Update a todo by it's id

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
      {
        _id: id,
      },
      body
    );

    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: "Todo updated",
      todo: updatedTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

//Delete todo by id

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { params: id } = req;

    const todoToDelete: ITodo | null = await Todo.findByIdAndDelete(id);
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "successfully deleted",
      todo: todoToDelete,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

export { getTodo, addTodo, updateTodo, deleteTodo };
