const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
require("dotenv").config();

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/cb",
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				// user exists or not
				console.log();
				const user = await User.findOne({ googleId: profile.id });
				if (user) {
					return done(null, user);
				}

				// if user not exists create new user
				const newUser = new User({
					username: profile.displayName,
					googleId: profile.id,
					thumbnail: profile.photos[0].value,
				});

				await newUser.save();
				console.log(newUser);
				done(null, newUser);
			} catch (err) {
				console.log(err);
			}
		},
	),
);
