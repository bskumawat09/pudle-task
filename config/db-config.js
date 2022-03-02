const mongoose = require("mongoose");

function dbConnect() {
	const connectionString = process.env.DB_URL;

	mongoose.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error:"));
	db.once("open", () => {
		console.log("Database connected...");
	});
}

module.exports = dbConnect;
