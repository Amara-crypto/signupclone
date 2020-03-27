import React from 'react';
import Nav from '/Nav';
import './App.css'

class login extends react.Component{
    constructor(props){
        super(props)
        this.state={
     username:'',
     password:''
        }
        this.handleChangeUsername=this.handleChangeUsername.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.show=this.show.bind(this);
    }
        render(){
            return(
                <div>
                    <form /*onSubmit={this.handleSubmit}*/ >
            <div align="center"><h1>ACCOUNT SIGN IN</h1></div>
            
            <div className="inputbox">
              <label className="lblusername"><b>Username</b>
              </label>
                <input type="text"
                name="username"
                onChange={this.handleChangeUsername}
                //onChange={event=>this.setState({Username:event.target.value})}
                value={this.state.username}
                placeholder="Enter Username"
                />
            </div>
            
            <div className="inputbox">
              <label className="lblpassword"><b>Password</b>
              </label>
                <input type="password"
                name="password"
                onChange={this.handleChangePassword}
                //onChange={event=>this.setState({password:event.target.value})}
                value={this.state.password}
                placeholder="Enter Password"
                />
            </div>
                                 
          <button className="btn" onClick={this.show}>Signin</button>
          </form>
                </div>
            );
        }
    }


export default login;