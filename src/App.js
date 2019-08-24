<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
=======
import React from 'react';
import NavBar from './client/components/NavBar'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Paper from './client/pages/Paper'


function App() {
  return (
    <>
      <NavBar />
        <Switch>
            <Route
                path="/"
                render={() =>
                    <Paper />
                }
            />  
            <Route
                path="/"
                exact
                render={() =>
                    <div>
                        root
                    </div>
                }
            />
           
        </Switch>
    </>
  );
}

export default App;
>>>>>>> upstream/master
