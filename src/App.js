import 'bootstrap/dist/css/bootstrap.min.css';
import { default as React, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Spinner from './Components/Spinner/Index';
import routes from './routes';

const App = (props) => {
  const menu = routes.map((route, index) => {
    return (
      route.component && (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.title}
          render={(props) => <route.component {...props} title={route.title} />}
        />
      )
    );
  });
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return <Redirect from='*' to='/all-launches' />;
            }}
          />
          {menu}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
