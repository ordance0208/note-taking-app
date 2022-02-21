import { useState } from 'react';
import SearchBox from '../../Search/SearchBox';
import ContainerHeader from '../ContianerHeader/ContainerHeader';
import NotesList from '../NotesList/NotesList';
import Toolbar from '../../Auxillary/Toolbar/Toolbar';
import './NoteContainer.css';

const NoteContainer = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='notes-container'>
      <Toolbar><ContainerHeader /></Toolbar>
      <SearchBox setSearchText={setSearchText}/>
      <NotesList searchText={searchText}/>
    </div>
  )
};

export default NoteContainer;

