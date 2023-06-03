
import { ToDo } from '../../../models/todo-item';
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled';

import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'


export const ToDoListItem = (props: {toDoItem: ToDo, updateToDo: Function, deleteToDo: Function, notify: Function}) => {
 
  const {text, isDone} = props.toDoItem
  return (
    <ToDoItem>
      <ToDoItemText>{text}</ToDoItemText>
      <ToDoItemControls>
        <ToDoItemControl 
          icon={trashIcon}
          onClick={() =>{ 
            props.deleteToDo(props.toDoItem)
            props.notify('Задача удалена')
        }}
        ></ToDoItemControl>
        <ToDoItemControl 
          icon={isDone? checkIcon: uncheckIcon}
          onClick={() => {
            props.updateToDo(props.toDoItem)
            props.notify('Задача изменена')
        }}
        ></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  );
};
