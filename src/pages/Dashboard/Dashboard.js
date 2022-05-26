import { useContext } from 'react';
import { ResponsiveContext } from '../../contexts/ResponsiveProvider';
import NotesContainer from '../../components/NoteContainer/NotesContainer';
import NoteEditorContainer from '../../components/NoteEditorContainer/NoteEditorContainer';
import './Dashboard.css';

const Dashboard = () => {
  const { noteContainerActive } = useContext(ResponsiveContext);

  // Calculates the style (these styles are used only for mobile)
  const styles = noteContainerActive
    ? 'dashboard notes-active'
    : 'dashboard editor-active';

  return (
    <div className={styles}>
      <NotesContainer />
      <NoteEditorContainer />
    </div>
  );
};

export default Dashboard;
