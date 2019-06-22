import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

class PartyOptions extends Component {
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
        const { type, name, bride, startDate, month, city, state, uName, uEmail, uPhone, uCity, uState, uBio, uPassword } = values
        return(
            <div>
              <p>PartyOptions Form</p>
                <Container maxWidth="sm">
                    <Paper>
                      <Container maxWidth="sm">
                        <h3>Confirm React State is correct:</h3>
                        <p>Party type is {type}</p>
                        <p>Party name is {name}</p>
                        <p>Bride/Bachelor: {bride}</p>
                        <p>uName: {uName}</p>
                        <p>uEmail: {uEmail}</p>
                        <p>uPassword: {uPassword}</p>
                        <p>uBio: {uBio}</p>
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
                </Container>
            </div>
        );
    }
}

export default PartyOptions