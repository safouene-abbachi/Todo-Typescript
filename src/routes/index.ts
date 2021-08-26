// Setting all the routes
import express, { Router } from "express";

import { getTodo, addTodo, updateTodo, deleteTodo } from "../controllers/todos";

const router: Router = Router();
// using express middleware to read body
router.use(express.json());
//get all todos
router.get("/todos", getTodo);
//add todo
router.post("/addTodo", addTodo);
//updateTodo
router.put("/updateTodo/:id", updateTodo);
//delete todo
router.delete("/deleteTodo/:id", deleteTodo);

export default router;
