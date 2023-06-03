
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../store";
import { createAction } from "@reduxjs/toolkit";
import { deleteAction, updateAction } from "../features/todoList";
import { useDispatch, useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";



export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  console.log(todoList)
  const dispatch = useDispatch()

  const notify = (text: string) => toast(text);

  const createNewToDo = (text: string) => {
    dispatch(createAction(text))
  };

  const updateToDo = (ToDoItem: ToDo) => {
    dispatch(updateAction(ToDoItem))
  };

  const deleteToDo = (ToDoItem: ToDo) => {
    dispatch(deleteAction(ToDoItem))
  };

  return (
    <>
      <ToastContainer />
      <Form createNewToDo={createNewToDo} notify={notify} />
      <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} notify={notify} />
    </>
  );
};
