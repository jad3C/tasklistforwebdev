import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
	return (
		<button
			type="button"
			className="tag"
			id={selected ? tagName : "default"}
			onClick={() => selectTag(tagName)}
		>
			{tagName}
		</button>
	);
};

export default Tag;
