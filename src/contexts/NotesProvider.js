import { createContext, useReducer, useState, useEffect } from "react";
import notesReducer from "../reducers/notes";
import { loadNotes, saveNotes } from "../components/utils/localStorage";

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    loadNotes(dispatchNotes, setActiveNote);

    // Updates the changes when they happen in a different tab
    window.addEventListener('storage', () => {
      loadNotes(dispatchNotes, setActiveNote);
    });
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <NotesContext.Provider value={{notes, dispatchNotes, activeNote, setActiveNote}}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;