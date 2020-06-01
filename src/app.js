//modules
const path = require("path");
const express = require("express");

//express config
const app = express();
app.set("views", path.join("views"));
app.set("view engine", "ejs");
app.use(express.static(path.join("public")));

//routes
app.get("/", (req, res) => {
	res.render("home", {
		pageTitle: "Home",
		path: req.path,
	});
});

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
