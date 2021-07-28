var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var catsRouter = require("./routes/cats");

var app = express();

const attemptMongooseConnection = require("./mongoose/setup");

// this should match the name of the service specified for mongo image in ../docker-compose.yml
const mongoDbHost = "mongodb";
// this should match what is specified in ../docker-compose.yml
const mongoDbPort = 27017;
const mongoDbName = "some-db";

attemptMongooseConnection(mongoDbHost, mongoDbPort, mongoDbName);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/cats", catsRouter);

module.exports = app;
