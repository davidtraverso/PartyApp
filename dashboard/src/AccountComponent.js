// Import the needed files from react 
import React, {Component} from 'react'

// Create a new component called "About"
class Account extends Component {
  // Up here is where you give the component state, if you want state, and where you write functions.


  render() {
    // Inside render but above return is where you access props passed down from the parent component, create variables to use inside the return, and basically do most of the "this is JavaScript that will design the page" stuffs.

    return(
      <div>
        <container>
            <div className="container" maxWidth="md">
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
                          <input type="text" name="password" />
                        </label>
                        <br></br>
                        <label>
                        Name:
                          <input type="text" name="name" />
                        </label>
                        
                        <label>
                        Phone:
                          <input type="text" name="phone number" />
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
                        <br></br>
                      <input type="submit" value="Submit" />
                      </form>
                    </div>

                    
                      </div>
                      </div>
                      </container>
                      </div>             
    );
  };
}

export default Account
