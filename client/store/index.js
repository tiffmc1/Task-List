import { createStore, applyMiddleware, combineReducers } from "redux";
import loggingMiddleware from "redux-logger";
import thunk from "redux-thunk";
import tasksReducer from "./tasks";
import taskReducer from "./task";

const rootReducer = combineReducers({
	tasks: tasksReducer,
	task: taskReducer,
});

export default createStore(
	rootReducer,
	applyMiddleware(thunk, loggingMiddleware)
);
