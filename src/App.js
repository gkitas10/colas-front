import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeInterface from './components/EmployeeInterface';
import EmployeeComputer from './components/EmployeeComputer';
import PublicScreen from './components/PublicScreen';
import NewTicket from './components/NewTicket';
import Tutorial from './components/Tutorial';

function App() {
  return (
    <Router>
    <div className="App">
          <Routes>
              <Route element={<EmployeeInterface/>} path='/'/>
              <Route element={<EmployeeComputer/>} path='/employee-computer'/>
              <Route element={<PublicScreen/>} path="/public-screen"/>
              <Route element={<NewTicket/>} path="/create-ticket"/>
              <Route element={<Tutorial/>} path="/tutorial"/>
          </Routes>
    </div>
    </Router>
  );
}

export default App;
