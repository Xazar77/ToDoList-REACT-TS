import classes from './Form.module.scss';



export const Form = () => {
  const {form, input, button} = classes
  return (
    <div className={form}>
      <form action="#">
        <label>
          <input type="text" className={input} />
          <button className={button}></button>
        </label>
      </form>
    </div>
  );
};
