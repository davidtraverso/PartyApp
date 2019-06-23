import React, {Component} from 'react';
import {Container, Paper} from '@material-ui/core';

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

    personType(input) {
        var person = 'david'
        
        if (input == 'bachelorette'){
            return person = 'bride'
        } else if (input == 'bachelor'){
            return person = 'groom'
        } else if (input == 'joint'){
            return person = 'person we are celebrating'
        } else {
            return person = 'NoPartyType'
        }
    };
    
    render() {
        const {values, handleChange} = this.props;


        return(
            <div>
              <p>PartyBride Form</p>
              <p>The bride state is: {values.bride}</p>
                <Container maxWidth="sm">
                    <Paper>
                        <h3>What is the name of the {this.personType(values.type)}?</h3>
                        <input
                          type="text"
                          onChange={handleChange('bride')}
                          defaultValue={values.bride}
                         />
                        <br/>
                        <h5>We're on a first name basis here.</h5>
                    </Paper>
            
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

export default PartyBride