import Toggle from 'react-toggle';
import "react-toggle/style.css";

const ToggleButton = () => {
  return (
    <div className='toggle-wrapper' style={{display: 'flex'}}>
      <Toggle aria-label='Dark mode toggle' icons={false}/>
    </div>
  )
}

export default ToggleButton