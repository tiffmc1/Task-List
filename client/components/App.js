import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllTasks from "./AllTasks";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import { connect } from "react-redux";
import { fetchTasks } from "../store/tasks";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

class App extends Component {
	componentDidMount() {
		this.props.loadTasks();
	}

	render() {
		return (
			<Router>
				<div id="main">
					<h1>
						<Link to="/">
							<ListAltRoundedIcon fontSize="large" /> {this.props.tasks.length}
						</Link>
					</h1>
					<Link to="/tasks/add">Add A New Task</Link>
					<Switch>
						<Route exact path="/" component={AllTasks} />
						<Route path="/tasks/add" component={AddTask} />
						<Route path="/tasks/:id" component={EditTask} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = ({ tasks }) => ({
	tasks,
});

const mapDispatchToProps = (dispatch) => ({
	loadTasks: () => dispatch(fetchTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
