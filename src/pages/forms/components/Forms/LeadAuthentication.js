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
    data.month = this.props.values.startMonth || this.props.values.month; // determines month based on calendar picker OR month button selection

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
  };

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
        <Container maxWidth="md">
          <div id="paper" className="container p-5 text-center shadow-lg">
            <h1>{values.uName}, let's create your account and start party planning!</h1>

            <label for="email" class="control-label">
              <h5>Your email:</h5>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange('uEmail')}
              value={values.uEmail}
              placeholder={values.uEmail}
              disabled={true}
              className="d-block w-100"
            />

            <label class="control-label">
              <h5>Your password:</h5>
            </label>
            <input
              type="password"
              onChange={handleChange('uPassword')}
              defaultValue={values.uPassword}
              className="d-block w-100"
            />

            <label class="control-label">
              <h5>Confirm password:</h5>
            </label>
            <input type="password" defaultValue={values.uPassword} className="d-block w-100" />

            {/* POST request */}
            <input
              className="w-50 btn btn-lg btn-outline-light submit-item rounded-0"
              type="button"
              value="Create your Party!"
              onClick={this.createParty}
            />

            <br />
            {/* Navigation Buttons */}
            <input
              className="w-25 btn btn-lg btn-outline-light submit-item rounded-0"
              type="button"
              label="Back"
              value="Back"
              onClick={this.back}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default LeadAuthentication;
