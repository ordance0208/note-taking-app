import Toggle from 'react-toggle';
import "react-toggle/style.css";

const ToggleButton = ({ darkTheme, action }) => {
  const handleToggleChange = (e) => {
    action(e.target.checked);
  };

  return (
    <div className='toggle-wrapper' style={{display: 'flex'}}>
      <Toggle defaultChecked={darkTheme} onChange={handleToggleChange} aria-label='Dark mode toggle' icons={false}/>
    </div>
  )
}

export default ToggleButton