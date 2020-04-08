import React from 'react';
import logo from './logo.svg';
import { Image } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>My First React Page</h1>
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
        <form class="ui form">
  <div class="field">
    <label>First Name</label>
    <input placeholder="First Name" />
  </div>
  <div class="field">
    <label>Last Name</label>
    <input placeholder="Last Name" />
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" class="hidden" readonly="" tabindex="0" />
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button type="submit" class="ui button">Submit</button>
</form>
      </header>
    </div>
  );
}

export default App;
