import { createContext, useReducer, useState, useEffect } from 'react';
import notesReducer from './reducers/notes';
import AppContainer from './components/AppContainer/AppContainer';
import moment from 'moment';
import './App.css';

export const NotesContext = createContext();

function App() {
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if(!savedNotes) return;
    
    for(let i = 0; i < savedNotes.length; i++) {

      const note = savedNotes[i];
      note.createdAt = moment(note.createdAt);

      dispatchNotes({ type: 'ADD_NOTE', payload: note})
    }

    setSelectedNote(savedNotes[0]);
  }, []);

  useEffect(() => {
    const stringifiedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', stringifiedNotes);
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
