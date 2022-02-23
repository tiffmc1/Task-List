import axios from "axios";

// ACTION TYPE CONSTANTS
const SET_TASK = "SET_TASK";

// ACTION CREATORS
export const setTask = (task) => ({
	type: SET_TASK,
	task,
});

// THUNK CREATORS
export const fetchTask = (id) => async (dispatch) => {
	try {
		const { data: task } = await axios.get(`/api/tasks/${id}`);
		dispatch(setTask(task));
	} catch (error) {
		console.log("fetchTask Thunk Error!", error);
	}
};

export default (state = {}, action) => {
	switch (action.type) {
		case SET_TASK:
			return action.task;
		default:
			return state;
	}
};
