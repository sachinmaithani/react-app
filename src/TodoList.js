import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
	
	constructor(){
		super();
		this.remove = this.remove.bind(this);
	}	
	
	remove(elem){
		var value = elem.target.parentNode.parentNode.firstChild.innerText;
		this.props.remove(value);		
	}
	
	post(elem){
		var value = elem.target.parentNode.parentNode.firstChild.innerText;
		window.FB.api('/me/feed','post',{message:value},function(response){
			console.log(response.id);
			console.log('posted to your facebook wall');
		});		
	}
	
	
	
	render() {
		var items = this.props.tasks.map((elem,i)=>{
		return <tr key={i}><td>{elem.task}</td><td>{elem.priority}</td><td>{elem.duetime}</td><td><span onClick={this.remove} className="glyphicon glyphicon-remove"></span></td><td><span className="glyphicon glyphicon-share" onClick={this.post}></span></td></tr>;
					});  
		return (
		  <div className="TodoList">      
				<table className="table table-striped">
					<thead>
						<th>Task</th>
						<th>Priority</th>
						<th>Due Time</th>
						<th></th>
						<th></th>
					</thead>
					<tbody>
					{items}
					</tbody>
				</table>
		  </div>
		);
	}

}

export default TodoList;
