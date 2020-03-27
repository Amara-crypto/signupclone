

 constructor(props){
    super(props)
    this.state={
            email:'',
            password:'',
            retypePassword:'',
            country:'',
            firstName:'',
            lastName:'',
            company:'',
           
    }


this.handlechangeemail=this.handlechangeemail.bind(this)
this.hanldechangepassword=this.hanldechangepassword.bind(this)
this.handlechangeretypepassword=this.handlechangeemail.bind(this)
this.handlechangecountry=this.handlechangecountry.bind(this)
this.hanldechangefname=this.hanldechangefname.bind(this)
this.handlechangelname=this.handlechangelname.bind(this)
this.handlechangecompany=this.handlechangecompany.bind(this)
}
 
<div>
<Nav/>

<form>
<h3>ACCOUNT</h3>
 <div>
     <label>Email</label>
     <input 
     type="email"
     name="email"
     value={this.state.email}
     onChange={this.handlechangeemail}
     />
 </div>
 <div>
     <label>Password</label>
     <input 
     type="password"
     name="password"
     value={this.state.password}
     onChange={this.hanldechangepassword}
     />
 </div>
 <div>
     <label>Retype Password</label>
     <input
     type="password"
     name="password"
     value={this.state.retypePassword}
     onChange={this.handlechangepassword1}
     value={his.state.password}
     />
 </div>
 <div>
     <label>Country</label>
     <input type="text"
     name="country"
     value={this.state.country}
     onChange={this.handlechangecountry}
     />
     
 </div>
 <div>
     <label>First Name</label>
     <input type="text"
      name="firstname"
      onChange={this.handlechangefname}
     />
 </div>
 <div>
     <label>Last  Name</label>
     <input type="text"
      name="lastname"
      value={this.state.lastName}
      onChange={this.handlechangelname}
     />
 </div>
 
 <div>
     <label>Company</label>
     <input type="text"
      name="country"
      value={this.state.company}
      onChange={this.handlechangecompany}
     />
 </div>
</form>
</div>