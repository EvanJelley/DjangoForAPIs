import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';


function App() {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:8000/api/')
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>Todo List</h1>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
