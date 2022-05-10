import { useContext, useRef } from 'react';
import {
  faImage,
  faTasks,
  faBold,
  faItalic,
  faUnderline,
  faHeading,
  faChevronLeft,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import IconHolder from '../IconHolder/IconHolder';
import { ResponsiveContext } from '../AppContainer/AppContainer';
import { NotesContext } from '../../App';
import './EditorTools.css';

const EditorTools = ({ editor }) => {
  const toggleEditorView = useContext(ResponsiveContext);
  const {
    setSelectedNote,
    selectedNote,
    notes,
    dispatchNotes: removeNote,
  } = useContext(NotesContext);

  // Removes the selected note and selects the one with the same index
  const handleNoteDelete = () => {
    const selectedNoteIndex = notes.findIndex(
      (note) => note.id === selectedNote.id
    );
    removeNote({ type: 'REMOVE_NOTE', payload: selectedNote.id });
    toggleEditorView();

    // Retain the selected note index after deletion
    // +1 and -1 are used instead of the index because
    // the notes array isn't yet updated
    if (!notes[selectedNoteIndex + 1]) {
      setSelectedNote(notes[selectedNoteIndex - 1]);
    } else {
      setSelectedNote(notes[selectedNoteIndex + 1]);
    }
  };

  // The input for uploading images is hidden
  // This reference is used to "click" the
  // the input when the image icon is clicked
  const imageUpload = useRef();

  // Handles text editor commands based on the action
  // and then focueses back to the editor
  const handleEditorCommand = (action, payload) => {
    switch (action) {
      case 'bold':
        editor.commands.toggleBold();
        break;
      case 'italic':
        editor.commands.toggleItalic();
        break;
      case 'underline':
        editor.commands.toggleUnderline();
        break;
      case 'heading':
        editor.commands.toggleHeading({ level: payload });
        break;
      case 'tasklist':
        editor.commands.toggleTaskList();
        break;
      case 'add-image':
        editor.commands.setImage({ src: payload });
        break;
    }

    editor.commands.focus();
  };

  return (
    <>
      {selectedNote && (
        <div className="editor-tools">
          <IconHolder
            icon={faChevronLeft}
            tooltip="Go To Notes List"
            onClick={toggleEditorView}
          />
          <IconHolder
            icon={faHeading}
            tooltip="Toggle Heading"
            onClick={() => handleEditorCommand('heading', 1)}
          />
          <IconHolder
            icon={faBold}
            tooltip="Toggle Bold"
            onClick={() => handleEditorCommand('bold', undefined)}
          />
          <IconHolder
            icon={faItalic}
            tooltip="Toggle Italic"
            onClick={() => handleEditorCommand('italic', undefined)}
          />
          <IconHolder
            icon={faUnderline}
            tooltip="Toggle Underline"
            onClick={() => handleEditorCommand('underline', undefined)}
          />
          <IconHolder
            icon={faTasks}
            tooltip="Toggle Task List"
            onClick={() => handleEditorCommand('tasklist', undefined)}
          />
          <IconHolder
            icon={faImage}
            tooltip="Add Image"
            onClick={() => imageUpload.current.click()}
          />
          <input
            ref={imageUpload}
            type="file"
            onChange={(e) => {
              const fileReader = new FileReader();

              fileReader.addEventListener('load', () => {
                const uploadedImage = fileReader.result;
                handleEditorCommand('add-image', uploadedImage);
              });

              fileReader.readAsDataURL(e.target.files[0]);
            }}
            accept="image/*"
            id="image-upload"
          />
          <IconHolder
            icon={faTrashAlt}
            tooltip="Delete Note"
            onClick={handleNoteDelete}
          />
        </div>
      )}
    </>
  );
};

export default EditorTools;
