import { useContext, useEffect } from 'react';
import { NotesContext } from '../../App';
import { ResponsiveContext } from '../containers/AppContainer/AppContainer';
import './Note.css';

const Note = ({ note }) => {
  const { selectedNoteId, setSelectedNoteId } = useContext(NotesContext);
  const toggleEditorView = useContext(ResponsiveContext);

  const handleClick = () => {
    setSelectedNoteId(note.id);
    toggleEditorView();
    console.log(note.id);
  }

  const calculateStyles = selectedNoteId === note.id ? 'note selected' : 'note';

  return (
    <div onClick={handleClick} 
      className={calculateStyles}>
      <h3>{note.displayTitle || 'New Note'}</h3>
    </div>
  )
};

export default Note;