import axios from "axios";

// ACTION TYPE CONSTANTS
const SET_TASKS = "SET_TASKS";
const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";

// ACTION CREATORS
const setTasks = (tasks) => ({
	type: SET_TASKS,
	tasks,
});

const addTask = (task) => ({
	type: ADD_TASK,
	task,
});

const editTask = (task) => ({
	type: EDIT_TASK,
	task,
});

const deleteTask = (task) => ({
	type: DELETE_TASK,
	task,
});

// THUNK CREATORS
export const fetchTasks = () => async (dispatch) => {
	try {
		const { data: tasks } = await axios.get("/api/tasks");
		dispatch(setTasks(tasks));
	} catch (error) {
		console.log("fetchTasks Thunk Error!", error);
	}
};

export const fetchAddTask = (task, history) => async (dispatch) => {
	try {
		const { data: createdTask } = await axios.post("/api/tasks/add", task);
		dispatch(addTask(createdTask));
		history.push("/");
	} catch (error) {
		console.log("fetchAddTask Thunk Error!", error);
	}
};

export const fetchEditTask = (task, history) => async (dispatch) => {
	try {
		const { data: updatedTask } = await axios.put(
			`/api/tasks/${task.id}`,
			task
		);
		dispatch(editTask(updatedTask));
		history.push("/");
	} catch (error) {
		console.log("fetchEditTask Thunk Error!", error);
	}
};

export const fetchDeleteTask = (id, history) => async (dispatch) => {
	try {
		const { data: deletedTask } = await axios.delete(`/api/tasks/${id}`);
		dispatch(deleteTask(deletedTask));
		history.push("/");
	} catch (error) {
		console.log("fetchDeleteTask Thunk Error!", error);
	}
};

export default (state = [], action) => {
	switch (action.type) {
		case SET_TASKS:
			return action.tasks;
		case ADD_TASK:
			return [...state, action.task];
		case EDIT_TASK:
			return state.map((task) =>
				task.id === action.task.id ? action.task : task
			);
		case DELETE_TASK:
			return state.filter((task) => task.id !== action.task.id);
		default:
			return state;
	}
};
