import { useContext, useRef } from 'react';
import {
  RiHeading,
  RiBold,
  RiItalic,
  RiUnderline,
  RiImageAddFill,
} from 'react-icons/ri';
import { VscTasklist } from 'react-icons/vsc';
import { FiTrash2, FiChevronLeft } from 'react-icons/fi';
import IconHolder from '../IconHolder/IconHolder';
import { ResponsiveContext } from '../../contexts/ResponsiveProvider';
import { NotesContext } from '../../contexts/NotesProvider';
import './EditorTools.css';

const EditorTools = ({ editor }) => {
  const { enableNotesContainerView } = useContext(ResponsiveContext);
  const {
    setActiveNote,
    activeNote,
    notes,
    dispatchNotes: removeNote,
  } = useContext(NotesContext);

  // Removes the selected note and selects the one with the same index
  const handleNoteDelete = () => {
    const selectedNoteIndex = notes.findIndex(
      (note) => note.id === activeNote.id
    );
    removeNote({ type: 'REMOVE_NOTE', payload: activeNote.id });
    enableNotesContainerView();

    // Retain the selected note index after deletion
    // +1 and -1 are used instead of the index because
    // the notes array isn't yet updated
    if (!notes[selectedNoteIndex + 1]) {
      setActiveNote(notes[selectedNoteIndex - 1]);
    } else {
      setActiveNote(notes[selectedNoteIndex + 1]);
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
      {activeNote && (
        <div className="editor-tools">
          <IconHolder
            icon={<FiChevronLeft />}
            tooltip="Go To Notes List"
            onClick={enableNotesContainerView}
          />
          <IconHolder
            icon={<RiHeading />}
            tooltip="Toggle Heading"
            onClick={() => handleEditorCommand('heading', 1)}
          />
          <IconHolder
            icon={<RiBold />}
            tooltip="Toggle Bold"
            onClick={() => handleEditorCommand('bold', undefined)}
          />
          <IconHolder
            icon={<RiItalic />}
            tooltip="Toggle Italic"
            onClick={() => handleEditorCommand('italic', undefined)}
          />
          <IconHolder
            icon={<RiUnderline />}
            tooltip="Toggle Underline"
            onClick={() => handleEditorCommand('underline', undefined)}
          />
          <IconHolder
            icon={<VscTasklist />}
            tooltip="Toggle Task List"
            onClick={() => handleEditorCommand('tasklist', undefined)}
          />
          <IconHolder
            icon={<RiImageAddFill />}
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

              e.target.value = [];
            }}
            accept="image/*"
            id="image-upload"
          />
          <IconHolder
            icon={<FiTrash2 />}
            tooltip="Delete Note"
            onClick={handleNoteDelete}
          />
        </div>
      )}
    </>
  );
};

export default EditorTools;
