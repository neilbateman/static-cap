import React from 'react';
import Nav from './Components/Nav';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

const App = () => (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes/>
    </BrowserRouter>
    </div>
  );

export default App;
