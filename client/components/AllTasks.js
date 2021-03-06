import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";

const Tasks = ({ tasks }) => {
	return (
		<ul>
			{tasks.map((task) => {
				return (
					<li key={task.id}>
						<h2>
							<Link to={`/tasks/${task.id}`}>
								<TaskOutlinedIcon fontSize="large" />
								{task.taskName}
							</Link>
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
