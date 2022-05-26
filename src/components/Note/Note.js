import { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesProvider';
import { ResponsiveContext } from '../AppContainer/Dashboard';
import './Note.css';

const Note = ({ note }) => {
  const { activeNote, setActiveNote } = useContext(NotesContext);
  // Enables the editor view when the note is tapped on mobile.
  const { enableEditorView } = useContext(ResponsiveContext);

  const handleNoteClick = () => {
    enableEditorView();
    setActiveNote(note);    
  };

  const calculateStyles = `note ${activeNote && note.id === activeNote.id ? 'active' : ''}`;

  return (
    <div onClick={handleNoteClick} 
      className={calculateStyles}>
      <h3 className='note-display-title'>{note.wordsToQuery[0] || 'New Note'}</h3>
      <p className={note.wordsToQuery[1] ? 'note-display-body' : 'note-display-body hide'}>{note.wordsToQuery[1] || 'A'}</p>
      <p className='note-created-date'>{note.createdAt.format('DD/MM/YYYY')}</p>
    </div>
  );
};

export default Note;