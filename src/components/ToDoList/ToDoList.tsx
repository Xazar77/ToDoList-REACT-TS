import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDo } from "../../models/todo-item";
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from "./ToDoList.styled";

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
    <ToDoListContainer>
      <ToDoListFailed>
        {checkedList()}
      </ToDoListFailed>
      <ToDoListCompleted>
        {unCheckedList()}
      </ToDoListCompleted>
    </ToDoListContainer>
  );
};
