import { useContext, useEffect } from 'react';
import { NotesContext } from '../../App';
import { ResponsiveContext } from '../containers/AppContainer/AppContainer';
import './Note.css';

const Note = ({ note }) => {
  const { selectedNote, setSelectedNote } = useContext(NotesContext);
  const toggleEditorView = useContext(ResponsiveContext);

  const handleClick = () => {
    setSelectedNote(note);
    toggleEditorView();
  }

  const calculateStyles = selectedNote.id  === note.id ? 'note selected' : 'note';

  return (
    <div onClick={handleClick} 
      className={calculateStyles}>
      <h3>{note.displayTitle || 'New Note'}</h3>
    </div>
  )
};

export default Note;