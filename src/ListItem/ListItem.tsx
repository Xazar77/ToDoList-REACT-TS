

import { ToDo } from "../models/todo-item"
import classes from './ListItem.module.scss';


export const ListItem = ({todo}: {todo:ToDo}) => {
    const {id, isDone} = todo
    const {list, done, notDone} = classes
    return (
       
        <a 
            href={`/list/${id}`} 
            target='_blank'
            rel="noreferrer"
            className={`${list} ${isDone? done: notDone}`}
        >{todo.text}</a>
        
    )
}