import { useContext } from 'react/';
import { NavLink } from 'react-router-dom';
import { RiQuestionFill } from 'react-icons/ri';
import { FaStickyNote } from 'react-icons/fa';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ThemeContext } from '../../contexts/ThemeProvider';
import './MenuDrawer.css';

const MenuDrawer = ({ menuDrawerOpened, setMenuDrawerOpened }) => {
  const handleDrawerClose = () => {
    setMenuDrawerOpened(false);
  };

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const calculateStyles = `menu-drawer ${menuDrawerOpened ? 'active' : ''}`;
  const calculateLinkStyles = ({ isActive }) => (isActive ? 'link-active' : '');

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
