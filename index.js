window.onload = loadTasks

// Make the task work with a passed in values and no passed in values
function addTask(taskName) {
  // Retrieve new task and create the element
  if(taskName == undefined)
    taskName = document.getElementById('task').value

  let task = document.createElement("li")
  task.innerText = taskName + "\n"

  // Create button to delete that task
  let button = document.createElement("button")
  button.innerText = "Delete Task"
  button.onclick = deleteTask

  // Create element and add
  const div = document.createElement("div");
  div.appendChild(task);
  div.appendChild(button);

  document.getElementById("tasks").appendChild(div);
}

function deleteTask(event) {
  const element = event.srcElement;
  element.parentNode.remove();
}

function loadTasks() {
  let taskNames = localStorage.getItem("tasks").split("|");
  for (let taskName of taskNames) {
    addTask(taskName);
  }
}