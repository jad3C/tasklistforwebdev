import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/list.svg";
import inProgressIcon from "./assets/working.svg";
import doneIcon from "./assets/done.svg";

const savedTasks = localStorage.getItem("tasks");
console.log(savedTasks);

const App = () => {
	const [tasks, setTasks] = useState(JSON.parse(savedTasks) || []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const handleDelete = (id) => setTasks(tasks.filter((task) => task.id !== id));
	return (
		<div className="app">
			<TaskForm setTasks={setTasks} />
			<main className="app-main">
				<div className="container">
					<TaskColumn
						sectionTitle="To Do"
						titleIcon={todoIcon}
						alt="todo icon"
						tasks={tasks}
						status="todo"
						handleDelete={handleDelete}
					/>
					<TaskColumn
						sectionTitle="In Progress"
						titleIcon={inProgressIcon}
						alt="in progress icon"
						tasks={tasks}
						status="doing"
						handleDelete={handleDelete}
					/>
					<TaskColumn
						sectionTitle="Done"
						titleIcon={doneIcon}
						alt="done icon"
						tasks={tasks}
						status="done"
						handleDelete={handleDelete}
					/>
				</div>
			</main>
		</div>
	);
};

export default App;
