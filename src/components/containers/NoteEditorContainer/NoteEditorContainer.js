import { createRef, useContext, useEffect } from 'react';
import EditorTools from '../../EditorTools/EditorTools';
import NoteEditor from '../../NoteEditor/NoteEditor';
import { useState } from 'react/cjs/react.development';
import { NotesContext } from '../../../App';
import './NoteEditorContainer.css';

const NoteEditorContainer = () => {
  const [editor, setEditor] = useState(null);
  const { selectedNote } = useContext(NotesContext);

  return (
    <div className="note-editor-container">
      <EditorTools editor={editor} />
      <NoteEditor setEditor={setEditor} />
    </div>
  );
};

export default NoteEditorContainer;
