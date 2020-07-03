const router = require("express").Router();
const passport = require("passport");

router.get("/auth/login", (req, res) => {
	res.render("login", {
		path: req.path,
	});
});

router.get("/auth/logout", (req, res) => {
	req.logOut();
	res.redirect("/");
});

router.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile"],
	}),
);

router.get("/auth/google/cb", passport.authenticate("google"), (req, res) => {
	res.redirect("/profile");
	// res.send(req.user);
});

module.exports = router;
