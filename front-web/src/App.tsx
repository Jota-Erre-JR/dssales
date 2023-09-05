import React from 'react';
import './App.css';
import Header from './components/header';
import Filter from './components/filter';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
}

export default App;
