// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const showAllTasksButton = document.getElementById('showAllTasks');
const showCompletedTasksButton = document.getElementById('showCompletedTasks');
const showIncompleteTasksButton = document.getElementById('showIncompleteTasks');

// Array to store tasks
let tasks = [];

// Add a new task when the button is clicked
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    renderTasks(tasks);
    taskInput.value = ''; // Clear the input field
  }
});

// Function to render tasks to the DOM
function renderTasks(taskArray) {
  
  taskList.innerHTML = '';

  
  taskArray.map((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';

    
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="toggleTask(${index})">Toggle</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

   
    taskList.appendChild(li);
  });
}


function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(tasks);
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(tasks);
}


showCompletedTasksButton.addEventListener('click', () => {
  const completedTasks = tasks.filter(task => task.completed);
  renderTasks(completedTasks);
});


showIncompleteTasksButton.addEventListener('click', () => {
  const incompleteTasks = tasks.filter(task => !task.completed);
  renderTasks(incompleteTasks);
});


showAllTasksButton.addEventListener('click', () => {
  renderTasks(tasks);
});
