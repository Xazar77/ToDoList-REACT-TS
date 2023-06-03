
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';


export const Header = () => {
  const {header, container, link, active } = classes

  const getActiveClass = ({isActive}: {isActive: boolean}): string => {
    return isActive? `${link} ${active}`: link
  }
  return (
   
    <header className={header}>
      <div className={container}>
        <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
        <NavLink to="/list" className={getActiveClass}>List</NavLink>
      </div>
    </header>
  );
};
