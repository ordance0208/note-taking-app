import { useContext } from 'react';
import { RiMenuLine, RiEditBoxLine, RiCloseLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import IconHolder from '../IconHolder/IconHolder';
import { NotesContext } from '../../contexts/NotesProvider';
import { NavbarContext } from '../../contexts/NavbarProvider';
import './ContainerHeader.css';

const ContainerHeader = () => {
  const { dispatchNotes: addNote, setActiveNote } = useContext(NotesContext);
  const { navbarActive, setNavbarActive } = useContext(NavbarContext);

  const toggleDrawer = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <div className="container-header">
      <IconHolder
        tooltip={navbarActive ? 'Close Menu' : 'Menu'}
        onClick={toggleDrawer}
        reactIcon={navbarActive ? <RiCloseLine /> : <RiMenuLine />}
      />
      <h3>Noteify</h3>
      <div style={{'visibility' : `${document.title.toLowerCase().includes('dashboard') ? 'visible' : 'hidden'}`}}>
        <IconHolder
          tooltip="New Note"
          onClick={() => {
            const note = {
              noteContent: {},
              displayTitle: '',
              dispayBody: '',
              wordsToQuery: [],
              id: uuidv4(),
              createdAt: moment(),
              selected: true,
            };

            addNote({ type: 'ADD_NOTE', payload: note });
            setActiveNote(note);
          }}
          reactIcon={<RiEditBoxLine />}
        />
      </div>
    </div>
  );
};

export default ContainerHeader;
