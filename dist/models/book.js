"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bookSchema = _mongoose["default"].Schema({
  'id': String,
  'bookName': String,
  'authorName': String,
  'isbn': String,
  'bookKey': String,
  'readingList': String,
  'favoriteList': String,
  'completedList': String
});

var _default = _mongoose["default"].model('book', bookSchema);

exports["default"] = _default;