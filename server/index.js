const PORT = process.env.PORT || 3000;
const app = require("./app");
const db = require("./db");

const init = async () => {
	await db.syncAndSeed();
	app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
};

init();
