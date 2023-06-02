
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const notify = (text: string) => toast(text);
  const createNewToDo = (text: string) => {
    const newToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    };
    setTodos([...todos, newToDo]);
  };

  const updateToDo = (ToDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === ToDoItem.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteToDo = (ToDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== ToDoItem.id);
    setTodos(newTodos);
  };

  return (
    <>
		<ToastContainer/>
		<Form 
		createNewToDo={createNewToDo}
		notify={notify}
		 />
		<ToDoList
			todos={todos}
			updateToDo={updateToDo}
			deleteToDo={deleteToDo}
			notify={notify}
		/>
    </>
  );
};
