import React, {Component} from 'react';
import './forms/Forms.css';
import {Container} from '@material-ui/core';
import NewLead from './forms/components/NewLead';
import Footer from './dashboard/components/FooterComponent';

class SignUp extends Component {
  render() {
    return(
      <div>
        <div id="page">
          <div id="main" className="text-center">
            <div id="logo" className="navbar-brand p-5">Coordin8</div>
             <Container maxWidth="lg">
                <NewLead />
              </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp ;