

import { ToDo } from "../models/todo-item"
import { ListItemLink } from "./ListItem.styled";


export const ListItem = ({todo}: {todo:ToDo}) => {
    const {id, isDone} = todo
    const colorItem = isDone? 'green': 'red' 
    return (
       
        <ListItemLink 
            href={`/list/${id}`} 
            target='_blank'
            rel="noreferrer"
            style={{color: colorItem}}
        >{todo.text}</ListItemLink>
        
    )
}

