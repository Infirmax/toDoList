<script>
	let newTaskName;
	let tasks = [];

	function addTask() {
			tasks.push(newTaskName);
			saveTasks();
	}

	function deleteTask(event) {
			const div = event.srcElement.parentNode;
			tasks.splice(div.getAttribute("index"), 1);
			saveTasks();
	}

	function saveTasks() {
			tasks = tasks;
			localStorage.setItem("tasks", tasks.join("|"));
	}

	function loadTasks() {
			tasks = localStorage.getItem("tasks").split("|");
	}
</script>

<h1>To Do List</h1>

<p>
	<input type="text" id="task" bind:value={newTaskName} />
	<input type="button" value="Add Task" on:click={addTask} />
</p>
<h1>List of Tasks</h1>
<ul id="tasks" use:loadTasks>
	{#each tasks as task, index}
			<div {index}>
					<p><li>{task}</li></p>
					<button on:click={deleteTask}>Delete me</button>
			</div>
	{/each}
</ul>

<style>
	h1, p {
			text-align: center;
	}

	ul{
		text-align: center;
		border: 2px solid green;
		padding: 10px;

	}
	button {
			text-align: center;
			
	}
	#tasks{
		text-align: center;
		color: rgb(163, 214, 163);
	}


</style>