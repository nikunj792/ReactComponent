var React =require('react');

var ReactMessage = React.createClass({
	render : function(){
		console.log("222@@",this.props);
		var company=this.props.value.company;
		var address=this.props.value.address;
		return(
		<div>
			<h1>Company :: {company} </h1>
			<h1>Address :: {address}</h1>
		</div>
		);
	}
});
module.exports=ReactMessage;
