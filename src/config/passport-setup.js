const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
		},
		() => {},
	),
);
