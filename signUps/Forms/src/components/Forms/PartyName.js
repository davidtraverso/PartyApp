import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class PartyName extends Component {
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
                        <h3>What do you want to call your party?</h3>
                        <TextField
                          onChange={handleChange('name')}
                          defaultValue={values.name}
                         />
                        <br/>
                        <h5>Hey no pressure!<br/>
                        Here are some suggestions to choose from:</h5>
                        <Container>
                          <Button 
                            variant="contained"
                            color="default"
                            label="Suggestion1"
                          >Suggestion 1</Button>
                          <Button 
                            variant="contained"
                            color="default"
                            label="Suggestion1"
                          >Suggestion 2</Button>
                          <Button 
                            variant="contained"
                            color="default"
                            label="Suggestion1"
                          >Suggestion 3</Button>
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

export default PartyName