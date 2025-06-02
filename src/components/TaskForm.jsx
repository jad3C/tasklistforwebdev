import React, { useState } from "react";
import "./TaskForm.css";
import ThemeToggle from "../ThemeToggle";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
	const [taskData, setTaskData] = useState({
		id: Date.now(),
		task: "",
		status: "todo",
		tags: [],
	});

	const checkTag = (tag) => {
		return taskData.tags.some((item) => item === tag);
	};

	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filterTags = taskData.tags.filter((item) => item !== tag);
			setTaskData((prev) => {
				return { ...prev, tags: filterTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] };
			});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setTaskData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(taskData);
		setTasks((prev) => {
			return [...prev, taskData];
		});

		setTaskData({
			id: Date.now(),
			task: "",
			status: "todo",
			tags: [],
		});
	};

	return (
		<header className="app-header">
			<div className="container">
				<div className="header-con">
					<div className="title">Task Trek</div>
					<ThemeToggle />
				</div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="task"
						value={taskData.task}
						className="task-input"
						placeholder="Please enter your task"
						onChange={handleChange}
					/>

					<div className="task-form-details">
						<div className="tag-buttons">
							<Tag
								tagName="HTML"
								selectTag={selectTag}
								selected={checkTag("HTML")}
							/>
							<Tag
								tagName="CSS"
								selectTag={selectTag}
								selected={checkTag("CSS")}
							/>
							<Tag
								tagName="JavaScript"
								selectTag={selectTag}
								selected={checkTag("JavaScript")}
							/>
							<Tag
								tagName="React"
								selectTag={selectTag}
								selected={checkTag("React")}
							/>
						</div>

						<div className="select-and-submit-btn">
							<div className="custom-select">
								<select
									name="status"
									value={taskData.status}
									className="task-status"
									onChange={handleChange}
								>
									<option value="todo">To do</option>
									<option value="doing">Doing</option>
									<option value="done">Done</option>
								</select>
								<span className="custom-arrow"></span>
							</div>

							<button type="submit" className="task-submit">
								Add Task
							</button>
						</div>
					</div>
				</form>
			</div>
		</header>
	);
};

export default TaskForm;
