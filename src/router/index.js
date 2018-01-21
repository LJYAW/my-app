import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import List from '../List';

export default class App extends Compontent {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/list" compontent={List}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

