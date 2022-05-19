import { useContext } from 'react';
import { RiMenuLine, RiEditBoxLine, RiCloseLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import IconHolder from '../IconHolder/IconHolder';
import { NavbarContext, NotesContext } from '../../App';
import './ContainerHeader.css';

const ContainerHeader = () => {
  const { dispatchNotes: addNote, setActiveNote } = useContext(NotesContext);
  const { menuDrawerOpened, setMenuDrawerOpened } = useContext(NavbarContext);

  const toggleDrawer = () => {
    setMenuDrawerOpened(!menuDrawerOpened);
  }

  return (
    <div className="container-header">
      <IconHolder
          tooltip={menuDrawerOpened ? 'Close Menu' : 'Menu'}
          onClick={toggleDrawer}
          reactIcon={menuDrawerOpened ? <RiCloseLine /> : <RiMenuLine />}
        />
      <h3>Noteify</h3>
      <IconHolder
        tooltip="New Note"
        onClick={() => {
          const note = {
            noteContent: {},
            displayTitle: '',
            dispayBody: '',
            wordsToQuery: '',
            id: uuidv4(),
            createdAt: moment(),
            selected: true
          };
          
          addNote({ type: 'ADD_NOTE', payload: note });
          setActiveNote(note);
        }}
        reactIcon={<RiEditBoxLine />}
      />
    </div>
  );
};

export default ContainerHeader;
