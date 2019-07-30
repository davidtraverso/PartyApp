import React, { Component }  from 'react';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import MainPage from "./pages";
import SignUp from "./pages/signup";
import Dashboard from "./pages/dash";

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signup" component={SignUp} />  
          <Route exact path="/dash" component={Dashboard} /> 
        </Switch>   
      </Router>
    )
  }
 }


export default App;
