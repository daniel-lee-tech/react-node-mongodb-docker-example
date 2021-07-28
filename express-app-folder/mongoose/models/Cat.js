var mongoose = require("mongoose");

const modelName = "Cat";

const { Schema } = mongoose;

const schema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
  adopted: Boolean,
});

// static methods for Cat model
const staticMethods = {
  getAdoptedKitties(err, cats) {
    return mongoose.model(modelName).find({ adopted: true });
  },
  getOrphanedKitties(err, cats) {
    return mongoose.model(modelName).find({ adopted: false });
  },
};

// add static methods to kitty schema.
schema.statics = { ...schema.statics, ...staticMethods };

// instance methods
const instanceMethods = {
  checkCuteness() {
    return `My name is ${this.name} and I am ${this.age} years old, meow~~`;
  },
};

// add instance methods to kitty schema.
schema.methods = { ...schema.methods, ...instanceMethods };

const Cat = mongoose.model(modelName, schema);

module.exports = Cat;
