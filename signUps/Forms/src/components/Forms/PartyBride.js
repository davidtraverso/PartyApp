import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class PartyBride extends Component {
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
              <p>PartyBride Form</p>
                <Container maxWidth="sm">
                    <Paper>
                        <h3>What is the name of the bride?</h3>
                        <TextField
                          onChange={handleChange('bride')}
                          defaultValue={values.bride}
                         />
                        <br/>
                        <h5>We're on a first name basis here.</h5>
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

export default PartyBride