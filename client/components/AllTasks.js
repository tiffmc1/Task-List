import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Tasks = ({ tasks }) => {
	return (
		<ul>
			{tasks.map((task) => {
				return (
					<li key={task.id}>
						<h2>
							<Link to={`/tasks/${task.id}`}>Task: {task.taskName}</Link>
						</h2>
					</li>
				);
			})}
		</ul>
	);
};

const mapStateToProps = ({ tasks }) => ({
	tasks,
});

export default connect(mapStateToProps)(Tasks);
