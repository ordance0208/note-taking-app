import { useContext } from 'react';
import { NotesContext } from '../../App';
import Note from '../Note/Note';
import './NotesList.css';

const NotesList = ({ searchText }) => {
  const { notes } = useContext(NotesContext);

  // Filters the note based on the search field then
  // maps the elements into the array for rendering
  const notesList = notes
    .filter(note => note.wordsToQuery.toLowerCase().includes(searchText.toLowerCase()))
    .map(note => <Note note={note} key={note.id} /> );

  const calculateStyles = notes.length === 0 ? 'note-list' : 'note-list active';

  return (
    <div className={calculateStyles}>
      {notes.length === 0 ? <h3>No notes to show</h3> : notesList}
    </div>
  );
};

export default NotesList;
