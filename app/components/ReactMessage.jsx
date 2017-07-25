var React =require('react');

var ReactMessage = React.createClass({
	getDefaultProps: function(){
			return {
				company:'Wipro',
				address:'Pritech',
			};
		},
		
	render : function(){
		var company=this.props.company;
		var address=this.props.address;
		return(
		<div>
			<h1>Company :: {company} </h1>
			<h1>Address :: {address}</h1>
		</div>
		);
	}
});
module.exports=ReactMessage;