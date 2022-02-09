import './NoteEditorContainer.css';
import EditorTools from '../../EditorTools/EditorTools';
import NoteEditor from '../../NoteEditor/NoteEditor';
import { useState } from 'react/cjs/react.development';

const NoteEditorContainer = () => {
  const [editor, setEditor] = useState(null);

  return (
    <div className="note-editor-container">
      <EditorTools editor={editor} />
      <NoteEditor setEditor={setEditor}/>
    </div>
  );
};

export default NoteEditorContainer;
