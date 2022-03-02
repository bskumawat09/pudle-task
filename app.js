require("dotenv").config();
const express = require("express");
const dbConnect = require("./db-config");
const routes = require("./routes");

const app = express();

app.use(express.json());

// connect database
dbConnect();

app.use("/", routes);

app.get("/", (req, res) => {
	res.send("Welcome to Pudle Backend Task");
});

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
});
