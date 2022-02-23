const router = require("express").Router();
const Task = require("../db/Task");

// GET api/tasks
router.get("/", async (req, res, next) => {
	try {
		const tasks = await Task.findAll();

		res.send(tasks);
	} catch (error) {
		next(error);
	}
});

// GET api/tasks/:id
router.get("/:id", async (req, res, next) => {
	try {
		const task = await Task.findByPk(req.params.id);

		res.send(task);
	} catch (error) {
		next(error);
	}
});

// POST api/tasks
router.post("/add", async (req, res, next) => {
	try {
		const createTask = await Task.create(req.body);

		res.status(201).send(createTask);
	} catch (error) {
		next(error);
	}
});

// PUT api/tasks/:id
router.put("/:id", async (req, res, next) => {
	try {
		const task = await Task.findByPk(req.params.id);
		const updateTask = await task.update(req.body);

		res.send(updateTask);
	} catch (error) {
		next(error);
	}
});

// DELETE api/tasks/:id
router.delete("/:id", async (req, res, next) => {
	try {
		const task = await Task.findByPk(req.params.id);
		await task.destroy();

		res.send(task);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
