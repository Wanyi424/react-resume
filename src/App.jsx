import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PrintButton from './components/PrintButton';

function App() {
  return (
    <>
      <PrintButton />
      <div className="resume-container">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
