import React, { Component } from "react";
import { fetchDeleteTask, fetchEditTask } from "../store/tasks";
import { fetchTask, setTask } from "../store/task";
import { connect } from "react-redux";

class EditTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskName: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchTask(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.clearTask();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.task.id !== this.props.task.id) {
			this.setState({
				taskName: this.props.task.taskName || "",
			});
		}
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.editTask({ ...this.props.task, ...this.state });
	}

	render() {
		const { taskName } = this.state;
		const { handleSubmit, handleChange } = this;

		return (
			<div>
				<form id="task-form" onSubmit={handleSubmit}>
					<label htmlFor="taskName">Task Name:</label>
					<input name="taskName" onChange={handleChange} value={taskName} />
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={(ev) => ev.preventDefault()}>
					<button
						className="remove"
						onClick={() => this.props.deleteTask(this.props.match.params.id)}
					>
						Delete
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ task }) => ({
	task,
});

const mapDispatchToProps = (dispatch, { history }) => ({
	fetchTask: (id) => dispatch(fetchTask(id)),
	editTask: (task) => dispatch(fetchEditTask(task, history)),
	deleteTask: (task) => dispatch(fetchDeleteTask(task, history)),
	clearTask: () => dispatch(setTask({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
