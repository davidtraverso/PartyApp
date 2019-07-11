// Import the needed files from react
import React, { Component } from 'react';

// Create a new component called "About"
class Account extends Component {
  // Let's give this component a "State"
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: 'Edit',
      canEdit: true
    };
  }

  toggleShowPassword = () => {
    var passwordInputbox = this.refs.password;
    if (passwordInputbox.type === 'password') {
      passwordInputbox.type = false;
    } else {
      passwordInputbox.type = 'password';
    }
  };

  // Here's the fuction that simply changes the name of the button:
  toggleButton = e => {
    // Let's check the value of the button
    if (this.state.buttonValue == 'Edit') {
      // If it already is 'Edit' let's change it
      this.setState({
        buttonValue: 'Submit',
        canEdit: false
      });
    } else {
      // If it wasn't 'Edit', let's assume it was 'Submit'...
      this.setState({
        buttonValue: 'Edit',
        canEdit: true
      });
    }
  };

  render() {
    // Inside render but above return is where you access props passed down from the parent component, create variables to use inside the return, and basically do most of the "this is JavaScript that will design the page" stuffs.

    return (
      <div>
        <div className="container" width="50">
          <div id="paper" className="container p-5 text-center shadow-lg">
            <h1>Account Settings</h1>

            <div className="p-5">
              <form>
                <label>
                  Email:
                  <input type="text" name="email" disabled={this.state.canEdit} />
                </label>
                <label>Password:</label>
                <input type="text" ref="password" name="password" disabled={this.state.canEdit} />
                <label>
                  Show Password :
                  <input type="checkbox" onClick={this.toggleShowPassword} disabled={this.state.canEdit} />
                </label>
                <label>
                  Name:
                  <input type="text" name="name" disabled={this.state.canEdit} />
                </label>
                <label>
                  Phone:
                  <input type="text" name="phoneNumber" disabled={this.state.canEdit} />
                </label>
                <label>
                  City, State:
                  <input type="text" name="location" disabled={this.state.canEdit} />
                </label>
                <label>
                  Facebook:
                  <input type="text" name="socialMedia" disabled={this.state.canEdit} />
                </label>
                <label>
                  Instagram:
                  <input type="text" name="socialMedia" disabled={this.state.canEdit} />
                </label>
                <br />
                Preferred Contact Method:
                <input type="radio" name="contactPref" value="text" disabled={this.state.canEdit} /> Text
                <input type="radio" name="contactPref" value="email" disabled={this.state.canEdit} /> Email
                <br />
                <input type="button" value={this.state.buttonValue} onClick={this.toggleButton} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
