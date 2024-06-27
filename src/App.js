import React from 'react';
import "./App.css";
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='main'>
      <h1>CRUD Operation</h1>
      <Router>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>      
      </Router>
    </div>
  )
}

export default App