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
  const { activeNote, dispatchNotes: editNote } = useContext(NotesContext);
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
    if (!editorJSON) return;
    if (editorJSON.content.length === 0) return;

    let lineOfText = '';
    let displayTitle = '';
    let displayBody = '';
    let displayTitleAdded = false;
    let wordsToQuery = [];

    console.log(editorJSON);

    // Adding all the words to the note so it can later be used for querying
    // as well as adding the note title and (a snippet of) the body that will be
    // shown on each note when listed in the notes list component
    // Heavily nested code because of the editor output structure
    for (let i = 0; i < editorJSON.content.length; i++) {
      lineOfText = '';
      if (editorJSON.content[i].content) {
        if (editorJSON.content[i].type === 'taskList') {
          // Checking if the current line on the editor is a task list
          // because it has different properties than a regular one
          if (
            // Checking if the task item has text
            editorJSON.content[i].content.length > 0
            // &&
            // editorJSON.content[i].content[0].content[0].content
          ) {
            for (let j = 0; j < editorJSON.content[i].content.length; j++) {
              lineOfText = '';
              for (
                let k = 0;
                k < editorJSON.content[i].content[j].content.length;
                k++
              ) {
                if (editorJSON.content[i].content[j].content[k].content) {
                  if (
                    editorJSON.content[i].content[j].content[k].content.length >
                    1
                  ) {
                    for (
                      let l = 0;
                      l <
                      editorJSON.content[i].content[j].content[k].content
                        .length;
                      l++
                    ) {
                      if (
                        editorJSON.content[i].content[j].content[k].content[l]
                          .text
                      ) {
                        lineOfText +=
                          editorJSON.content[i].content[j].content[k].content[l]
                            .text;                        
                      }
                    }
                    wordsToQuery.push(lineOfText);
                  } else {
                    lineOfText =
                      editorJSON.content[i].content[j].content[k].content[0]
                        .text;
                    wordsToQuery.push(lineOfText);
                  }
                }
              }
            }
          }
        } else {
          // If the current line is not a task list it's a paragraph
          if (editorJSON.content[i].content[0].text) {
            // If a part of the line is formatted it will be added as a new array item
            // and by doing this we are concatinating it to be one string
            for (let j = 0; j < editorJSON.content[i].content.length; j++) {
              lineOfText += editorJSON.content[i].content[j].text;
            }
            wordsToQuery.push(lineOfText);
          }
        }
      }
    }

    // Query words converted into a string for easier searching
    // wordsToQuery = wordsToQuery.join(' ');
    wordsToQuery = wordsToQuery.filter(word => word.trim().length !== 0);

    // The active note with its changes is getting dispatched to the reducer
    const editedNote = {
      ...activeNote,
      noteContent: editorJSON,
      displayTitle,
      displayBody,
      wordsToQuery,
    };
    editNote({ type: 'EDIT_NOTE', payload: editedNote });
  };

  useEffect(() => {
    if (!activeNote) return;

    if (!editor) {
      return;
    }

    // Checking if the note is empty
    // if it is the editor content is set to ''
    // if it isn't the editor content is set to the selected note's content
    if (Object.keys(activeNote.noteContent).length !== 0) {
      editor.commands.setContent(activeNote.noteContent);
    } else {
      editor.commands.setContent('');
    }
  }, [activeNote, editor]);

  // Updates the note on every editor update
  useEffect(() => {
    onEditorUpdate();
  }, [editorJSON]);

  // Setting the current editor reference in the parent component
  // so that the editor commands can be used from its sibling
  useEffect(() => {
    setEditor(editor);
  }, [editor]);

  return activeNote ? (
    <EditorContent editor={editor} className="text-editor" />
  ) : (
    <div className="editor-inactive">
      <h3>No note selected</h3>
    </div>
  );
};

export default NoteEditor;
