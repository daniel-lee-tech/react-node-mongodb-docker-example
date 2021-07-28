const mongoose = require("mongoose");

const modelName = "Cat";

const { Schema } = mongoose;

const schema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
  adopted: Boolean,
});

const Cat = mongoose.model(modelName, schema);

module.exports = Cat;
