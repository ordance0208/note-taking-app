import { createContext, useState } from 'react';
import NoteContainer from '../NoteContainer/NoteContainer';
import NoteEditorContainer from '../NoteEditorContainer/NoteEditorContainer';
import './AppContainer.css';

export const ResponsiveContext = createContext();

const AppContainer = () => {
  // These are only used for mobile responsiveness
  const [noteContainerActive, setNoteContainerActive] = useState(true);
  const [editorContainerActive, setEditorContainerActive] = useState(false);

  const enableEditorView = () => {
    setNoteContainerActive(false);
    setEditorContainerActive(true);
  };

  const enableNotesContainerView = () => {
    setNoteContainerActive(true);
    setEditorContainerActive(false);
  };

  // Calculates the style (these styles are used only for mobile)
  const styles = noteContainerActive
    ? 'app-container notes-active'
    : 'app-container editor-active';

  return (
    <ResponsiveContext.Provider
      value={{
        enableEditorView,
        enableNotesContainerView,
      }}
    >
      <div className={styles}>
        <NoteContainer />
        <NoteEditorContainer />
      </div>
    </ResponsiveContext.Provider>
  );
};

export default AppContainer;
