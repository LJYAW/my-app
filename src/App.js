import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import  List from './list';
export default class App extends Component{
  render(){
    return (
    <Router>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/list' component={List}/>
      </Switch>
    </Router>
    )
  }
}

