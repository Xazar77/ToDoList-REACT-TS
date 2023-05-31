import {useState} from 'react'
import classes from './Form.module.scss';



export const Form = (props: {createNewToDo: Function, notify: Function}) => {
  const {form, input, button} = classes

  const[text, setText] = useState<string>('')


  const formSubmit = () => {
      if(text){
        props.createNewToDo(text)
        setText('')
      }
      
  }

 


  return (
    <div className={form}>
      <form action="#" onSubmit={() =>{
        formSubmit()
        props.notify('Задача добавлена')
        }}>
        <label>
          <input 
            value={text} 
            type="text" 
            className={input} 
            onChange={(e) => setText(e.target.value)}
          />
          <button className={button}></button>
        </label>
      </form>
    </div>
  );
};
