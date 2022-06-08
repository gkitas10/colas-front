import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeInterface from './components/EmployeeInterface';
import EmployeeComputer from './components/EmployeeComputer';


function App() {
  return (
    <Router>
    <div className="App">
          <Routes>
               <Route element={<EmployeeInterface/>} path='/'/>
              <Route element={<EmployeeComputer/>} path='/employee-computer'/>
          </Routes>
    </div>
    </Router>
  );
}

export default App;
