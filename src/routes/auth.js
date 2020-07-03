const router = require("express").Router();
const passport = require("passport");

router.get("/", (req, res) => {
	res.render("home", {
		path: req.path,
	});
});

router.get("/auth/login", (req, res) => {
	res.render("login", {
		path: req.path,
	});
});

router.get("/auth/logout", (req, res) => {
	res.send("logout");
});

router.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile"],
	}),
);

router.get("/auth/google/cb", passport.authenticate("google"), (req, res) => {
	res.send({ userpro: req.user });
});

module.exports = router;
