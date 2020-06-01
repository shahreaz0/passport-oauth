const router = require("express").Router();

router.get("/auth/login", (req, res) => {
	res.render("login", {
		path: req.path,
	});
});

router.get("/auth/logout", (req, res) => {
	res.send("logout");
});

router.get("/auth/google", (req, res) => {
	res.send("google");
});

module.exports = router;
