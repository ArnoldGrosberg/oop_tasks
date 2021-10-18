// page reloading event - lehe taaskäivitamine
document.addEventListener('DOMContentLoaded', getTasks);


function getTasks(e){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}



function getTasks(e){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(task));

  const link = document.createElement('a');
  link.className = 'secondary-content';
  link.appendChild(document.createTextNode('X'));
  link.setAttribute('href', '#');
  li.appendChild(link);

  taskList.appendChild(li);
  });
}
function storeTaskInLocalStorage(task=null) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(tasks);
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}




// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// events
// form submit event
form.addEventListener('submit', addTask);

function addTask(e){
	// create a new object Task with input value
	const task = new Task(taskInput.value);
	// add task value to the visual by UI object
	ui.addTask(task);
	// add task value to the LS by LS object
	ls.addTask(task);
	e.preventDefault();
}

const taskList = document.querySelector('ul');
taskList.addEventListener('click', deleteTask);

const delAllBtn = document.getElementById('del-tasks');
delAllBtn.addEventListener('click', deleteTasks);



function deleteTask(e){
	ui.deleteTask(e);
	removeTaskFromLocalStorage(e.target.parentElement.textContent);
	e.preventDefault();
}

function removeTaskFromLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  console.log(task);
  tasks.forEach(function(element, index){
  	console.log(element);
  	if(element == task.slice(0, -1)){
  		tasks.splice(index, 1);
  	}
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
} 

function deleteTasks(e){
	ui.deleteTasks(task);
	localStorage.clear();
	e.preventDefault();
}