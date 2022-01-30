import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Component/Test';

function App() {
  return (
    <>
      <ul className="animals">
        <li>Cat</li>
        <li>Whale</li>
        <li>Lion</li>
        <li>elephant</li>
        <li>Rhino</li>
      </ul>
      <Test/>
    </>
  );
}

export default App;
