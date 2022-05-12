import { useContext } from 'react';
import { faBars, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import IconHolder from '../IconHolder/IconHolder';
import { NavbarContext, NotesContext } from '../../App';
import './ContainerHeader.css';

const ContainerHeader = () => {
  const { dispatchNotes: addNote, setSelectedNote } = useContext(NotesContext);
  const { menuDrawerOpened, setMenuDrawerOpened } = useContext(NavbarContext);

  const toggleDrawer = () => {
    setMenuDrawerOpened(!menuDrawerOpened);
  }

  return (
    <div className="container-header">
      <IconHolder
          icon={menuDrawerOpened ? faTimes : faBars}
          tooltip={menuDrawerOpened ? 'Close Menu' : 'Menu'}
          onClick={toggleDrawer}
        />
      <h3>Noteify</h3>
      <IconHolder
        icon={faEdit}
        tooltip="New Note"
        onClick={() => {
          const note = {
            noteContent: {},
            displayTitle: '',
            dispayBody: '',
            wordsToQuery: '',
            id: uuidv4(),
            createdAt: moment(),
          };

          addNote({ type: 'ADD_NOTE', payload: note });
          setSelectedNote(note);
        }}
      />
    </div>
  );
};

export default ContainerHeader;
