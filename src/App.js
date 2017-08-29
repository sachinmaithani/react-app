import React, { Component } from 'react';
import './App.css';
import FacebookLogin from './FacebookLogin';
import AddNewTask from './AddNewTask';
import TodoList  from './TodoList';

class TodoApp extends Component {
	
	constructor(props){
		super();
		var obj =  { appdiv : 'hide_div',userdiv: 'show_div'};
		this.state = {tasks: props.tasks , divClass: obj};
		this.updateTaskList = this.updateTaskList.bind(this); 
		this.removeTask = this.removeTask.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
			
	}	
	
	updateTaskList(task){
		var updateTasks = this.state.tasks;		
		updateTasks.push(task);
		this.setState({tasks:updateTasks});
		this.updateTodoArr(updateTasks);
	}
	
	removeTask(task){
		var updateTasks = this.state.tasks;
		updateTasks = updateTasks.filter(function(el){ return el.task != task; });
		this.setState({tasks:updateTasks});
		this.updateTodoArr(updateTasks);
	}
	
	updateTodoArr(taskArr){
		localStorage.setItem('todoTasks',JSON.stringify(taskArr));
	}	
	
	toggleClass(){		
		console.log(this.props.upperdiv);
		var obj =  { userdiv : 'hide_div',appdiv: 'show_div'};
		this.setState({divClass: obj});	
	}
	
	render() {
		return (
		  <div className="container TodoApp">
		  <div className={this.state.divClass.userdiv}>
                <p>
                    <FacebookLogin toggleClass={this.toggleClass}/>
                </p>
            </div>
			<div className={this.state.divClass.appdiv}>	
				<h1>ToDo App</h1>
				<h2>My To Do List</h2>			
				<AddNewTask updateTaskList={this.updateTaskList}  />
				<TodoList tasks={this.state.tasks}  remove={this.removeTask} />
			</div>	
		  </div>
		);
	}

}

export default TodoApp;
