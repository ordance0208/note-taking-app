import Tooltip from '../Tooltip/Tooltip';
import './IconHolder.css';

const IconHolder = ({ icon, tooltip, onClick }) => {
  return (
    <div className='icon-holder' onClick={onClick}>
      <Tooltip text={tooltip}/>
      {icon}
    </div>
  )
};

export default IconHolder;