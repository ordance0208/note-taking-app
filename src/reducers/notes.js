const notes = [];

const notesReducer = (state = notes, action) => {
  switch(action.type) {
    case 'ADD_NOTE' : return [action.payload, ...state];
    case 'REMOVE_NOTE' : return state.filter(note => note.id !== action.payload);
    case 'EDIT_NOTE' : return state.map((note) => {
      if(note.id === action.payload.id) {
        return action.payload;
      } else {
        return note;
      }
    });
    default : return state
  }
};

export default notesReducer;