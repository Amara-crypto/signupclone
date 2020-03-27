import React from 'react';
import './App.css';
class Account extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            rePassword:'',
            firstname:'',
            lastname:'',
            country:''
        }
        this.createshow=this.createshow.bind(this)
    }
    createshow(){this.props.history.push('/Login');
}
    render(){
        return(
            <div classname="wrapper" align="center">
                <div className="form-wrapper">
                <form > 
                <h1>CREATE ACCOUNT</h1>
                <div classname="firstname">
     <label>First Name</label>
     <input type="text"
      name="firstname"
      onChange={this.handlechangefname}
     />
 </div>
                <div className="email">
                    <label>Email</label>
                    <input 
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handlechangeemail}
                    />
                   
                </div>
               
                <div className="password1">
                 <label>Password</label>
                <input 
                type="password"
                name="password"
                value={this.state.password}
                 onChange={this.hanldechangepassword}
                 />
                </div>
                 <div className="password2">
                 <label>Retype Password</label>
                 <input
                 type="password"
                 name="password"
                 value={this.state.retypePassword}
                 onChange={this.handlechangepassword1}

                 />
                 </div>
               

                
                <div className="lastname">
     <label>Last  Name</label>
     <input type="text"
      name="lastname"
      value={this.state.lastName}
      onChange={this.handlechangelname}
     />
 </div>
                <div classname="country">
                <label>Country</label>
                <input type="text"
                name="country"
                value={this.state.country}
                onChange={this.handlechangecountry}
                />
                </div>
                <button className="btn" onClick={this.createshow}>Login</button>
                </form>
                </div>
            </div>
        );
    }
}
export default Account;
   
