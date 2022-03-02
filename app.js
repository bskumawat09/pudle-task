require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/db-config");
const routes = require("./routes");

const app = express();

app.use(express.json());

// connect database
dbConnect();

app.use("/api", routes);

app.get("/api", (req, res) => {
	res.send("Welcome to Pudle Backend Task");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`);
});
