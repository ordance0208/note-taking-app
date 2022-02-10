import { useContext, useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Image from '@tiptap/extension-image';
import { NotesContext } from '../../App';
import './NoteEditor.css';

const NoteEditor = ({ setEditor }) => {
  const { selectedNote, dispatchNotes: editNote } = useContext(NotesContext);
  const [editorJSON, setEdiorJSON] = useState(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Underline,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: '',
    onUpdate({ editor }) {
      setEdiorJSON(editor.getJSON());
    },
  });

  const onUpdate = () => {
    let displayTitle = '';

    if (editorJSON) {
      if (editorJSON.content.length !== 0) {
        for (let i = 0; i < editorJSON.content.length; i++) {
          if (editorJSON.content[i].content) {
            displayTitle = editorJSON.content[i].content[0].text;
            break;
          }
        }
      }
    }
    const editedNote = {
      ...selectedNote,
      noteContent: editorJSON,
      displayTitle,
    };
    editNote({ type: 'EDIT_NOTE', payload: editedNote });
    console.log(editorJSON);
  };

  useEffect(() => {
    onUpdate();
  }, [editorJSON]);

  useEffect(() => {
    if (!selectedNote) return;

    // Checking if the note is empty
    if (Object.keys(selectedNote.noteContent).length !== 0) {
      editor.commands.setContent(selectedNote.noteContent);
    } else {
      editor.commands.setContent('');
    }
  }, [selectedNote]);

  useEffect(() => {
    setEditor(editor);
  }, [editor]);

  return selectedNote ? (
    <EditorContent editor={editor} className="text-editor" />
  ) : (
    <p>No note selected</p>
  );
};

export default NoteEditor;
