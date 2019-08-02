import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Geosuggest from 'react-geosuggest';
// Need to get the GoogleMaps API to run Geosuggest.

class PartyLocation extends Component {
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

  // Function to select the date
  // ?????

  render() {
    const { values, handleChange } = this.props;

    // ADD the GeoSuggest once app is ready for deployment/testing:
    // <Geosuggest placeholder="Austin, TX" queryDelay={10} highlightMatch="true" />

    return (
      <div>
        <p>PartyLocation Form</p>
        <Container maxWidth="md">
          <div id="paper" className="container p-5 text-center shadow-lg">
            <h1>Where are we doing this?</h1>

            <input type="text" name="Austin" placeholder="Type your city" onChange={handleChange('city')} />

            <h4>
              Is this still up in the air?
              <br />
              No worries, press continue to make your city the party HQ for now!
              <br />
            </h4>

            {/* Navigation Buttons */}
            <input
              className="w-25 btn btn-lg btn-outline-light submit-item rounded-0"
              type="button"
              label="Back"
              value="Back"
              onClick={this.back}
            />
            <input
              className="w-25 btn btn-lg btn-outline-light submit-item rounded-0"
              type="button"
              label="Continue"
              value="Continue"
              onClick={this.continue}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default PartyLocation;
