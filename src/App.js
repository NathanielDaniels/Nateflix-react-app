import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup} from './pages'
import { IsUserRedirect } from './helpers/routes'

function App() {
  const user = {};
  return (
    <Router>
        <Switch>
            <IsUserRedirect 
              user={user} 
              loggedInPath={ROUTES.BROWSE} 
              path={ROUTES.SIGN_IN}
              exact
              >
              <Signin/>
            </IsUserRedirect>
            <IsUserRedirect 
              user={user} 
              loggedInPath={ROUTES.BROWSE} 
              path={ROUTES.SIGN_UP}
              exact
              >
              <Signup/>
            </IsUserRedirect>
            {/* <Route exact path={ROUTES.SIGN_IN}>
              <Signin/>
            </Route> */}
            {/* <Route path={ROUTES.SIGN_UP}>
                <Signup/>
            </Route> */}
            <Route path={ROUTES.BROWSE}>
                <Browse/>
            </Route>
            <Route path={ROUTES.HOME}>
                <Home/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
