import { useContext } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { RiMenuLine, RiEditBoxLine, RiCloseLine } from 'react-icons/ri';
import { NotesContext } from '../../contexts/NotesProvider';
import { NavbarContext } from '../../contexts/NavbarProvider';
import IconHolder from '../IconHolder/IconHolder';
import './Header.css';

const Header = () => {
  const { dispatchNotes: addNote, setActiveNote } = useContext(NotesContext);
  const { navbarActive, setNavbarActive } = useContext(NavbarContext);

  const toggleDrawer = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <header className="header">
      <IconHolder
        icon={navbarActive ? <RiCloseLine /> : <RiMenuLine />}
        tooltip={navbarActive ? 'Close Menu' : 'Menu'}
        onClick={toggleDrawer}
      />
      <h3>Noteify</h3>
      <div style={{'visibility' : `${document.title.toLowerCase().includes('dashboard') ? 'visible' : 'hidden'}`}}>
        <IconHolder
          icon={<RiEditBoxLine />}
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
        />
      </div>
    </header>
  );
};

export default Header;
