const mongoose = require("mongoose");
const schema = require("./mongoSchema.js");
const { model } = mongoose;

function createAuthor() {
  const authorSchema = model("author", schema.authorSchema);

  const erickAuthor = new authorSchema({
    name: "Erick Noiztbander",
    lastName: "Ureña Lino",
    dateOfBirth: "03/12/1995",
    dateOfDeath: new Date(),
    country: "Ecuador",
  });

  erickAuthor
    .save()
    .then((response) => {
      console.log(response);
      mongoose.connection.close();
    })
    .catch((error) => {
      console.log(error);
    });
}

function createBook (){
  const bookSchema = model("book", schema.bookSchema);

};

console.log("Hay dioh");

module.exports = {
	createAuthor: createAuthor,
	createBook: createBook,
}
