import React from 'react';
import NavBar from './client/components/NavBar';
import {Route, Switch} from "react-router-dom";
import Paper from './client/pages/Paper';
import NewsList from './client/pages/NewsList';
import Loader from './client/components/Loader';
import TimeTable from './client/pages/TimeTable';
import ErrorPage from './client/pages/ErrorPage/ErrorPage';
import './App.css'
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
                      <Paper/>                    
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
          <Route
              path="*"
              render={() =>
                  <div>
                      <ErrorPage />
                  </div>
              }
          /> 
        </Switch>
    </>
  );
}

export default App;
