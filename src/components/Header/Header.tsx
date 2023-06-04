
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import { HeaderContainer, HeaderItem, ToggleTheme, ToggleThemeBtn } from './Header.styled';
import { useDispatch } from 'react-redux';
import { toggleThemeAction } from '../../features/themeList';




export const Header = () => {
  const {link, active } = classes
  const dispatch = useDispatch()

  const getActiveClass = ({isActive}: {isActive: boolean}): string => {
    return isActive? `${link} ${active}`: link
  }
  return (
   
    <HeaderItem>
      <HeaderContainer>
        <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
        <NavLink to="/list" className={getActiveClass}>List</NavLink>
      </HeaderContainer>

      <ToggleTheme>
        <ToggleThemeBtn onClick={() => dispatch(toggleThemeAction())}>Choose Theme</ToggleThemeBtn>
      </ToggleTheme>
    </HeaderItem>
  );
};
