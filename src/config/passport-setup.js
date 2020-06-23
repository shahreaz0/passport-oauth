const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
require("dotenv").config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/cb",
		},
		async (accessToken, refreshToken, profile, cb) => {
			console.log(profile);
			try {
				const user = new User({
					username: profile.displayName,
					googleId: profile.id,
				});

				await user.save();
				console.log(user);
			} catch (err) {
				console.log(err);
			}
		},
	),
);
