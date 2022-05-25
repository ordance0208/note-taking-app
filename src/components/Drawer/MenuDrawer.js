import { Link, NavLink } from 'react-router-dom';
import { RiQuestionFill } from 'react-icons/ri';
import { FaStickyNote } from 'react-icons/fa';
import ToggleButton from '../ToggleButton/ToggleButton';
import { useContext } from 'react/';
import { ThemeContext } from '../../contexts/ThemeProvider';
import './MenuDrawer.css';

const MenuDrawer = ({ menuDrawerOpened, setMenuDrawerOpened }) => {
  const handleDrawerClose = () => {
    setMenuDrawerOpened(false);
  };

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const calculateStyles = `menu-drawer ${menuDrawerOpened ? 'active' : ''} ${
    darkTheme ? 'dark-theme' : ''
  }`;

  const calculateLinkStyles = ({ isActive }) => {
    if (isActive && darkTheme) {
      return 'active-dark';
    } else if (isActive && !darkTheme) {
      return 'active-light';
    }
  };

  return (
    <>
      <div className={calculateStyles}>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                className={calculateLinkStyles}
                onClick={handleDrawerClose}
                to="/dashboard"
              >
                <FaStickyNote />
                &nbsp;Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={calculateLinkStyles}
                onClick={handleDrawerClose}
                to="/about"
              >
                <RiQuestionFill />
                &nbsp;About
              </NavLink>
            </li>
            <li>
              <span>Dark Mode</span>
              <ToggleButton darkTheme={darkTheme} action={setDarkTheme} />
            </li>
          </ul>
        </nav>
      </div>
      {menuDrawerOpened && (
        <div onClick={handleDrawerClose} className="navbar-overlay"></div>
      )}
    </>
  );
};

export default MenuDrawer;
