import React from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const dispatch = useDispatch(); 

  React.useEffect(() => {
    dispatch({ type: 'SHARED_WORDER_INIT' })
  },[dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          fontSize: '32px',
          color: 'rgb(112, 76, 182)',
          fontWeight: "bold",
          }}>redux-sharedworker-demo</div>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="/" style={{ color: 'blue' }}>
            Open new tabs to test <b>redux-sharedworker</b>
          </a>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
