import React, {Component} from 'react';
import {Container, Paper} from '@material-ui/core';

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
              <p>PartyType current state is {values.type}</p>

                <Container maxWidth="sm">
                    <Paper>
                      <h3>What type of party are you planning?</h3>
                    <input 
                      type="button"
                      value="bachelorette"
                      onClick={handleChange('type')}
                    />
                    <input 
                      type="button"
                      value="bachelor"
                      onClick={handleChange('type')}
                    />
                    <input 
                      type="button"
                      value="joint"
                      onClick={handleChange('type')}
                    />
                    </Paper>
                    <br/>

                    {/* Navigation Buttons */}
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

export default PartyType