import { createContext, useReducer, useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import notesReducer from './reducers/notes';
import AppContainer from './components/AppContainer/Dashboard';
import { saveNotes, loadNotes } from './components/utils/localStorage';
import MenuDrawer from './components/Drawer/MenuDrawer';
import About from './pages/About/About';
import ThemeProvider, { ThemeContext } from './contexts/ThemeProvider';
import './App.css';
import PageTitle from './components/PageTitle/PageTitle';

export const NavbarContext = createContext();
export const NotesContext = createContext();

function App() {
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [activeNote, setActiveNote] = useState(null);

  const [menuDrawerOpened, setMenuDrawerOpened] = useState(false);

  useEffect(() => {
    loadNotes(dispatchNotes, setActiveNote);

    // Updates the changes when they happen in a different tab
    window.addEventListener('storage', () => {
      loadNotes(dispatchNotes, setActiveNote);
    });
  }, []);

  // Save the changes when the notes state is changed.
  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        activeNote,
        setActiveNote,
        dispatchNotes,
      }}
    >
      <NavbarContext.Provider value={{ menuDrawerOpened, setMenuDrawerOpened }}>
        <ThemeProvider>
          <div className='App'>
            <PageTitle />
            <MenuDrawer
              menuDrawerOpened={menuDrawerOpened}
              setMenuDrawerOpened={setMenuDrawerOpened}
            />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route
                path="/dashboard"
                element={<AppContainer />}
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </ThemeProvider>
      </NavbarContext.Provider>
    </NotesContext.Provider>
  );
}

export default App;
