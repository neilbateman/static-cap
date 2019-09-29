import React from 'react';
import Nav from './Components/Nav';
import StickyFooter from './Components/StickyFooter';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

const App = () => (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes/>
      <StickyFooter/>
    </BrowserRouter>
    </div>
  );

export default App;
