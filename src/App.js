import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Home, Browse, Signin, Signup} from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

function App() {
  const { user } = useAuthListener;
  console.log("user:", user)
  // const user = { name: "Billy" };
  
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
              path={ROUTES.BROWSE}
              >
              <Browse/>
            </ProtectedRoute>
            <ProtectedRoute 
              user={user} 
              loggedInPath={ROUTES.BROWSE} 
              path={ROUTES.HOME}
              exact
              >
              <Home/>
            </ProtectedRoute>
            {/* <Route exact path={ROUTES.SIGN_IN}>
              <Signin/>
            </Route> */}
            {/* <Route path={ROUTES.SIGN_UP}>
                <Signup/>
            </Route> */}
            {/* <Route path={ROUTES.BROWSE}>
                <Browse/>
            </Route> */}
            {/* <Route path={ROUTES.HOME}>
                <Home/>
            </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
