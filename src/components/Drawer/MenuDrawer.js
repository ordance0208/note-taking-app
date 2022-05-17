import { Link } from 'react-router-dom';
import { RiQuestionFill } from 'react-icons/ri';
import { FaStickyNote } from 'react-icons/fa';
import ToggleButton from '../ToggleButton/ToggleButton';
import './MenuDrawer.css';

const MenuDrawer = ({ menuDrawerOpened, setMenuDrawerOpened }) => {
  const handleDrawerClose = () => {
    setMenuDrawerOpened(false);
  };

  return (
    <>
      <div className={`menu-drawer ${menuDrawerOpened ? 'active' : ''}`}>
        <nav className="navigation">
          <ul>
            <li>
              <Link onClick={handleDrawerClose} to="/dashboard">
              <FaStickyNote /> Dashboard
              </Link>
            </li>
            <li>
              <Link onClick={handleDrawerClose} to="/about">
                <RiQuestionFill/> About
              </Link>
            </li>
            <li>
              <span>Dark Mode</span> <ToggleButton />
            </li>
          </ul>
        </nav>
      </div>
      {menuDrawerOpened && <div onClick={handleDrawerClose} className="navbar-overlay"></div>}
    </>
  );
};

export default MenuDrawer;
