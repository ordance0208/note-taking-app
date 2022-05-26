import { Navigate, Route, Routes } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeProvider';
import NavbarProvider from './contexts/NavbarProvider';
import NotesProvider from './contexts/NotesProvider';
import ResponsiveProvider from './contexts/ResponsiveProvider';
import PageTitle from './components/PageTitle/PageTitle';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <NotesProvider>
      <NavbarProvider>
        <ThemeProvider>
          <ResponsiveProvider>
            <div className="App">
              <PageTitle />
              <Navbar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>
            </div>
          </ResponsiveProvider>
        </ThemeProvider>
      </NavbarProvider>
    </NotesProvider>
  );
}

export default App;
