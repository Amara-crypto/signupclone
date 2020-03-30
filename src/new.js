

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
     <label>Company</label>
     <input type="text"
      name="country"
      value={this.state.company}
      onChange={this.handlechangecompany}
     />
 </div>
</form>
</div>