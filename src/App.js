import { Navigate, Route, Routes } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeProvider';
import NavbarProvider from './contexts/NavbarProvider';
import NotesProvider from './contexts/NotesProvider';
import PageTitle from './components/PageTitle/PageTitle';
import MenuDrawer from './components/Drawer/MenuDrawer';
import AppContainer from './components/AppContainer/Dashboard';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <NotesProvider>
      <NavbarProvider>
        <ThemeProvider>
          <div className="App">
            <PageTitle />
            <MenuDrawer />
            <Routes>
            <Route path="/dashboard" element={<AppContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </ThemeProvider>
      </NavbarProvider>
    </NotesProvider>
  );
}

export default App;
