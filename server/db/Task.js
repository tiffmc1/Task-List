const Sequelize = require("sequelize");
const db = require("./db");

const Task = db.define("tasks", {
	taskName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Task;
