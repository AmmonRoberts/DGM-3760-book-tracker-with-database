"use strict";

var _express = _interopRequireDefault(require("express"));

var _bookRoutes = _interopRequireDefault(require("./routes/bookRoutes.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import "babel-core/register";
// import "babel-polyfill";
(0, _dotenv.config)();
var app = (0, _express["default"])();
var port = 3000;

_mongoose["default"].connect(process.env.MONGO_URI).then(function () {
  app.use((0, _cors["default"])());
  app.use(_express["default"].json());
  app.use(_express["default"].urlencoded({
    extended: true
  }));
  app.use('/books', _bookRoutes["default"]);
  app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
  });
});