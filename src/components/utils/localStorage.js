import moment from "moment";

// Save the notes passed as an argument to local storage.
const saveNotes = (notes) => {
  const stringifiedNotes = JSON.stringify(notes);
  localStorage.setItem('notes', stringifiedNotes);
};

// Loads the notes from local storage (if any) 
// and updates the state.
const loadNotes = (dispatchNotes, setActiveNote) => {
  let savedNotes = JSON.parse(localStorage.getItem('notes'));

  if(!savedNotes || savedNotes.length === 0) {
    setActiveNote(null);
    dispatchNotes([]);
  }

  savedNotes = savedNotes.map(note => ({...note, createdAt: moment(note.createdAt)}));
  setActiveNote(savedNotes[0]);
  dispatchNotes({ type: 'LOAD_NOTES', payload: savedNotes })
};

export { saveNotes, loadNotes };