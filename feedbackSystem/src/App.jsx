import React from 'react';
import Website from './components/Website/Website';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import FormBuilder from './components/FormBuilder';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <FormBuilder />
        </div>
        <div>
          <Routes>
            {/* <Route path='/' element={<Website />} /> */}
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
