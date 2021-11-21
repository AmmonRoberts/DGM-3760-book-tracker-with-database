"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _book = _interopRequireDefault(require("../models/book.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bookController = {
  getAll: function () {
    var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var books;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _book["default"].find();

            case 2:
              books = _context.sent;
              res.send(books);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getAll(_x, _x2) {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }(),
  getOne: function () {
    var _getOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var key, responseBook;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              key = req.params.key;
              _context2.next = 3;
              return _book["default"].findOne({
                bookKey: key
              });

            case 3:
              responseBook = _context2.sent;

              if (responseBook) {
                res.send(responseBook);
              } else {
                res.status(404).send("Book not found!");
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getOne(_x3, _x4) {
      return _getOne.apply(this, arguments);
    }

    return getOne;
  }(),
  create: function () {
    var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var requestBook;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              requestBook = new _book["default"]({
                bookName: req.body.bookName,
                authorName: req.body.authorName,
                isbn: req.body.isbn,
                bookKey: req.body.bookKey,
                readingList: req.body.readingList,
                favoriteList: req.body.favoriteList,
                completedList: req.body.completedList
              });
              _context3.next = 3;
              return requestBook.save(function (err) {
                if (err) {
                  return res.status(500).json({
                    message: 'Error when creating book',
                    error: err
                  });
                }

                return res.status(201).json(requestBook);
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function create(_x5, _x6) {
      return _create.apply(this, arguments);
    }

    return create;
  }(),
  update: function () {
    var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var key, existingBook;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              key = req.params.key;
              _context4.prev = 1;
              _context4.next = 4;
              return _book["default"].findOne({
                bookKey: key
              });

            case 4:
              existingBook = _context4.sent;
              existingBook.bookName = req.body.bookName;
              existingBook.authorName = req.body.authorName;
              existingBook.isbn = req.body.isbn;
              existingBook.bookKey = req.body.bookKey;
              existingBook.readingList = req.body.readingList;
              existingBook.favoriteList = req.body.favoriteList;
              existingBook.completedList = req.body.completedList;
              _context4.next = 14;
              return existingBook.save();

            case 14:
              res.send(existingBook);
              _context4.next = 20;
              break;

            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](1);
              res.status(404).send("Book not found!");

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 17]]);
    }));

    function update(_x7, _x8) {
      return _update.apply(this, arguments);
    }

    return update;
  }(),
  remove: function () {
    var _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
      var key, response;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              key = req.params.key;
              _context5.next = 3;
              return _book["default"].deleteOne({
                bookKey: key
              });

            case 3:
              response = _context5.sent;

              if (response.deletedCount > 0) {
                res.send("Successfully deleted!");
              } else {
                res.status(404).send("Book not found!");
              }

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function remove(_x9, _x10) {
      return _remove.apply(this, arguments);
    }

    return remove;
  }()
};
var _default = bookController;
exports["default"] = _default;