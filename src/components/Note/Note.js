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

  // console.log(note.wordsToQuery);

  return (
    <div onClick={handleClick} 
      className={calculateStyles}>
      <h3 className='note-display-title'>{note.displayTitle || 'New Note'}</h3>
     
      <p className='note-created-date'>{note.createdAt.format('DD/MM/YYYY')}</p>
    </div>
  )
};

export default Note;