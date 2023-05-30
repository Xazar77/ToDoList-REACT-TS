import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import classes from './ToDoList.module.scss'


export const ToDoList = () => {
  const {container, list, failed, compiled} = classes
  return (
    <div className={container}>
      <ul className={`${list} ${failed}`}>
        <ToDoListItem/>
      </ul>
      <ul className={`${list} ${compiled}`}>
        <ToDoListItem/>
      </ul>
    </div>
  );
};
