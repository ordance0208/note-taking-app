import { useContext } from 'react';
import { useEffect } from 'react';
import { NotesContext } from '../../App';
import { ResponsiveContext } from '../AppContainer/AppContainer';
import './Note.css';

const Note = ({ note }) => {
  const { activeNote, setActiveNote } = useContext(NotesContext);
  const { enableEditorView } = useContext(ResponsiveContext);

  const handleNoteClick = () => {
    enableEditorView();
    setActiveNote(note);    
  };

  useEffect(() => {
    if(activeNote) return;
    setActiveNote(note);
  }, []);

  const calculateStyles = `note ${activeNote && note.id === activeNote.id ? 'selected' : ''}`;

  return (
    <div onClick={handleNoteClick} 
      className={calculateStyles}>
      <h3 className='note-display-title'>{note.displayTitle || 'New Note'}</h3>
      <p className={note.displayBody ? 'note-display-body' : 'note-display-body hide'}>{note.displayBody || 'A'}</p>
      <p className='note-created-date'>{note.createdAt.format('DD/MM/YYYY')}</p>
    </div>
  );
};

export default Note;