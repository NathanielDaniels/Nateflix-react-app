import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup} from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

function App() {
  // * Get user from useAuthListener
  const { user, demo } = useAuthListener();

  // console.log(Signin())

  // console.log("app-user:", user)

  return (
    <Router>
        <Switch>
            <IsUserRedirect 
              user={user} 
              loggedInPath={ROUTES.BROWSE} 
              path={ROUTES.SIGN_IN}
              >
              <Signin/>
            </IsUserRedirect>
            <IsUserRedirect 
              user={user} 
              loggedInPath={ROUTES.BROWSE} 
              path={ROUTES.SIGN_UP}
              >
              <Signup/>
            </IsUserRedirect>
            <ProtectedRoute
              user={user}
              demo={demo}
              path={ROUTES.BROWSE}

              >
              <Browse/>
            </ProtectedRoute>
            <IsUserRedirect 
              user={user} 
              loggedInPath={ROUTES.BROWSE} 
              path={ROUTES.HOME}
              exact
              >
              <Home/>
            </IsUserRedirect>
        </Switch>
    </Router>
  );
}

export default App;
