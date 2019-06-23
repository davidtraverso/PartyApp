import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Geosuggest from 'react-geosuggest';

class LeadDetails extends Component {
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
    
    render() {
        const {values, handleChange} = this.props;

        return(
            <div>
              <p>LeadDetails Form</p>
                <Container maxWidth="sm">
                    <Paper>
                        <Container maxWidth="sm">
                        <h3>Tell us about yourself:</h3>
                        <p>Your name:</p>
                        <input type="text"
                          onChange={handleChange('uName')}
                          defaultValue={values.uName}
                         />
                        <br/>
                        <p>Your email:</p>
                        <input type="text"
                          onChange={handleChange('uEmail')}
                          defaultValue={values.uEmail}
                         />
                        <br/>
                        <p>Your phone:</p>
                        <input type="text"
                          onChange={handleChange('uPhone')}
                          defaultValue={values.uPhone}
                         />
                        <br/>
                        <p>Your city of residence:</p>
                        <Geosuggest />
                        
                        <p>How do you know {values.bride}:</p>
                        <input type="text"
                          onChange={handleChange('uBio')}
                          defaultValue={values.uBio}
                         />
                        <br/>
                        <br/>
                      </Container>  
                    </Paper>
                    <br/>
                    
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

export default LeadDetails


