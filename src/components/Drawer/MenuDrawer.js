import ToggleButton from '../ToggleButton/ToggleButton';
import './MenuDrawer.css';

const MenuDrawer = ({menuDrawerOpened}) => {
  return (
    <div className={`menu-drawer ${menuDrawerOpened ? 'active' : ''}`}>
      <nav className='navigation'>
        <ul>
          <li><a href='#'>Dashboard</a></li>
          <li><a href='#'>About</a></li>
          <li><span>Dark Mode</span> <ToggleButton/></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuDrawer;