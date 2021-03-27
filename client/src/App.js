import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Music from './components/layout/Music'
import Upload from './components/layout/Upload'

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';
// redux
import {Provider} from 'react-redux';
import store from './store';

const App = () => 
  <Provider store={store}>
    <Router>
      {/*Fragments let you group a list of children without adding extra nodes to the DOM*/}
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing}/>
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path='/music' component={Music}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path='/upload' component={Upload}/>
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>

export default App;