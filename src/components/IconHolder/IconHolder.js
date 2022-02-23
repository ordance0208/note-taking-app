import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '../Tooltip/Tooltip';
import './IconHolder.css';

const IconHolder = ({ icon, tooltip, onClick }) => {
  return (
    <div className='icon-holder'>
      <Tooltip text={tooltip}/>
      <FontAwesomeIcon className='icon' icon={icon} onClick={onClick}/>
    </div>
  )
};

export default IconHolder;