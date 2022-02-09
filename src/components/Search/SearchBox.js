import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, createRef } from 'react';
import './SearchBox.css'

const SearchBox = () => {
  const [searchField, setSearchField] = useState('');
  const [showClear, setShowClear] = useState(false);

  const searchInput = createRef();

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);

    if(e.target.value !== '') {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  };

  const calculateClass = showClear ? 'icon clear-search-field active' : 'icon clear-search-field';

  return (
    <div className='search-box'>
      <FontAwesomeIcon icon={faSearch} className='icon' />
      <input type='text' ref={searchInput} value={searchField} className='search-field' placeholder='Search all notes' onChange={(e) => {
        handleSearchChange(e);
      }}/>
      <FontAwesomeIcon icon={faTimes} className={calculateClass} onClick={(e) => {
        setSearchField('');
        setShowClear(false);
        searchInput.current.focus();
      }}/>
    </div>
  )
};

export default SearchBox;