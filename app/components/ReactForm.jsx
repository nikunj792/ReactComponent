var React =require('react');
var ReactMessage=require('ReactMessage');

var ReactForm = React.createClass({
	onPersonalFormSubmit: function(e){
			e.preventDefault();
			var firstName =this.refs.fname.value;
			var lastName =this.refs.lname.value;
			if(firstName.length>3 && lastName.length>3)
				{
					this.refs.fname.value='';
					this.refs.lname.value='';
					this.setState({
						fname:firstName,
						lname:lastName
						
					});
				}
			else
				{
					alert("Some Error in Personal");
				}
		},
	onProfileFormSubmit :function(e){
			e.preventDefault();
			var profile ={};
			var company =this.refs.company.value;
			var address =this.refs.address.value;
			if(company.length>3 && address.length>3)
				{
					this.refs.company.value='';
					this.refs.address.value='';
					profile.company =company;
					profile.address=address;
					this.state.handleProfile(profile);
					/* this.setState({
					profile.company:company,
						profile.address:address 
						 alert(company);
						alert(address); 
					}); */
				}
			else
				{
					alert("Some Error in Profile");
				}
		},
		getInitialState:function(){
			return {
				fname:'Nikunj',
				lname:'Agarwal'
			};
		},
		handleProfile:function(profile){
			var company = profile.company;
			var address = profile.address;
			this.setState({
				company:company,
				address:address
			});
		},
	render : function(){
		var firstName =this.state.fname;
		var lastName=this.state.lname;
		return(
		<div>
		<h1>First Name Value :: {firstName}</h1>
		<h1>last Name Value :: {lastName}</h1>
		<form onSubmit={this.onPersonalFormSubmit}>
		<h1>Personal Details</h1>
		<div><label for="fname">First Name</label></div>
		<div><input type="text" ref="fname"/></div>
		<div><label for="lname">Last Name</label></div>
		<div><input type="text" ref="lname"/></div>
		<div><button>Submit</button></div>
		</form>
		
		<form onSubmit={this.onProfileFormSubmit}>
		<h1>Profile Details</h1>
		<div><label for="company">Company Name</label></div>
		<div><input type="text" ref="company"/></div>
		<div><label for="address">Address</label></div>
		<div><input type="text" ref="address"/></div>
		<div><button>Submit</button></div>
		</form>
		<ReactMessage onProfile={this.handleProfile}/>
		</div>
		);
	}
});
module.exports=ReactForm;