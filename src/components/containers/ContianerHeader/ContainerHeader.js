import './ContainerHeader.css'
import { faBars, faEdit } from '@fortawesome/free-solid-svg-icons';
import IconHolder from '../../IconHolder/IconHolder';
import { useContext } from 'react';
import { NotesContext } from '../../../App';
import { v4 as uuidv4 } from 'uuid';

const ContainerHeader = () => {
  const { dispatchNotes: addNote, setSelectedNoteId } = useContext(NotesContext);

  return (
    <div className='container-header'>
      <IconHolder 
        icon={faBars}
        tooltip='Menu'
        onClick={() => console.log('Menu should open')}
      />
      <h3>All Notes</h3>
      <IconHolder 
        icon={faEdit}
        tooltip='New Note'
        onClick={() => {
          const note = { noteContent : {}, displayTitle: '', displayBody : '', id: uuidv4() }
          addNote({type: 'ADD_NOTE', payload: note});
          setSelectedNoteId(note.id);
        }
       }
      />
    </div>
  )
};

export default ContainerHeader;