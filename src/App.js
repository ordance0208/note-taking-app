import { createContext, useReducer, useState } from 'react';
import notesReducer from './reducers/notes';
import AppContainer from './components/containers/AppContainer/AppContainer';
import './App.css';

export const NotesContext = createContext();

function App() {
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNote,
        setSelectedNote,
        dispatchNotes
      }}
    >
      <div className="App">
        <AppContainer />
      </div>
    </NotesContext.Provider>
  );
}

export default App;
