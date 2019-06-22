import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

class LeadAuthentication extends Component {
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
              <p>LeadAuthentication Form</p>
                <Container maxWidth="sm">
                    <Paper>
                        <Container maxWidth="sm">
                        <h3>Alright {values.uName}, let's create your account and get the party planning started!:'</h3>
                        <p>Your email:</p>
                        <TextField
                          onChange={handleChange('uEmail')}
                          defaultValue={values.uEmail}
                          disabled="true"
                         />
                        <br/>
                        <p>Your password:</p>
                        <TextField
                          onChange={handleChange('uPassword')}
                          defaultValue={values.uPassword}
                         />
                        <br/>
                        <p>Confirm password:</p>
                        <TextField
                          defaultValue={values.uPassword}
                         />
                        <br/><br/>
                        <Button
                          variant="extended"
                          size="large"
                          color="secondary"
                          onClick={this.continue}
                        >
                        CREATE YOUR PARTY!
                        </Button>
                        <br/>
                        <br/>
                      </Container>  
                    </Paper>
                    <br/>
                    <Button 
                      variant="contained"
                      color="default"
                      label="Back"
                      primary={true}
                      onClick={this.back}
                    >
                        Back
                    </Button>
                </Container>
            </div>
        );
    }
}

export default LeadAuthentication