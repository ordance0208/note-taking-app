import {
  faImage,
  faTasks,
  faBold,
  faItalic,
  faUnderline,
  faHeading,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import './EditorTools.css';
import IconHolder from '../IconHolder/IconHolder';
import { useContext } from 'react';
import { ResponsiveContext } from '../containers/AppContainer/AppContainer';

const EditorTools = ({ editor }) => {

  const toggleEditorView = useContext(ResponsiveContext);


  const handleEditorCommand = (action) => {    
    switch(action) {
      case 'bold' : editor.commands.toggleBold(); break;
      case 'italic' : editor.commands.toggleItalic(); break;
      case 'underline' : editor.commands.toggleUnderline(); break;
      case 'heading' : editor.commands.toggleHeading({ level : 1 }); break;
      case 'tasklist' : editor.commands.toggleTaskList(); break;
    }

    editor.commands.focus();
  };

  return (
    <div className="editor-tools">
        <IconHolder 
          icon={faChevronLeft}
          tooltip='Go To Notes List'
          onClick={toggleEditorView}
        />          
        <IconHolder
          icon={faHeading}
          tooltip='Toggle Heading'
          onClick={() => handleEditorCommand('heading')}
        />
        <IconHolder 
          icon={faBold}
          tooltip='Toggle Bold'
          onClick={() => handleEditorCommand('bold')}
        />
        <IconHolder
          icon={faItalic}
          tooltip='Toggle Italic'
          onClick={() => handleEditorCommand('italic')}
        />
        <IconHolder
          icon={faUnderline}
          tooltip='Toggle Underline'
          onClick={() => handleEditorCommand('underline')}
        />
        <IconHolder 
          icon={faTasks}
          tooltip='Toggle Task List'
          onClick={() => handleEditorCommand('tasklist')}
        />
        <IconHolder 
          icon={faImage}
          tooltip='Add Image'
          onClick={() => console.log('Image added')}
        />
    </div>
  );
};

export default EditorTools;
