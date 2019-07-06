## Template for creating a new Component!

```
// Import the needed files from react
import React, {Component} from 'react'

// Create a new component called "About"
class About extends Component {
  // Up here is where you give the component state, if you want state, and where you write functions.

  render() {
    // Inside render but above return is where you access props passed down from the parent component, create variables to use inside the return, and basically do most of the "this is JavaScript that will design the page" stuffs.

    return(
      <div>
        <h1>This is where all the html goes!</h1>
     </div>
    );
  };
}

// This "exports" the component to all other files which allows us to "use" the About component in other places!
export default About

```
