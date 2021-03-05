import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

import './App.css';
// import { useAuth0 } from './contexts/auth0-context';

const App = () => {
  // const { getToken } = useAuth0();

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // const getUserData = async () => {
  //   const token = await getToken();

  //   const response = await fetch(`http://example.com/api`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });

  //   const data = await response.json();

  //   console.log(data);
  // };

  return (
    <Router>
      <div className='app'>
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <Route path='/' exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
