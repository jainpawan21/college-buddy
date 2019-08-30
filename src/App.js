import React from 'react';
import NavBar from './client/components/NavBar';
import {Route, Switch} from "react-router-dom";
import Paper from './client/pages/Paper';
import Notes from './client/pages/Notes';
import NewsList from './client/pages/NewsList';
import Loader from './client/components/Loader';
import TimeTable from './client/pages/TimeTable';
import ErrorPage from './client/pages/ErrorPage/ErrorPage';
import PaperSems from './client/pages/PaperSems';
import FinalPaper from './client/pages/FinalPaper';
import News from './client/pages/News';
import './App.css'
function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route
              exact
              path="/"
              render={(props) =>
                  <NewsList {...props}/>
              }
          />  
          <Route
              path="/papers"
              exact
              render={(props) =>
                  <div>
                      <Paper {...props}/>                    
                  </div>
              }
          />
          <Route
              exact
              path={"/papers/:branch"}
              render={(props) =>
                  <div>
                      <PaperSems {...props}/>                    
                  </div>
              }
          />
          <Route
              path="/papers/:branch/:sem"
              exact
              render={(props) =>
                  <div>
                      <FinalPaper {...props}/>                    
                  </div>
              }
          />
          <Route
              path="/notes"
              render={(props) =>
                  <div>
                      <Notes {...props}/>
                  </div>
              }
          />  
          <Route
              path="/timetable"
              render={(props) =>
                  <div>
                      <TimeTable {...props}/>
                  </div>
              }
          />
          <Route
              path="/discussion"
              render={(props) =>
                  <div>
                      <Loader {...props}/>
                  </div>
              }
          /> 
            
          <Route
              path="*"
              render={(props) =>
                  <div>
                      <ErrorPage {...props}/>
                  </div>
              }
          /> 
        </Switch>
    </>
  );
}

export default App;
