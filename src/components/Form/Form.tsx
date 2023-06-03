
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../store';
import { updateAction } from '../../features/textForm';
import { FormWrapper, FormBlock, FormField, FormControl, FormLabel } from './Form.styled';

import plusIcon from '../../assets/images/plus.png'




export const Form = (props: {createNewToDo: Function, notify: Function}) => {


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
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>

        <FormLabel>
          <FormField 
            value={textForm} 
            type="text" 
            onChange={(e) => {
              dispatch(updateAction(e.target.value))}}
          />
          <FormControl icon={plusIcon}/>
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
