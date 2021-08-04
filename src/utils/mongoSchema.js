const mongoose = require("mongoose");
const { Schema } = mongoose;

const authorSchema = new Schema({
	name: String,
	lastName: String,
	dateOfBirth:Date,
	dateOfDeath:Date,
	country: String
});

const bookSchema = new Schema({
	title: String,
	releaseYear: Date,
	category:String,
	// authors: [authorSchema.name,authorSchema.lastName]
});

module.exports = {
	authorSchema : authorSchema,
	bookSchema : bookSchema,
}