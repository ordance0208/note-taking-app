import {
  faImage,
  faTasks,
  faBold,
  faItalic,
  faUnderline,
  faHeading,
  faChevronLeft,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import './EditorTools.css';
import IconHolder from '../IconHolder/IconHolder';
import { useContext } from 'react';
import { ResponsiveContext } from '../containers/AppContainer/AppContainer';
import { NotesContext } from '../../App';
import Toolbar from '../Auxillary/Toolbar/Toolbar';

const EditorTools = ({ editor }) => {

  const toggleEditorView = useContext(ResponsiveContext);
  const { setSelectedNote, selectedNote, notes, dispatchNotes: removeNote } = useContext(NotesContext);

  // Removes the selected note and selects the one with the same index
  const handleNoteDelete = () => {
    const selectedNoteIndex = notes.findIndex(note => note.id === selectedNote.id);
    removeNote({ type: 'REMOVE_NOTE', payload: selectedNote.id });
    toggleEditorView();
    
    // Retain the selected note index after deletion
    // +1 and -1 are used instead of the index because
    // the notes array isn't yet updated
    if(!notes[selectedNoteIndex + 1]) {
      setSelectedNote(notes[selectedNoteIndex - 1]);
    } else {
      setSelectedNote(notes[selectedNoteIndex + 1]);
    }
  }

  // Handles text editor commands based on the action 
  const handleEditorCommand = (action) => {    
    switch(action) {
      case 'bold' : editor.commands.toggleBold(); break;
      case 'italic' : editor.commands.toggleItalic(); break;
      case 'underline' : editor.commands.toggleUnderline(); break;
      case 'heading' : editor.commands.toggleHeading({ level : 1 }); break;
      case 'tasklist' : editor.commands.toggleTaskList(); break;
    }

    editor.commands.focus();
  };

  return (
    <Toolbar>
      {selectedNote && <div className="editor-tools">
          <IconHolder 
            icon={faChevronLeft}
            tooltip='Go To Notes List'
            onClick={toggleEditorView}
          />          
          <IconHolder
            icon={faHeading}
            tooltip='Toggle Heading'
            onClick={() => handleEditorCommand('heading')}
          />
          <IconHolder 
            icon={faBold}
            tooltip='Toggle Bold'
            onClick={() => handleEditorCommand('bold')}
          />
          <IconHolder
            icon={faItalic}
            tooltip='Toggle Italic'
            onClick={() => handleEditorCommand('italic')}
          />
          <IconHolder
            icon={faUnderline}
            tooltip='Toggle Underline'
            onClick={() => handleEditorCommand('underline')}
          />
          <IconHolder 
            icon={faTasks}
            tooltip='Toggle Task List'
            onClick={() => handleEditorCommand('tasklist')}
          />
          <IconHolder 
            icon={faImage}
            tooltip='Add Image'
            onClick={() => console.log('Image added')}
          />
          <IconHolder 
            icon={faTrashAlt}
            tooltip='Delete Note'
            onClick={handleNoteDelete}
          />
      </div>}
    </Toolbar>
  );
};

export default EditorTools;
