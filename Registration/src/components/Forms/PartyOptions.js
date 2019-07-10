import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

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
        const {
          values, 
          // handleChange
        } = this.props;
        const {startDate, ...restOfState} = values;
        return(
            <div>
              <p>PartyOptions Form</p>
                <Container maxWidth="sm">
                    <div id="paper" className="container text-center">
                      <Container maxWidth="sm">
                        {Object.entries(restOfState).map( v => (
                            <p>{v[0]}: {v[1]}</p>
                        ))}
                        </Container>
                    </div>
                    <br/>
                    <input 
                      type="button"
                      value="Back"
                      onClick={this.back}
                    />
                    <input 
                      type="button"
                      value="Continue"
                      onClick={this.continue}
                    />
                </Container>
            </div>
        );
    }
}

export default PartyOptions