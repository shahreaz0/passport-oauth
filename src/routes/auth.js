const router = require("express").Router();
const passport = require("passport");

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
		scope: ["profile", "email"],
	}),
);

router.get("/auth/google/cb", passport.authenticate("google"), (req, res) => {
	res.send("google redirect uri");
});

module.exports = router;
