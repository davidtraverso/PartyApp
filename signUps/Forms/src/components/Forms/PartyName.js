import React, {Component} from 'react';
import {Container} from '@material-ui/core';

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
        const {values, handleChange, handleButton} = this.props;
        
        


        return(
            <div>
              <p>PartyBride Form</p>
              <p>Current state is {values.name}</p>
                <Container maxWidth="sm">
                  <div id="paper" className="container text-center">
                        <h3>What do you want to call your party?</h3>
                        <input
                          type="text"
                          onChange={handleChange('name')}
                          defaultValue={values.name}
                         />
                        <br/>
                        <h5>Hey no pressure!<br/>
                        Here are some suggestions to choose from:</h5>
                        <Container>
                          <input 
                           type="button"
                           value="SuggestionTest"
                           name="Suggestion1"
                           onClick={handleButton('name')}
                          />
                          <input 
                           type="button"
                           value="SuggestionTest"
                           name="Suggestion2"
                           onClick={handleButton('name')}
                          />
                          <input 
                           type="button"
                           value="SuggestionTest"
                           name="Suggestion3"
                           onClick={handleButton('name')}
                          />
                        </Container>
                    </div>
                    <br/>
                    
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

export default PartyName