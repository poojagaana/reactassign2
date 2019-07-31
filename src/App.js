import React from 'react';
import Header from'../src/Header/Header.react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation.react';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
