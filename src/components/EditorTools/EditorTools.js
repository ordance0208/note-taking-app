import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImage,
  faTasks,
  faBold,
  faItalic,
  faUnderline,
  faHeading,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../Tooltip/Tooltip';
import './EditorTools.css';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import IconHolder from '../IconHolder/IconHolder';

const EditorTools = ({ editor }) => {

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

  const addImage = () => {
    editor.commands.setImage({ src: 'https://www.w3schools.com/images/w3schools_green.jpg' })
  };

  return (
    <div className="editor-tools">
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
          icon={faLink}
          tooltip='Add Link'
          onClick={() => console.log('link added')}
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
