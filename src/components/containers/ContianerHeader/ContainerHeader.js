import { useContext } from 'react';
import { faBars, faEdit } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import IconHolder from '../../IconHolder/IconHolder';
import { NotesContext } from '../../../App';
import './ContainerHeader.css';

const ContainerHeader = () => {
  const { dispatchNotes: addNote, setSelectedNote } =
    useContext(NotesContext);

  return (
    <div className="container-header">
      <IconHolder
        icon={faBars}
        tooltip="Menu"
        onClick={() => console.log('Menu should open')}
      />
      <h3>All Notes</h3>
      <IconHolder
        icon={faEdit}
        tooltip="New Note"
        onClick={() => {
          const note = {
            noteContent: {},
            displayTitle: '',
            wordsToQuery: '',
            id: uuidv4(),
            createdAt: moment()
          };
          addNote({ type: 'ADD_NOTE', payload: note });
          setSelectedNote(note);
        }}
      />
    </div>
  );
};

export default ContainerHeader;
