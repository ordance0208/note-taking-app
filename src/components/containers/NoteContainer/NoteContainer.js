import SearchBox from '../../Search/SearchBox';
import ContainerHeader from '../ContianerHeader/ContainerHeader';
import NotesList from '../NotesList/NotesList';
import './NoteContainer.css';

const NoteContainer = () => {
  return (
    <div className='notes-container'>
      <ContainerHeader />
      <SearchBox />
      <NotesList />
    </div>
  )
};

export default NoteContainer;

