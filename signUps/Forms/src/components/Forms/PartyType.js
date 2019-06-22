import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {LocalBar} from '@material-ui/icons';

class PartyType extends Component {
    continue = event => {
        event.preventDefault()
        this.props.nextStep();
    }
    
    
    
    render() {
        const {values, handleChange} = this.props;

        return(
            <div>
              <p>PartyType Form</p>
                <Container maxWidth="sm">
                    <Paper>
                        <h3>What type of party are you planning?</h3>

                    <Button variant="contained" color="default">
                        Bachelorette
                        <LocalBar />
                    </Button>
                    <br/>
                    <Button variant="contained" color="default">
                        Bachelor
                        <LocalBar />
                    </Button>
                    <br/>
                    <Button variant="contained" color="default">
                        Friends
                        <LocalBar />
                    </Button>
                    </Paper>
                    <br/>
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

export default PartyType