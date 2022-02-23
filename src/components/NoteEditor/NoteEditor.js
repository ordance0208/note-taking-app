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

  //#region editor initialiation
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
  //#endregion

  const onEditorUpdate = () => {
    if(!editorJSON) return;

    let displayTitle = '';
    let lineOfText = '';
    let wordsToQuery = [];

    // Adding the display title for the note (the first line that contains text)
    // Heavely nested code because of the wierd editor output structure
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

    // Adding all the words to the note so it can later be used for querying
    // Heavely nested code because of the wierd editor output structure
    if (editorJSON.content.length !== 0) {
      for (let i = 0; i < editorJSON.content.length; i++) {
        if (editorJSON.content[i].content) {
          if(editorJSON.content[i].type === 'taskList') {
            if(editorJSON.content[i].content.length > 0 && editorJSON.content[i].content[0].content[0].content) {
              for(let j = 0; j < editorJSON.content[i].content.length; j++) {
                if(editorJSON.content[i].content[j].content[0].content) {
                  lineOfText = editorJSON.content[i].content[j].content[0].content[0].text;
                  console.log(lineOfText);
                  wordsToQuery.push(lineOfText);
                }
              }
            }
          } else {
            if(editorJSON.content[i].content[0].text) {
              lineOfText = editorJSON.content[i].content[0].text;
              wordsToQuery.push(lineOfText)
            }
          }
        }
      }
    }
    
    // Query words converted into a string for easier searching
    wordsToQuery = wordsToQuery.join(' ');

    // Edited note dispatched to the reducer
    const editedNote = {
      ...selectedNote,
      noteContent: editorJSON,
      displayTitle,
      wordsToQuery
    };
    editNote({ type: 'EDIT_NOTE', payload: editedNote });
  };

  // Updates the note on every editor update
  useEffect(() => {
    onEditorUpdate();
  }, [editorJSON]);

  useEffect(() => {
    if (!selectedNote) return;

    // Checking if the note is empty
    // if it is the editor content is set to ''
    // if it isn't the editor content is set to the selected note's content
    if (Object.keys(selectedNote.noteContent).length !== 0) {
      editor.commands.setContent(selectedNote.noteContent);
    } else {
      editor.commands.setContent('');
    }
  }, [selectedNote]);

  // Setting the current editor reference in the parent component
  // so that the editor commands can be used from its sibling
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
