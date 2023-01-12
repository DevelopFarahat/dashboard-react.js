
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Sidebar from "./components/sidebar/sidebar"
import Header from "./components/header/header";
import Booking from './components/booking/booking';
import {useState} from "react";
import Backdrop from "./components/backdropModel/backdrop";
import { Routes, Route, Navigate} from "react-router-dom";
function App() {
  const [isSidebarVisible,setIsSidebarVisible] = useState(false);
  return (

    <div className="App">
      <Sidebar setIsSidebarVisible={setIsSidebarVisible} isSidebarVisible={isSidebarVisible}/>
      <Backdrop isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
      <div className="main-container">
      <Header setIsSidebarVisible={setIsSidebarVisible} isSidebarVisible={isSidebarVisible}/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='booking' element={<Booking/>}/>
      <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
      </div>
    </div>
 
  );
}

export default App;
