const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Mongodb connected!!");
	} catch (err) {
		console.log(err);
	}
};

mongoConnect();
