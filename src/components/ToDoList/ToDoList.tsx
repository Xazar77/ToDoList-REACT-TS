import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import "./ToDoList.scss";

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function, notify: Function}) => {


	const checkedList = () => {
		return props.todos
					.filter((item) => !item.isDone)
					.map((item, idx) => {
						return <ToDoListItem 
							toDoItem={item} 
							key={idx} 
							updateToDo={props.updateToDo} 
							deleteToDo={props.deleteToDo} 
							notify={props.notify}
						/>;
					})
	}
	const unCheckedList = () => {
		return props.todos
					.filter((item) => item.isDone)
					.map((item, idx) => {
						return <ToDoListItem 
							toDoItem={item} 
							key={idx} 
							updateToDo={props.updateToDo} 
							deleteToDo={props.deleteToDo} 
							notify={props.notify}
						/>;
					})
	}

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {checkedList()}
      </ul>
      <ul className="todo-list completed">
        {unCheckedList()}
      </ul>
    </div>
  );
};
