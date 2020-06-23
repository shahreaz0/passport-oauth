const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnect = async () => {
	await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	console.log("Mongodb connected!!");
};

mongoConnect();
