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
          <div className="module col-sm-12 mb-5 p-5 shadow">
            <h3>Account Settings</h3>

            <div className="p-5">
              <form>
                <h5>User Login Information</h5>


                <div className="form-group row ">
                  <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                      <input type="text" name="email" disabled={this.state.canEdit} className="form-control"/>
                    </div>
                </div>


                <div className="form-group row  ">
                  <label className="col-sm-2 col-form-label">Password:</label>
                  <div className="col-sm-6">
                     <input type="password" ref="password" name="password" disabled={this.state.canEdit} className="form-control"/>
                     <label className="col-form-label sr-only">Password Toggle :</label>
                      <input type="checkbox" onClick={this.toggleShowPassword} disabled={this.state.canEdit} /> Show Password
                    
                  </div>
                  
                </div>

                <hr />

                <div className="form-group row  ">
                  <label className="col-sm-2 col-form-label">
                    Name:</label>
                    <div className="col-sm-6">
                      <input type="text" name="name" disabled={this.state.canEdit} className="form-control"/>
                      </div>
                </div>

                <div className="form-group row  ">
                  <label className="col-sm-2 col-form-label">
                    Phone:</label>
                    <div className="col-sm-6">
                     <input type="text" name="phoneNumber" disabled={this.state.canEdit} className="form-control"/>


                     <div className="row p-2">
                        Preferred Contact Method:
                        <label className="px-2">
                        <input type="radio" name="contactPref" value="text" disabled={this.state.canEdit}/>  Text</label>
                        <label className="px-2">
                        <input type="radio" name="contactPref" value="email" disabled={this.state.canEdit}  className="px-2"/> Email
                        </label>
                      </div>
                  </div>
                  
                  
                </div>
                


                <div className="form-group row  ">
                  <label className="col-sm-2 col-form-label">Location:</label>
                  <div className="col-sm-6">
                    <input type="text" name="location" disabled={this.state.canEdit} className="form-control"/>
                  </div>
                </div>

                <hr />

                <div className="form-group row ">
                    <label className="col-sm-2 col-form-label">Facebook:</label>
                    <div className="col-sm-6">
                      <input type="text" name="socialMedia" disabled={this.state.canEdit} className="form-control"/>
                    </div>
                  </div> 
                <div className="form-group row ">   
                      <label className="col-sm-2 col-form-label">Instagram:</label>
                      <div className="col-sm-6">
                      <input type="text" name="socialMedia" disabled={this.state.canEdit} className="form-control"/>
                    </div>
                </div>


                <input type="button" value={this.state.buttonValue} onClick={this.toggleButton} className="btn"/>
            
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
