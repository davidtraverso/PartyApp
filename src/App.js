import React, { Component }  from 'react';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import MainPage from "./pages";
import SignUp from "./pages/signup";

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signup" component={SignUp} />  
        </Switch>   
      </Router>
    )
  }
 }


export default App;
