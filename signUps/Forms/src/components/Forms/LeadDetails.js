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
                        <TextField
                          onChange={handleChange('uName')}
                          defaultValue={values.uName}
                         />
                        <br/>
                        <p>Your email:</p>
                        <TextField
                          onChange={handleChange('uEmail')}
                          defaultValue={values.uEmail}
                         />
                        <br/>
                        <p>Your phone:</p>
                        <TextField
                          onChange={handleChange('uPhone')}
                          defaultValue={values.uPhone}
                         />
                        <br/>
                        <p>Your city of residence:</p>
                        <Geosuggest />
                        
                        <p>How do you know {values.bride}:</p>
                        <TextField
                          fullWidth="true"
                          onChange={handleChange('uBio')}
                          defaultValue={values.uBio}
                         />
                        <br/>
                        <br/>
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

export default LeadDetails


