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
        this.createshow=this.createshow.bind(this);
        this.handlechangefirstname=this.handlechangefirstname.bind(this);
        this.handlechangelastname=this.handlechangelastname.bind(this);
        this.handlechangecountry=this.handlechangecountry.bind(this)
        this.hanldechangepassword=this.hanldechangepassword.bind(this)
        this.handlechangepassword1=this.handlechangepassword1.bind(this)
        this.handlechangeemail=this.handlechangeemail.bind(this)
        /*this.createshow=this.createshow.bind(this)*/
    }
   /*checkfield(){
        let flag = true
        if (this.state.firstname.length<6){
            flag=false
        }
        findAllByDisplayValue(
    }*/
    createshow(){this.props.history.push('/Login');
}
    handlechangefirstname(event){this.setState({firstname:event.target.value});
}
    handlechangelastname(event){this.setState({lastname: event.target.value});
}
    hanldechangepassword(event){this.setState({password: event.target.value});
}
    handlechangepassword1(event){this.setState({rePassword: event.target.value});
}
    handlechangeemail(event){this.setState({email: event.target.value});
}
    handlechangecountry(event){this.setState({country: event.target.value});
}
    render(){
        return(
            <div classname="wrapper" align="center">
                <div className="form-wrapper">
                <form > 
                <h1>CREATE ACCOUNT</h1>

                <div classname="name">
                <label>First Name</label>
                <input type="text"
                name="firstname"
                onChange={this.handlechangefirstname}
                />
                
                </div>
                <div className="name">
                <label>Last  Name</label>
                <input type="text"
                name="lastname"
                value={this.state.lastName}
                onChange={this.handlechangelastname}
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
                 <label>Confirm Password</label>
                 <input
                 type="password"
                 name="password"
                 value={this.state.retypePassword}
                 onChange={this.handlechangepassword1}

                 />
                 </div>          
                <div classname="country">
                <label>Country</label>
                <input
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.handlechangecountry}
                />
                </div>
                <button className="btn" onClick={this.createshow}>Login</button>
                <button className="btn" onClick={this.createAccount}>Complete</button>
                </form>
                </div>
            </div>
        );
    }
}
export default Account;
   
