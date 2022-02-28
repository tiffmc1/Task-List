const db = require("./db");
const Task = require("./Task");

const syncAndSeed = async () => {
	await db.sync({ force: true });

	console.log(`
    Seeding successful!
  `);
};

module.exports = {
	conn: db,
	syncAndSeed,
	Task,
};
