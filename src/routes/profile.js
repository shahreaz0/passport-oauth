const router = require("express").Router();

const isLoggedIn = (req, res, next) => {
	if (!req.user) return res.redirect("/auth/login");
	next();
};

router.get("/profile", isLoggedIn, (req, res) => {
	res.render("profile", { user: req.user });
});

router.get("/friends", isLoggedIn, (req, res) => {
	res.status(200).send("Friend list");
});

router.get("/photos", isLoggedIn, (req, res) => {
	res.send("photos");
});

module.exports = router;
