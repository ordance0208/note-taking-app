import { createContext, useEffect, useReducer, useState } from 'react';
import NoteContainer from './components/containers/NoteContainer/NoteContainer';
import NoteEditorContainer from './components/containers/NoteEditorContainer/NoteEditorContainer';
import notesReducer from './reducers/notes';
import './App.css';

export const NotesContext = createContext();

function App() {
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const note = notes.find((note) => note.id === selectedNoteId);
    setSelectedNote(note);
  }, [selectedNoteId]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,
        dispatchNotes,
        selectedNoteId,
        setSelectedNoteId,
      }}
    >
      <div className="App">
        <NoteContainer />
        <NoteEditorContainer />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
