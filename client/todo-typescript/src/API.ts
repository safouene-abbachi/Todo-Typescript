import axios, { AxiosResponse } from "axios";

const url: string = "http://localhost:4000";

export const getTodos = async (): Promise<AxiosResponse<TodoApi>> => {
  try {
    const todos: AxiosResponse<TodoApi> = await axios.get(url + "/todos");
    return todos;
  } catch (error) {
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
  } catch (error) {
    throw new Error(error);
  }
};
