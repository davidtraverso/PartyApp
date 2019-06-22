import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
        const {values, handleChange} = this.props;

        return(
            <div>
              <p>PartyLocation Form</p>
                <Container maxWidth="sm">
                    <Paper>
                        <Container maxWidth="xl">
                            <h3>Where are we doing this?</h3>
                            <Geosuggest />


                            <h5>Is that still up in the air?<br/>
                            Let's make YOUR CITY the party HQ for now!<br/>
                            </h5>
                        </Container>
                    </Paper>
                    <br/>
                    <Button 
                      variant="contained"
                      color="default"
                      label="Continue"
                      primary={true}
                      onClick={this.back}
                    >
                        Back
                    </Button>
                    <Button 
                      variant="contained"
                      color="primary"
                      label="Continue"
                      primary={true}
                      onClick={this.continue}
                    >
                        Continue
                    </Button>
                </Container>
            </div>
        );
    }
}

export default PartyLocation