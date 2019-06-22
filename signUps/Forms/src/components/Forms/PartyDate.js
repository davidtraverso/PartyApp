import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PartyDate extends Component {
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

    // Function to select the date
    
    
    render() {
        const {values, handleChange} = this.props;
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return(
            <div>
              <p>PartyDate Form</p>
                <Container maxWidth="sm">
                    <Paper>
                        <Container maxWidth="xl">
                            <h3>When is it going down?</h3>
                            <DatePicker
                            inline
                            selected={values.startDate}
                            onSelect={this.handleChange}
                            />
                            <h5>Not sure of all the details yet?<br/>
                            It's cool. We'll help you figure that out later.<br/>
                            </h5>
                            <Container maxWidth="xl">
                                <GridList cellHeight={40} cols={4}>
                                    {months.map(month => (
                                    <GridListTile key={month} cols={1}>
                                        <Button size="small" variant="outlined">{month}</Button>
                                    </GridListTile>
                                    ))}
                                </GridList>
                            </Container>

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

export default PartyDate