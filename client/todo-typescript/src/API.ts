import axios, { AxiosResponse } from "axios";

const url: string = "http://localhost:4000";

export const getTodos = async (): Promise<AxiosResponse<TodoApi>> => {
  try {
    const todos: AxiosResponse<TodoApi> = await axios.get(url + "/todos");
    return todos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<TodoApi>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: formData.status,
    };
    const saveTodo: AxiosResponse<TodoApi> = await axios.post(
      url + "/addTodo",
      todo
    );
    return saveTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<TodoApi>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: !todo.status,
    };
    const updatedTodo: AxiosResponse<TodoApi> = await axios.put(
      url + `/updateTodo/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<TodoApi>> => {
  try {
    const deletedTodo = await axios.delete(url + `/deleteTodo/${_id}`);
    return deletedTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};
