// defining types and adding the "d" extention for being globaly available

interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type TodoApi = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
