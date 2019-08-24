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
