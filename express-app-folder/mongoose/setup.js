// import mongoose
const mongoose = require("mongoose");

function attemptMongooseConnection(mongoDbHost, mongoDbPort, mongoDbName) {
  // attempt to connect to running instance of mongodb with a database name of `db-name`
  mongoose.connect(`mongodb://${mongoDbHost}:${mongoDbPort}/${mongoDbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // get the connection object for mongoose
  const db = mongoose.connection;

  // handler for a failed mongodb connection
  db.on("error", console.error.bind(console, "ERROR CONNECTING TO MONGODB!"));

  // handler for a successful mongodb connection
  db.once("open", function () {
    console.log("Mongoose is now connected to mongodb :)");
  });
}

module.exports = attemptMongooseConnection;
