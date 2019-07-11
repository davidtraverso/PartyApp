import React, {Component} from 'react';
import {Container} from '@material-ui/core';

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
        // var person = 'david'
        var person

        if (input === 'bachelorette'){
            person = 'bride'
        } else if (input === 'bachelor'){
            person = 'groom'
        } else if (input === 'joint'){
            person = 'person we are celebrating'
        } else {
            person = 'NoPartyType'
        }
        return person
    };
    
    render() {
        const {values, handleChange} = this.props;


        return(
            <div>
              <p>PartyBride Form - The bride state is: {values.bride}</p>
              <Container maxWidth="md">
                  <div id="paper" className="container p-5 text-center shadow-lg">  
                        <h1>What is the name of the {this.personType(values.type)}?</h1>
                        <input
                          type="text"
                          onChange={handleChange('bride')}
                          defaultValue={values.bride}
                          size="50"
                         />
                        <br/>
                        <p>We're on a first name basis here.</p>


                        {/* Navigation Buttons */}
                            <input className="w-25 btn btn-lg btn-outline-light submit-item rounded-0"
                            type="button"
                            label="Back"
                            value="Back"
                            onClick={this.back}
                            />
                            <input className="w-25 btn btn-lg btn-outline-light submit-item rounded-0"
                            type="button"
                            label="Continue"
                            value="Continue"
                            onClick={this.continue}
                            />
                    </div>
            
                    
                </Container>
            </div>
        );
    }
}

export default PartyBride