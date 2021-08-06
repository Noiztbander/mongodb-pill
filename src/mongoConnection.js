const mongoose = require("mongoose");
const password = require("./utils/password.js");
const createThingsDB = require("./utils/mongoModel.js");

const connectionString = `mongodb+srv://kemako:${password}@erick-cluster-0.bph9j.mongodb.net/mongoDB-pill-Database?retryWrites=true&w=majority`;

// MongoDB connection
mongoose
  .connect(connectionString, {
		useNewUrlParser:true,
		useUnifiedTopology:true,
		useFindAndModify: false,
		useCreateIndex:true
	})
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.connection.on("error", (error)=>{console.error(error);});

// createThingsDB.createAuthor();


