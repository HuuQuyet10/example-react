import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentCon from './components/component_Con';

function App() {
  const [dataCha, setDataCha] = useState("hello");
  const checkDataCon = (e) => {
    setDataCha(e)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>{dataCha}</h1>
          <ComponentCon dataCha={dataCha} checkDataCon={checkDataCon}/>
        </div>
      </header>
    </div>
  );
}

export default App;
