import { createContext, useContext, useState } from 'react';
import NoteContainer from '../NoteContainer/NoteContainer';
import NoteEditorContainer from '../NoteEditorContainer/NoteEditorContainer';
import './AppContainer.css'

export const ResponsiveContext = createContext();

const AppContainer = () => {
  // These are only used for mobile responsiveness
  const [noteContainerActive, setNoteContainerActive] = useState(true);
  const [editorContainerActive, setEditorContainerActive] = useState(false); 

  const toggleEditorView = () => {
    setNoteContainerActive(!noteContainerActive);
    setEditorContainerActive(!editorContainerActive);

  };

  const calculateStyles = noteContainerActive
    ? 'app-container notes-active'
    : 'app-container editor-active'

  return (
    <ResponsiveContext.Provider value={toggleEditorView}>
      <div className={calculateStyles}>
        <NoteContainer />
        <NoteEditorContainer />
      </div>
    </ResponsiveContext.Provider>
  )
};

export default AppContainer;