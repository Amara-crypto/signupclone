import React from 'react';
import './App.css'
import userDtabase from './userDatabase';
class Login extends React.Component{
  constructor(props){
  super(props)
   this.state = {
     username:userDtabase['users'][0].email,
     password: '',
     
    }
   this.handleChangeUsername=this.handleChangeUsername.bind(this);
   this.handleChangePassword=this.handleChangePassword.bind(this);
   this.show=this.show.bind(this);
   this.CreateAcc=this.CreateAcc.bind(this)
  }
  checkfields(){
    let flag = true
    if(this.state.username.length<10){
      flag = false
    }
    if (this.state.password.length<5){
    flag= false}
    return flag
  }
  show(){
    if(!this.checkfields()){
    alert('Enter valid username and password')
  }
  
  if (this.checkfields()){
    this.props.history.push('/Dashboard');
    alert('Welcome')
  }
   

}
CreateAcc(){this.props.history.push('/Account');
}
handleChangeUsername(event){
  this.setState({username:event.target.value});
}
handleChangePassword(event){
  this.setState({password:event.target.value});
}

   /*handleSubmit=async(event)=>{
     event.preventDefault();
     const resp =await axios.get("http://api.github.com/users/"+ this.state.username);
     this.props.onSubmit(resp.data);
     this.setState({Username:''});
   };*/
    render(){
        return(
         
          <div className="root_wrapper" >
            <div className="form-wrapper">
          <form /*onSubmit={this.handleSubmit}*/ >
            <h1>ACCOUNT SIGN IN</h1>
            
            <div className="username">
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
            
            <div className="password">
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
          <div className="subacc">
          <h2>DON'T HAVE AN ACCOUNT?</h2>
            <button onClick={this.CreateAcc}>         
            CREATE ACCOUNT
            </button>
          </div>
          </form>
        
          </div>
          </div>      
        );
    }
}

export default Login;