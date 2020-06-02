//modules
const path = require("path");
const express = require("express");
const authRoutes = require("./routes/auth");
require("./config/passport-setup");

//express config
const app = express();
app.set("views", path.join("views"));
app.set("view engine", "ejs");
app.use(express.static(path.join("public")));

//routes
app.get("/", (req, res) => {
	res.render("home", {
		path: req.path,
	});
});

app.use(authRoutes);

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
