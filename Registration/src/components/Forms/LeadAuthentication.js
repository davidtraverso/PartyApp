import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

class LeadAuthentication extends Component {
  // Function to send POST request - (testing: logs state object to console onClick)
  samplePOST = event => {
    event.preventDefault();
    console.log(JSON.stringify(this.props.values));
  };

  // POST request to API
  createParty = event => {
    var url = 'http://localhost:3005/create';
    var data = this.props.values; // state is assigned to 'data' variable

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  // Function to go to next form
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  // Function to go back to previous form
  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <p>LeadAuthentication Form</p>
        <Container maxWidth="sm">
          <div id="paper" className="container text-center">
            <Container maxWidth="sm">
              <h3>
                Alright {values.uName}, let's create your account and get the
                party planning started!
              </h3>
              <p>Your email:</p>
              <input
                type="email"
                onChange={handleChange('uEmail')}
                value={values.uEmail}
                placeholder={values.uEmail}
                disabled={true}
              />
              <br />
              <p>Your password:</p>
              <input
                type="password"
                onChange={handleChange('uPassword')}
                defaultValue={values.uPassword}
              />
              <br />
              <p>Confirm password:</p>
              <input type="password" defaultValue={values.uPassword} />
              <br />
              <br />
              <input
                type="button"
                value="Create your Party!"
                onClick={this.createParty}
              />
              <br />
              <br />
            </Container>
          </div>
          <br />
          {/* Navigation Buttons */}
          <input type="button" label="Back" value="Back" onClick={this.back} />
        </Container>
      </div>
    );
  }
}

export default LeadAuthentication;
