import React from 'react';
import './App.css';
import logo from './assets/20191124-logo-ink-branco.svg';
import Routes from './routes';

function App() {
  return (
    
    <div className="container">

      <img src={logo} alt="AirTattoO" />  
      <div className="content">    
        <Routes />
      </div>  

      
    </div>
  );
}

export default App;
