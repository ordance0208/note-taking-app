import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../AppContainer/Dashboard";
import MenuDrawer from "../Drawer/MenuDrawer";
import PageTitle from "../PageTitle/PageTitle";

const NoteifyApp = () => {
  return (
    <div className="noteify-app">
      <PageTitle />
      <MenuDrawer />
      <Routes>
        <Route path='/' element={<Navigate to='/dashborad' replace/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/about' element={<Navigate to='/dashborad' replace/>}/>
      </Routes>
    </div>
  );
};

export default NoteifyApp;