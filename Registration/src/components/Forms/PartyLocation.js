import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Geosuggest from 'react-geosuggest';
// Need to get the GoogleMaps API to run Geosuggest.


class PartyLocation extends Component {
    // Function to go to next form
    continue = event => {
        event.preventDefault()
        this.props.nextStep();
    }
    // Function to go back to previous form
    back = event => {
        event.preventDefault()
        this.props.prevStep();
    }

    // Function to select the date
    // ?????
    
    
    render() {
        // const {
        //     // values, 
        //     // handleChange
        // } = this.props;

        return(
            <div>
              <p>PartyLocation Form</p>
                <Container maxWidth="sm">
                    <div id="paper" className="container text-center">
                        <Container maxWidth="xl">
                            <h3>Where are we doing this?</h3>
                            <Geosuggest 
                              placeholder="Austin, TX"
                              queryDelay={10}
                              highlightMatch="true"
                            />


                            <h5>Is that still up in the air?<br/>
                            Let's make YOUR CITY the party HQ for now!<br/>
                            </h5>
                        </Container>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <input
                      type="button"
                      label="Back"
                      value="Back"
                      onClick={this.back}
                    />
                    <input
                      type="button"
                      label="Continue"
                      value="Continue"
                      onClick={this.continue}
                    />
                </Container>
            </div>
        );
    }
}

export default PartyLocation