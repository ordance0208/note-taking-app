import { createContext, useReducer, useState, useEffect } from 'react';
import notesReducer from './reducers/notes';
import AppContainer from './components/AppContainer/AppContainer';
import { saveNotes, loadNotes } from './components/utils/localStorage';
import './App.css';

export const NotesContext = createContext();

function App() {
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [selectedNote, setSelectedNote] = useState(null);

  // When the application starts it loads the saved notes
  // from local storage (if any).
  useEffect(() => {
    loadNotes(dispatchNotes, setSelectedNote);

    // Updates the notes when they're changed from another window on the same browser
    window.addEventListener('storage', () => loadNotes(dispatchNotes, setSelectedNote));

    console.log('fired')
  }, []);

  // When the notes state is changed its changes are saved in local storage.
  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,
        setSelectedNote,
        dispatchNotes,
      }}
    >
      <div className="App">
        <AppContainer />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
