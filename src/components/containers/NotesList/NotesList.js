import { useContext } from 'react';
import { NotesContext } from '../../../App';
import Note from '../../Note/Note';
import './NotesList.css';

const NotesList = () => {
  const { notes, selectedNote } = useContext(NotesContext);

  const notesList = notes.map((note) => (
    <Note
      note={note}
      key={note.id}
    />
  ));

  const calculateStyles = notes.length === 0 ? 'note-list' : 'note-list active';

  return (
    <div className={calculateStyles}>
      {notes.length === 0 ? 'No notes to show' : notesList}
    </div>
  );
};

export default NotesList;
