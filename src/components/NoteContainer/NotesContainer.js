import { useState } from 'react';
import ContainerHeader from '../ContianerHeader/ContainerHeader';
import SearchField from '../Search/SearchField';
import NotesList from '../NotesList/NotesList';
import './NotesContainer.css';

const NotesContainer = () => {
  // Search text from the search field used to filter the notes by text
  const [searchText, setSearchText] = useState('');

  return (
    <div className='notes-container'>
      <ContainerHeader />
      <SearchField setSearchText={setSearchText}/>
      <NotesList searchText={searchText}/>
    </div>
  );
};

export default NotesContainer;

