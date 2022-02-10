import { useState } from 'react';
import SearchBox from '../../Search/SearchBox';
import ContainerHeader from '../ContianerHeader/ContainerHeader';
import NotesList from '../NotesList/NotesList';
import './NoteContainer.css';

const NoteContainer = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='notes-container'>
      <ContainerHeader />
      <SearchBox setSearchText={setSearchText}/>
      <NotesList searchText={searchText}/>
    </div>
  )
};

export default NoteContainer;

