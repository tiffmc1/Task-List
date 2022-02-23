import React, { Component } from "react";
import { fetchAddTask } from "../store/tasks";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddTask extends Component {
	constructor() {
		super();
		this.state = {
			taskName: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addTask({ ...this.state });
	}

	render() {
		const { taskName } = this.state;
		const { handleSubmit, handleChange } = this;

		return (
			<form id="task-form" onSubmit={handleSubmit}>
				<label htmlFor="taskName">Task Name:</label>
				<input name="taskName" onChange={handleChange} value={taskName} />
				<button type="submit">Add Task</button>
				<Link to="/">Cancel</Link>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch, { history }) => ({
	addTask: (task) => dispatch(fetchAddTask(task, history)),
});

export default connect(null, mapDispatchToProps)(AddTask);
