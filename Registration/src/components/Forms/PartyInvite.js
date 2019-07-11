import React, {Component} from 'react';

class PartyInvite extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        emails: ['1', '2'],
        SMS: []
      }

      // this.handleChange = this.handleChange.bind(this);
      // this.addEmail = this.addEmail.bind(this);
      this.addSMS = this.addSMS.bind(this);
    }
    // Function to handle phone/email field change and set in state
    handleChange = event => {
        this.setState({
            email: event.target.value
        })
    }


    // Function to add each email to the array of emails.
    addEmail = e => {
      this.setState({
          emails: this.state.emails.concat(this.state.email)
      })
      console.log(this.state.emails)
      console.log(e.target)
    };

    // Function to add each phone number to the array of SMS messages to be sent.
    addSMS(p) {
        this.setState({
            SMS: this.SMS.push(p)
        })
    }

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
      const numberOfRows = [1, 2, 3, 4]
      // var currentEmail = this.state.email;
      var emailArray = [...this.state.emails];

      return (
        <div>
          <h3>State test:</h3>
          <h3>{emailArray}</h3>

          <h1>Ready to invite your friends?</h1>

{/* Link this line to uncollapse the guest invite forms */}      
            <input 
                type="button"
                value="Let's do it!"
            />

{/* Link this line to route straight to the landing page */}
            <p>I'm not ready yet. Let's go to the party dashboard!</p>

{/* 
    Collapsable text blast and email info 
    -- Need to add collapsability in styles (Jason or Lamar) --
*/}
            {numberOfRows.map(entry => (
                <div key={entry}>
                <input key={entry*7} type="tel" name="SMS" placeholder=""/>
                <input key={entry*8} type="email" name="email" placeholder="" onChange={this.handleChange}/>
                <input key={entry*9} type="button" value="Add to Party" onClick={this.addEmail}/>
                </div>
            ))}

            <input 
              type="button"
              value="Back"
              onClick={this.back}
            />
      </div>
    );
  }
}


export default PartyInvite