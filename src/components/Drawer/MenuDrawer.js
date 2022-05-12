import { Link } from 'react-router-dom';
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
                Dashboard
              </Link>
            </li>
            <li>
              <Link onClick={handleDrawerClose} to="/about">
                About
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
