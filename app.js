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



// event elements
const taskList = document.querySelector('ul');
const delAllBtn = document.getElementById('del-tasks');

// click element kustutamiseks
taskList.addEventListener('click', deleteTask);

delAllBtn.addEventListener('click', deleteTasks);

function deleteTask(e) {
if(e.target.textContent = 'X'){
    if(confirm('Are you sure to delete this task?')){
      e.target.parentElement.remove();
    }
  }
}

function deleteTasks(e) {
	if(confirm('Are you sure to delete all tasks?')){
      while(taskList.firstChild){
      	taskList.removeChild(taskList.firstChild);
// taskList.innerHTML = '';

  }
}
}