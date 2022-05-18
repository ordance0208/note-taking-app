import { createContext, useState } from 'react';
import NotesContainer from '../NoteContainer/NotesContainer';
import NoteEditorContainer from '../NoteEditorContainer/NoteEditorContainer';
import './Dashboard.css';

export const ResponsiveContext = createContext();

const Dashboard = () => {
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
    ? 'dashboard notes-active'
    : 'dashboard editor-active';

  return (
    <ResponsiveContext.Provider
      value={{
        enableEditorView,
        enableNotesContainerView,
      }}
    >
      <div className={styles}>
        <NotesContainer />
        <NoteEditorContainer />
      </div>
    </ResponsiveContext.Provider>
  );
};

export default Dashboard;
