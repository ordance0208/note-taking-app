import { useState, createRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';

const SearchBox = ({ setSearchText }) => {
  const [searchFieldText, setSearchFieldText] = useState('');
  // Used to show the clear icon (X) when the input field is not empty
  const [showClear, setShowClear] = useState(false);

  const searchInput = createRef();

  const handleSearchChange = (e) => {
    setSearchFieldText(e.target.value);

    // Shows/hides the clear icon depending on the value of the input
    if (e.target.value !== '') {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  };

  // Sets the search value to the parent element (used to filter notes in the sibling component)
  useEffect(() => {
    setSearchText(searchFieldText);
  }, [searchFieldText]);

  const calculateClearIconStyles = showClear
    ? 'icon clear-search-field active'
    : 'icon clear-search-field';

  return (
    <div className="search-box">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        ref={searchInput}
        value={searchFieldText}
        className="search-field"
        placeholder="Search all notes..."
        onChange={(e) => {
          handleSearchChange(e);
        }}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className={calculateClearIconStyles}
        onClick={() => {
          setSearchFieldText('');
          setShowClear(false);
          searchInput.current.focus();
        }}
      />
    </div>
  );
};

export default SearchBox;
