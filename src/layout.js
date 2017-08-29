import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './layout'; 
//import TodoApp from './App';
import registerServiceWorker from './registerServiceWorker';

var tasksArr = [ 
					{'task':'Pay bills','priority':'High','duetime':'22-10-2017'},
					{'task':'Go for running','priority':'Medium','duetime':'22-10-2017'},
					{'task':'Give Bike for servicing','priority':'Medium','duetime':'22-10-2017'},
					{'task':'Read Tutorials in freeetime','priority':'Low','duetime':'22-10-2017'},
					{'task':'Meet raghav','priority':'Low','duetime':'22-10-2017'}
				];
				
var tasks = localStorage.getItem('todoTasks');
if(tasks){
	tasksArr = 	JSON.parse(tasks);
}				

ReactDOM.render(<TodoApp tasks={tasksArr} />, document.getElementById('root'));
registerServiceWorker();
