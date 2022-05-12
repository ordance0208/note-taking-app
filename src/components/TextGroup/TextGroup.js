import './TextGroup.css';

const TextGroup = ({ heading, children }) => {
  return (
    <div className='text-group'>
      <h3 className='text-group-heading'>{heading}</h3>
      {children}
    </div>
  );
};

export default TextGroup;