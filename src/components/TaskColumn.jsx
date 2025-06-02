import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({
	sectionTitle,
	titleIcon,
	alt,
	tasks,
	status,
	handleDelete,
}) => {
	return (
		<section className="task-column">
			<div className="task-column-title">
				<img src={titleIcon} alt={alt} />
				<h2>{sectionTitle}</h2>
			</div>
			{tasks.map(
				(task) =>
					task.status === status && (
						<TaskCard
							key={task.id}
							taskText={task.task}
							tags={task.tags}
							handleDelete={handleDelete}
							tasksId={task.id}
						/>
					)
			)}
		</section>
	);
};

export default TaskColumn;
