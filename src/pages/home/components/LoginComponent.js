import React, { Component } from 'react';


class Login extends Component {
  render() {
    
   return (
    
    <div className="modal fade" id="loginModule" tabIndex="-1" role="dialog" aria-labelledby="loginModuleLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header border-0">
            <h5 className="modal-title" id="exampleModalLabel">Let's Party Plan!</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="modal-body">
            
                
            <form action="#" method="POST"name="Login">
    
                    <div className="form-group field">
                        <label for="username" id="username-label" className="control-label sr-only">Email Address</label>
                        
                        <input name="username" type="text" placeholder="Username" className="form-control" />
                    </div>
                    <div className="form-group field">
                        <label for="password" id="password-label" className="control-label sr-only">Password</label>
                        <input name="password" type="password" placeholder="Password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" name="Submit" className="btn button">Log In</button>
                        <button type="button"  name="sign-up" className="btn button">Sign Up</button>
                    </div>
                    
            </form>
                    <p><a href="#" className="text-white">Reset Password?</a></p>
            </div>
        
        </div>
        </div>
  </div>
  
      
  
   );
  }
 }
 

export default Login;

