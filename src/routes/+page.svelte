<script>
	let newTaskName;
	let tasks = [];

	function addTask() {
		tasks.push(newTaskName);
		tasks = tasks;
	}

	function deleteTask(event) {
		event.srcElement.parentNode.remove();
	}

	function saveTasks() {
		localStorage.setItem("tasks", tasks.join("|"));
	}

	function loadTasks() {
		tasks = localStorage.getItem("tasks").split("|");
	}
</script>

<svelte:window on:load={loadTasks}/>
<h1>To Do List</h1>

<input type="text" id="task" bind:value={newTaskName} />
<input type="button" value="Add Task" on:click={addTask} />

<h1>List of Tasks</h1>
<ul id="tasks">
	{#each tasks as task}
		<div>
			<li>{task}</li>
			<button on:click={deleteTask}>Delete me</button>
		</div>
	{/each}
</ul>

<style>
</style>
