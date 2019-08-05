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
        
        // write the code here


        return(
            <div>
            
            
                  <div id="paper" className="container p-5 text-center shadow-lg"> 
                        <h1>What do you want to call your party?</h1>
                        <input
                          type="text"
                          onChange={handleChange('name')}
                          defaultValue={values.name}
                          size="50"
                         />
                        <br/>
                        <p>Hey no pressure! Here are some suggestions to choose from:</p>

                        <Container>
                          <input className="btn btn-outline-light input-item pink"
                           type="button" 
                           value="Suggestion Test"
                           name="La soirée"
                           onClick={handleButton('name')}
                          />
                          <input className="btn btn-outline-light input-item blue"
                           type="button"
                           value="Suggestion Test"
                           name="Tiempo de fiesta"
                           onClick={handleButton('name')}
                          />
                          <input className="btn btn-outline-light input-item neutral"
                           type="button"
                           value="Suggestion Test"
                           name="Extravaganza Spectacular!"
                           onClick={handleButton('name')}
                          />
                        </Container>

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
                    <br/>
                    
                    
              
            </div>
        );
    }
}

export default PartyName