// import {useState} from 'react'
import classes from './Form.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store';
import { updateAction } from '../../features/textForm';



export const Form = (props: {createNewToDo: Function, notify: Function}) => {
  const {form, input, button} = classes

  // const[text, setText] = useState<string>('')

  const textForm = useSelector((state: RootState) => state.textForm.text)
    
  const dispatch = useDispatch()

  const formSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault()

      if(textForm){
        props.createNewToDo(textForm)
        dispatch(updateAction('')) 
        props.notify('Задача добавлена')
      }
      
  }


  return (
    <div className={form}>
      <form action="#" onSubmit={formSubmit}>

        <label>
          <input 
            value={textForm} 
            type="text" 
            className={input} 
            onChange={(e) => {
              dispatch(updateAction(e.target.value))}}
          />
          <button className={button}></button>
        </label>
      </form>
    </div>
  );
};
