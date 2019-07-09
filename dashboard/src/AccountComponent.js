// Import the needed files from react 
import React, {Component} from 'react'

// Create a new component called "About"
class About extends Component {
  // Up here is where you give the component state, if you want state, and where you write functions.
  
  render() {
    // Inside render but above return is where you access props passed down from the parent component, create variables to use inside the return, and basically do most of the "this is JavaScript that will design the page" stuffs.

    return(
      <div>
            <Container maxWidth="md">
                  <div id="paper" className="container p-5 text-center shadow-lg">  
                      <h1>Account Settings</h1>

                      <div className="p-5">
                      <form>
                        <label>
                        Name:
                          <input type="text" name="name" />
                        </label>
                        <label>
                        Username:
                          <input type="text" name="username" />
                        </label>  <label>
                        Password:
                          <input type="text" name="password" />
                        </label>
                        <label>
                        Phone Number:
                          <input type="text" name="phone number" />
                        </label>
                        <label>
                        Email:
                          <input type="text" name="email" />
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
                      <input type="submit" value="Submit" />
                      </form>
                    </div>

                    Password: <input type="password" value="FakePSW" id="myInput"><br><br>
                        <input type="checkbox" onclick="myFunction()">Show Password
                    <script>
                    function myFunction() {
                      var x = document.getElementById("myInput");
                      if (x.type === "password") {
                        x.type = "text";
                      } else {
                        x.type = "password";
                      }
                    }
                    </script>

                  </div>
                    
              </Container>
            
     </div>
    );
  };
}

// This "exports" the component to all other files which allows us to "use" the About component in other places!
export default About

