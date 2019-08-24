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
import NavBar from './client/components/NavBar';
import {Route, Switch} from "react-router-dom";
import PaperTabs from './client/pages/PaperTabs';
import NewsList from './client/pages/NewsList';
import Loader from './client/components/Loader';
import TimeTable from './client/pages/TimeTable';
function App() {
  return (
    <>
      <NavBar />
        <Switch>
            <Route
                exact
                path="/"
                render={() =>
                    <NewsList />
                }
            />  
            <Route
                path="/papers"
                exac
                render={() =>
                    <div>
                        <PaperTabs />                    
                    </div>
                }
            />
            <Route
                path="/discussion"
                render={() =>
                    <div>
                        <Loader />
                    </div>
                }
            /> 
            <Route
                path="/timetable"
                render={() =>
                    <div>
                        <TimeTable />
                    </div>
                }
            />   
           
        </Switch>
    </>
  );
}

export default App;
>>>>>>> upstream/master
