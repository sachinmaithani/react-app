import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment'; 
import 'react-datepicker/dist/react-datepicker.css';


class AddNewTask extends Component {
	
	constructor (props) {
		super(props)
		this.state = {
		  startDate: moment()
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitTask = this.submitTask.bind(this);
	}
	 
	handleChange(date) {
		this.setState({
		  startDate: date
		});
	}
	
	submitTask(event){
		event.preventDefault();
		var date = this.state.startDate.format("DD-MM-YYYY");
		var task = {'task':event.target.querySelector('input').value,
					'priority':event.target.querySelector('select').value,
		'duetime':date };
		this.props.updateTaskList(task);			
	}
	
  render() {
    return (
		<div>
			<form onSubmit={this.submitTask} className="form-inline" role="form"> 
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Add New Task" />
					</div>
					<div className="form-group">
						<select className="form-control"><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option></select>
					</div>
					<div className="form-group">
					<DatePicker className="form-control" selected={this.state.startDate} minDate={moment()} onChange={this.handleChange}/>
					</div>
				<button type="submit" className="btn btn-primary">Add Task</button>
			</form>
		</div>
    );
  }

}

export default AddNewTask;
