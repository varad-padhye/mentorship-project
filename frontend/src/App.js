import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/signup';
import Navbar from './pages/Navbar';
import Dashboard from './pages/Dashboard';
import Stats from './pages/stats';
import ProfileSettings from './pages/Profile';
import AddTransaction from './pages/addTransaction';
import Varad from './pages/add-account';

function App() {
  return (
    
       
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/add-account'element={<Varad/>}></Route>
          
          <Route element ={<Navbar/>}>
          <Route path ="/Dashboard" element={<Dashboard/>}/>
          <Route path ="/stats" element={<Stats/>}/>
          <Route path ="/Profile" element={<ProfileSettings/>}/>
          </Route>
        </Routes>
        <div className="dashboard">
          <Routes>
          <Route path ="/Dashboard" element={<Dashboard/>}/>
          <Route path ="/Profile" element={<ProfileSettings/>}/>
          <Route path ="/stats" element={<Stats/>}/>
          <Route path="/addTransaction" element={<AddTransaction/>}></Route>
          

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


