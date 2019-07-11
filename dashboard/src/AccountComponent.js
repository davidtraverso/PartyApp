// Import the needed files from react 
import React, {Component} from 'react'

// Create a new component called "About"
class Account extends Component {
  // Up here is where you give the component state, if you want state, and where you write functions.

  toggleShowPassword = () => {
    var passwordInputbox = this.refs.password;
    if (passwordInputbox.type === "password") {
      passwordInputbox.type = "text";
    } else {
      passwordInputbox.type = "password";
    }
  }

  saveEdit = () => {
    var x = document.getElementById("myInput");
    if (x.type === "Save") {
      x.type = "text";
    } else {
      x.type = "Edit";
    }
  }

  render() {
    // Inside render but above return is where you access props passed down from the parent component, create variables to use inside the return, and basically do most of the "this is JavaScript that will design the page" stuffs.
    
    return(
      <div>
        <div className="container" width="50">
          <div id="paper" className="container p-5 text-center shadow-lg"> 
            <h1>Account Settings</h1>

            <div className="p-5">
                <form>
                  <label>
                    Email:
                    <input type="text" name="email" />
                  </label>                   

                  <label>
                    Password:
                  </label>
                  <input type="text" ref="password" name="password" />

                  <label>
                    Show Password
                    <input type="checkbox" onClick={this. toggleShowPassword} />
                  </label>

                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>
                  
                  <label>
                    Phone:
                    <input type="text" name="phoneNumber" />
                  </label>
                  
                  <label>
                    City, State:
                    <input type="text" name="location" />
                  </label>
                  
                  <label>
                  Facebook:
                    <input type="text" name="socialMedia" />
                  </label>
                  
                  <label>
                    Instagram:
                    <input type="text" name="socialMedia" />
                  </label>

                  Preferred Contact Method:
                  <input type="radio" name="contactPref" value="text" /> Text
                  <input type="radio" name="contactPref" value="email" /> Email

                  <input type="submit" value="Edit" onClick={this.saveEdit} />
                </form>
              </div>
          </div>
        </div>
      </div>             
    );
  };
}

export default Account