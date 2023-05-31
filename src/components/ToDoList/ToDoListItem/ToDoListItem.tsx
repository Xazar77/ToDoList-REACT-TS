
import { ToDo } from '../../../models/todo-item';

import './ToDoListItem.scss'

export const ToDoListItem = (props: {toDoItem: ToDo, updateToDo: Function, deleteToDo: Function, notify: Function}) => {
 
  const {text, isDone} = props.toDoItem
  return (
    <li className='todo-list-item__wrapper'>
      <span>{text}</span>
      <div className='todo-list-item__buttons'>
        <button 
          className='btn-trash'
          onClick={() =>{ 
            props.deleteToDo(props.toDoItem)
            props.notify('Задача удалена')
        }}
        ></button>
        <button 
          className={isDone? 'btn-check': 'btn-uncheck'} 
          onClick={() => {
            props.updateToDo(props.toDoItem)
            props.notify('Задача изменена')
        }}
        ></button>
      </div>
    </li>
  );
};
