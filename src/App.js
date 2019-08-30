import React from 'react';
import NavBar from './client/components/NavBar';
import {Route, Switch} from "react-router-dom";
import PaperTabs from './client/pages/PaperTabs';
import NewsList from './client/pages/NewsList';
import Loader from './client/components/Loader';
import TimeTable from './client/pages/TimeTable';
import ErrorPage from './client/pages/ErrorPage/ErrorPage';
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
