import React, {Component} from 'react';
import './forms/Forms.css';
import NewLead from './forms/components/NewLead';

class SignUp extends Component {
  render() {
    return(
      <div id="page">
        <div id="main" className="text-center">
          <div id="logo" className="navbar-brand p-5">Coordin8</div>
          <NewLead />
        </div>
      </div>
    );
  }
}

export default SignUp ;