import { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { NotesContext } from '../../../App';
import EditorTools from '../../EditorTools/EditorTools';
import NoteEditor from '../../NoteEditor/NoteEditor';
import './NoteEditorContainer.css';

const NoteEditorContainer = () => {
  const [editor, setEditor] = useState(null);

  return (
    <div className='note-editor-container'>
      <EditorTools editor={editor} />
      <NoteEditor setEditor={setEditor} />
    </div>
  );
};

export default NoteEditorContainer;
