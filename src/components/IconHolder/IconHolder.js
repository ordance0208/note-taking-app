import Tooltip from '../Tooltip/Tooltip';
import './IconHolder.css';

const IconHolder = ({ icon, tooltip, onClick, reactIcon }) => {
  return (
    <div className='icon-holder' onClick={onClick}>
      <Tooltip text={tooltip}/>
      {reactIcon}
    </div>
  )
};

export default IconHolder;