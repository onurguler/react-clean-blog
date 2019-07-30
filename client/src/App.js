import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Post from './components/blog/Post';
import './css/app.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/blogs/:id" component={Post} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
