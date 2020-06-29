//modules
const path = require("path");
const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/auth");

require("./config/passport-setup");
require("./config/db");

//express config
const app = express();
app.set("views", path.join("views"));
app.set("view engine", "ejs");
app.use(express.static(path.join("public")));
app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: process.env.COOKIE_KEY,
	}),
);

// passport config
app.use(passport.initialize());
app.use(passport.session());

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
