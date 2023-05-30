
import classes from './Header.module.scss';

export const Header = () => {
  const {header, container, link, active } = classes
  return (
   
    <header className={header}>
      <div className={container}>
        <a href="/" className={`${link} ${active}`}>ToDo</a>
      </div>
    </header>
  );
};
