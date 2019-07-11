import React, {Component} from 'react';
import './App.css';
import NewLead from './components/NewLead';

class App extends Component {
  render() {
    return(
      <div id="main" className="text-center">
        <div id="logo" className="navbar-brand p-5">Coordin8</div>
        <NewLead />
      </div>
    );
  }
}

export default App;
