import { useContext } from 'react';
import { NotesContext } from '../../App';
import './Note.css';

const Note = ({ note }) => {
  const { selectedNoteId, setSelectedNoteId } = useContext(NotesContext);

  const calculateStyles = selectedNoteId === note.id ? 'note selected' : 'note';

  return (
    <div onClick={() => setSelectedNoteId(note.id)} className={calculateStyles}>
      <h3>Title: {note.displayTitle || 'New Note'}</h3>
    </div>
  )
};

export default Note;