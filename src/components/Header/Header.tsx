
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import { HeaderContainer, HeaderItem } from './Header.styled';


export const Header = () => {
  const {link, active } = classes

  const getActiveClass = ({isActive}: {isActive: boolean}): string => {
    return isActive? `${link} ${active}`: link
  }
  return (
   
    <HeaderItem>
      <HeaderContainer>
        <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
        <NavLink to="/list" className={getActiveClass}>List</NavLink>
      </HeaderContainer>
    </HeaderItem>
  );
};
