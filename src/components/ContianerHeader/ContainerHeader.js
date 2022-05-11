import { useState, useContext } from 'react';
import { faBars, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import IconHolder from '../IconHolder/IconHolder';
import { NotesContext } from '../../App';
import MenuDrawer from '../Drawer/MenuDrawer';
import './ContainerHeader.css';

const ContainerHeader = () => {
  const [menuDrawerOpened, setMenuDrawerOpened] = useState(false);

  const { dispatchNotes: addNote, setSelectedNote } = useContext(NotesContext);

  return (
    <div className="container-header">
      <MenuDrawer menuDrawerOpened={menuDrawerOpened} />
      <IconHolder
          icon={menuDrawerOpened ? faTimes : faBars}
          tooltip={menuDrawerOpened ? 'Close Menu' : 'Menu'}
          onClick={() => setMenuDrawerOpened(!menuDrawerOpened)}
        />
      <h3>All Notes</h3>
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
