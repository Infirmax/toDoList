const arrayOfElement = []

function addTask() {
  // Retrieve new task and create the element
  let taskName = document.getElementById('task').value
  let task = document.createElement("li")
  task.innerText = taskName + "\n"

  // Create button to delete that task
  let button = document.createElement("button")
  button.innerText = "Delete Task"

  //Mini function 
  const temp = arrayOfElement.length + 1;
  button.onclick = () => deleteTask(temp)
  arrayOfElement.push(task)
  arrayOfElement.push(button)

  // Add elements to DOM
  document.getElementById("tasks").appendChild(task)
  document.getElementById("tasks").appendChild(button)
}

function deleteTask(index){
  arrayOfElement[index].remove()
  arrayOfElement[index - 1].remove()
}