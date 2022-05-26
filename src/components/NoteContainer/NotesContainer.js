import { useState } from 'react';
import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';
import NotesList from '../NotesList/NotesList';
import './NotesContainer.css';

const NotesContainer = () => {
  // Search text from the search field used to filter the notes by text
  const [searchText, setSearchText] = useState('');

  return (
    <div className='notes-container'>
      <Header />
      <SearchField setSearchText={setSearchText}/>
      <NotesList searchText={searchText}/>
    </div>
  );
};

export default NotesContainer;

