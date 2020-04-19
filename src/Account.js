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
            country:'select',
            formErrors:{}
            
        }
        this.createshow=this.createshow.bind(this);
        this.handlechangefirstname=this.handlechangefirstname.bind(this);
        this.handlechangelastname=this.handlechangelastname.bind(this);
        this.handlechangecountry=this.handlechangecountry.bind(this)
        this.hanldechangepassword=this.hanldechangepassword.bind(this)
        this.handlechangepassword1=this.handlechangepassword1.bind(this)
        this.handlechangeemail=this.handlechangeemail.bind(this)
       
    }

    parsEmail(email){
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }
   checkfield(){
      const {password, rePassword, email,firstname,lastname,country}=this.state;
       let formErrors = {};   
       let formIsValid = true;    

       //firstname     
       if (this.state.firstname.length<5) {    
        formIsValid = false;    
        formErrors["firstNameErr"] = "Name is required.";  
    }    

       //lastname     
       if (this.state.lastname.length<5) {    
        formIsValid = false;  
        formErrors["lastNameErr"] = "Last Name is required.";    
         
    }    
        //password
    if (password !== rePassword) {
        alert("Passwords don't match.");
        return false;
    }
   //Email    
            if (!email) {    
                formIsValid = false;    
                formErrors["emailErr"] = "Email is required.";    
            }    
            else if (this.parsEmail(email)) {    
        
                formIsValid = false;    
                formErrors["emailErr"] = "Invalid email.";    
            }    
            

            //country    
            if (country === '' || country === "select") {    
                formIsValid = false;    
                formErrors["countryErr"] = "Select Country.";    
            }    
        
            this.setState({ formErrors: formErrors });    
            return formIsValid;    

   }
      
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

handleSubmit = (e) => {    
    e.preventDefault();    

    if (this.checkfields()) {    
        alert('You have been successfully registered.')    
        this.setState(this.initialState)    
    }    
}    
    render(){
       const { firstnameErr,lastnameErr,passwordErr,rePasswordErr,emailErr, countryErr } = this.state.formErrors;   
        
        return(
            <div classname="root-wrapper" align="center">
                <div className="form-wrapper">
                <form > 
                <h1>CREATE ACCOUNT</h1>
                <div style={{flexDirection:"column"}}>
                <div className="name">
                <label>First Name</label>
                <input type="text"
                name="firstname"
                onChange={this.handlechangefirstname}
               className={firstnameErr ? ' showError' : ''} />    
                {firstnameErr &&    
                <div style={{ color: "red", paddingBottom: 10 }}>{firstnameErr}</div>    
                }                                  
                </div>

                <div className="name">
                <label>Last  Name</label>
                <input type="text"
                name="lastname"
                value={this.state.lastName}
                onChange={this.handlechangelastname}
                className={lastnameErr ? 'ShowError' :''}
                />
              {firstnameErr &&    
                  <div style={{ color: "red", paddingBottom: 10 }}>{firstnameErr}</div>    
                }   
                </div>
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
                <select name="country"
                value={this.state.country}
                onChange={this.handlechangecountry}
                >    
                <option value="select">--Select--</option>    
                <option value="Ghana">Ghana</option>    
                <option value="Nigeria">Nigeria</option>    
                <option value="Sierra Leone">Sierra Leone</option>    


                </select>
               
            
                </div>
                <button className="btn" onClick={this.createshow}>Login</button>
                <button className="btn" onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
            </div>
        );
    }
}
export default Account;
   
