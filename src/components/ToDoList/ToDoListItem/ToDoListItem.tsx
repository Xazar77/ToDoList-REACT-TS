import classes from './ToDoListItem.module.scss';


export const ToDoListItem = () => {
  const {wrapper, buttons, btn, trash, check, uncheck} = classes
  return (
    <li className={wrapper}>
      <span>Первая задача</span>
      <div className={buttons}>
        <button className={`${btn} ${trash}`}></button>
        <button className={`${btn} ${check}`}></button>
      </div>
    </li>
  );
};
