import { useState } from 'react';
import EditorTools from '../EditorTools/EditorTools';
import NoteEditor from '../NoteEditor/NoteEditor';
import './NoteEditorContainer.css';

const NoteEditorContainer = () => {
  // Editor reference passed to the editor tools component
  const [editor, setEditor] = useState(null);

  return (
    <div className='note-editor-container'>
      <EditorTools editor={editor} />
      <NoteEditor setEditor={setEditor} />
    </div>
  );
};

export default NoteEditorContainer;
