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
        const {startDate, ...restOfState} = values;
        return(
            <div>
              <p>PartyOptions Form</p>
                <Container maxWidth="sm">
                    <Paper>
                      <Container maxWidth="sm">
                        {Object.entries(restOfState).map( v => (
                            <p>{v[0]}: {v[1]}</p>
                        ))}
                        </Container>
                    </Paper>
                    <br/>
                    <input 
                      type="button"
                      value="Back"
                      onClick={this.back}
                    />
                </Container>
            </div>
        );
    }
}

export default PartyOptions