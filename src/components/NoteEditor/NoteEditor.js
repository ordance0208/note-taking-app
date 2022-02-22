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
    let lineOfText = '';
    let displayBody = [];

    if (editorJSON) {
      if (editorJSON.content.length !== 0) {
        for (let i = 0; i < editorJSON.content.length; i++) {
          if (editorJSON.content[i].content) {
            if(editorJSON.content[i].type === 'taskList') {
              if(editorJSON.content[i].content[0].content[0].content) {
                displayTitle = editorJSON.content[i].content[0].content[0].content[0].text;
              } else {
                displayTitle = '';
              }
              break;
            }
            if(editorJSON.content[i].content[0].text) {
              displayTitle = editorJSON.content[i].content[0].text;
              break;
            }
          }
        }
      }
    }

    if (editorJSON) {
      if (editorJSON.content.length !== 0) {
        for (let i = 0; i < editorJSON.content.length; i++) {
          if (editorJSON.content[i].content) {
            if(editorJSON.content[i].type === 'taskList') {
              if(editorJSON.content[i].content[0].content[0].content) {
                lineOfText = editorJSON.content[i].content[0].content[0].content[0].text;
                displayBody.push(lineOfText);
              }
            } else {
              if(editorJSON.content[i].content[0].text) {
                lineOfText = editorJSON.content[i].content[0].text;
                displayBody.push(lineOfText)
              }
            }
          }
        }
      }
    }
    
    displayBody = displayBody.join(' ');

    const editedNote = {
      ...selectedNote,
      noteContent: editorJSON,
      displayTitle,
      displayBody
    };
    editNote({ type: 'EDIT_NOTE', payload: editedNote });
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
    <div className='editor-inactive'>
      <h3>No note selected</h3>
    </div>
  );
};

export default NoteEditor;
