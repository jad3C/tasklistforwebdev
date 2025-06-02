import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.svg";

const TaskCard = ({ taskText, tags, handleDelete, tasksId }) => {
	return (
		<article className="task-card" draggable>
			<p className="task-text">{taskText}</p>
			<div className="tags-and-delete-btns">
				<div className="task-card-tags">
					{tags.map((tag) => (
						<Tag key={crypto.randomUUID()} tagName={tag} selected />
					))}
				</div>
				<div className="task-delete" onClick={() => handleDelete(tasksId)}>
					<img src={deleteIcon} alt="" />
				</div>
			</div>
		</article>
	);
};

export default TaskCard;
