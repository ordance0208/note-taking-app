import moment from "moment";

// Save the notes passed as an argument to local storage.
const saveNotes = (notes) => {
  const stringifiedNotes = JSON.stringify(notes);
  localStorage.setItem('notes', stringifiedNotes);
};

// Loads the notes from local storage (if any) 
// and updates the state.
const loadNotes = (dispatchNotes, setSelectedNote) => {
  let savedNotes = JSON.parse(localStorage.getItem('notes'));

  if(!savedNotes) return;
  if(savedNotes.length === 0) {
    dispatchNotes({ type: 'LOAD_NOTES', payload: savedNotes });
    setSelectedNote(null);
    return;
  }

  // Because the data was stringified the createdAt property is of type string,
  // this code is converting it back to an moment object so it can be formatted later.
  savedNotes = savedNotes.map(note => {
    return {...note, createdAt: moment(note.createdAt) }
  });

  setSelectedNote(savedNotes[0]);
  
  dispatchNotes({ type: 'LOAD_NOTES', payload: savedNotes });
};

export { saveNotes, loadNotes };