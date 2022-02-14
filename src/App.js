import { createContext, useEffect, useReducer, useState } from 'react';
import notesReducer from './reducers/notes';
import './App.css';
import AppContainer from './components/containers/AppContainer/AppContainer';

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
        <AppContainer />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
