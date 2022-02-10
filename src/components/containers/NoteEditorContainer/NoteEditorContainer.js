import './NoteEditorContainer.css';
import EditorTools from '../../EditorTools/EditorTools';
import NoteEditor from '../../NoteEditor/NoteEditor';
import { useState } from 'react/cjs/react.development';
import { createRef, useContext, useEffect, useRef } from 'react';
import { NotesContext } from '../../../App';

const NoteEditorContainer = () => {
  const [editor, setEditor] = useState(null);
  const { selectedNote } = useContext(NotesContext);

  useEffect(() => {
    console.log('[Editor Container] ', selectedNote);
    if(selectedNote) {
    
    }
  }, [selectedNote]);

  return (
    <div className="note-editor-container">
      <EditorTools editor={editor} />
      <NoteEditor setEditor={setEditor}/>
    </div>
  );
};

export default NoteEditorContainer;
