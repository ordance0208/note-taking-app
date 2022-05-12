import { createContext, useReducer, useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import notesReducer from './reducers/notes';
import AppContainer from './components/AppContainer/AppContainer';
import { saveNotes, loadNotes } from './components/utils/localStorage';
import MenuDrawer from './components/Drawer/MenuDrawer';
import About from './pages/About/About';
import './App.css';

export const NavbarContext = createContext();
export const NotesContext = createContext();

function App() {
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [selectedNote, setSelectedNote] = useState(null);

  const [menuDrawerOpened, setMenuDrawerOpened] = useState(false);

  // When the application starts it loads the saved notes
  // from local storage (if any).
  useEffect(() => {
    loadNotes(dispatchNotes, setSelectedNote);

    // Updates the notes when they're changed from another window on the same browser
    window.addEventListener('storage', () =>
      loadNotes(dispatchNotes, setSelectedNote)
    );

    console.log('fired');
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
      <NavbarContext.Provider value={{ menuDrawerOpened, setMenuDrawerOpened }}>
        <div className="App">
          <MenuDrawer menuDrawerOpened={menuDrawerOpened} setMenuDrawerOpened={setMenuDrawerOpened}/>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard' replace/>}/>
            <Route path='/dashboard' element={<AppContainer />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </div>
      </NavbarContext.Provider>
    </NotesContext.Provider>
  );
}

export default App;
