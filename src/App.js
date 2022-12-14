import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Formdev from './components/formdev';
import { emitter } from './components/emitter';

function App({}) {
  useEffect(() => {
    emitter.on("test2", (data) => {
      fireCha(data);
    }, [])
  }, []);
  const fireCha = () => {
    emitter.emit("test", "data011111111111111")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button
            onClick={() => fireCha()}
          >
            onclick Con
          </button>
        </div>
        <div>
          <Formdev/>
        </div>
      </header>
    </div>
  );
}

export default App;
