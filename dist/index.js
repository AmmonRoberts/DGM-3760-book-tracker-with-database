"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var favoritesArray = [];
var readingListArray = [];
var completedArray = [];
var accordion = document.querySelectorAll(".accordion");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (event) {
    var button = event.target;
    button.classList.toggle("active");
    var panel = button.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var search = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var query;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = document.querySelector('#searchText').value;

            if (query != '') {
              fetch("https://openlibrary.org/search.json?q=".concat(query)).then(function (response) {
                return response.json();
              }).then(function (data) {
                var resultsElement = document.querySelector('#searchResults');
                resultsElement.innerHTML = "";
                data.docs.forEach(function (element) {
                  var d = document.createElement("div");
                  d.className = "searchResult";
                  d.setAttribute("bookKey", element.key.slice(7));
                  d.setAttribute("bookTitle", element.title);
                  d.setAttribute("bookAuthor", element.author_name);
                  d.innerHTML = "<h4>".concat(element.title, "</h4>\n                        <p>").concat(element.author_name, "</p>\n                      <div class=\"buttonGroup\">\n                      <button class=\"addFavoriteButton addButton\">Add to Favorites</button>\n                      <button class=\"addListButton addButton\">Add to reading list</button>\n                        <button class=\"addCompleteButton addButton\">Add to completed list</button>\n                      </div>\n                        </div>\n                ");
                  resultsElement.appendChild(d);
                });
              }).then(function (data) {
                var favorites = document.querySelector("#favorites");
                var readingList = document.querySelector("#readingList");
                var completedList = document.querySelector("#completedList");
                document.querySelectorAll(".addFavoriteButton").forEach(function (element) {
                  element.addEventListener('click', function (event) {
                    var element = event.target.parentElement.parentElement;
                    var bookKey = element.getAttribute("bookKey");
                    var bookTitle = element.getAttribute("bookTitle");
                    var bookAuthor = element.getAttribute("bookAuthor");

                    if (!favoritesArray.find(function (_ref2) {
                      var key = _ref2.key;
                      return key === bookKey;
                    })) {
                      var bookObject = {
                        "key": bookKey,
                        "title": bookTitle,
                        "author": bookAuthor,
                        "readingList": false,
                        "favoriteList": true,
                        "completedList": false
                      };
                      favoritesArray.push(bookObject);
                      addToList(bookObject);
                      var d = document.createElement("div");
                      d.className = "searchResult";
                      d.setAttribute("key", bookKey);
                      d.innerHTML = "\n                                    <h4>".concat(bookTitle, "</h4>\n                                    <p>").concat(bookAuthor, "</p>\n                                    ");
                      favorites.appendChild(d);
                    }
                  });
                });
                document.querySelectorAll(".addListButton").forEach(function (element) {
                  element.addEventListener('click', function (event) {
                    var element = event.target.parentElement.parentElement;
                    var bookKey = element.getAttribute("bookKey");
                    var bookTitle = element.getAttribute("bookTitle");
                    var bookAuthor = element.getAttribute("bookAuthor");

                    if (!readingListArray.find(function (_ref3) {
                      var key = _ref3.key;
                      return key === bookKey;
                    })) {
                      var bookObject = {
                        "key": bookKey,
                        "title": bookTitle,
                        "author": bookAuthor,
                        "readingList": true,
                        "favoriteList": false,
                        "completedList": false
                      };
                      favoritesArray.push(bookObject);
                      addToList(bookObject);
                      var d = document.createElement("div");
                      d.className = "searchResult";
                      d.setAttribute("key", bookKey);
                      d.innerHTML = "\n                                        <h4>".concat(bookTitle, "</h4>\n                                        <p>").concat(bookAuthor, "</p>\n                                        \n                                        ");
                      readingList.appendChild(d);
                    }
                  });
                });
                document.querySelectorAll(".addCompleteButton").forEach(function (element) {
                  element.addEventListener('click', function (event) {
                    var element = event.target.parentElement.parentElement;
                    var bookKey = element.getAttribute("bookKey");
                    var bookTitle = element.getAttribute("bookTitle");
                    var bookAuthor = element.getAttribute("bookAuthor");

                    if (!completedArray.find(function (_ref4) {
                      var key = _ref4.key;
                      return key === bookKey;
                    })) {
                      var bookObject = {
                        "key": bookKey,
                        "title": bookTitle,
                        "author": bookAuthor,
                        "readingList": false,
                        "favoriteList": false,
                        "completedList": true
                      };
                      favoritesArray.push(bookObject);
                      addToList(bookObject);
                      var d = document.createElement("div");
                      d.className = "searchResult";
                      d.setAttribute("key", bookKey);
                      d.innerHTML = "\n                                        <h4>".concat(bookTitle, "</h4>\n                                        <p>").concat(bookAuthor, "</p>\n                                       \n                                        <div class=\"star-rating\">\n                                        <div class=\"star-rating__wrap\">\n                                            <input class=\"star-rating__input\" id=\"star-rating-5\" type=\"radio\" name=\"rating\" value=\"5\">\n                                            <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-5\" title=\"5 out of 5 stars\"></label>\n                                            <input class=\"star-rating__input\" id=\"star-rating-4\" type=\"radio\" name=\"rating\" value=\"4\">\n                                            <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-4\" title=\"4 out of 5 stars\"></label>\n                                            <input class=\"star-rating__input\" id=\"star-rating-3\" type=\"radio\" name=\"rating\" value=\"3\">\n                                            <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-3\" title=\"3 out of 5 stars\"></label>\n                                            <input class=\"star-rating__input\" id=\"star-rating-2\" type=\"radio\" name=\"rating\" value=\"2\">\n                                            <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-2\" title=\"2 out of 5 stars\"></label>\n                                            <input class=\"star-rating__input\" id=\"star-rating-1\" type=\"radio\" name=\"rating\" value=\"1\">\n                                            <label class=\"star-rating__ico fa fa-star-o fa-lg\" for=\"star-rating-1\" title=\"1 out of 5 stars\"></label>\n                                        </div>\n                                        </div>\n                                       \n                                        ");
                      completedList.appendChild(d);
                    }
                  });
                });
              })["catch"](function (err) {
                console.log('Something went wrong!', err);
                alert('Please double check your search query!');
              });
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function search() {
    return _ref.apply(this, arguments);
  };
}();

document.querySelector("#search").addEventListener('click', function (event) {
  search();
  event.preventDefault();
});
document.querySelector("#searchText").addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    search();
    event.preventDefault();
  }
});

var addToList = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(book) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("http://localhost:3000/books/".concat(book.key)).then( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response) {
                var responseJson;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!response.ok) {
                          _context2.next = 11;
                          break;
                        }

                        _context2.next = 3;
                        return response.json();

                      case 3:
                        responseJson = _context2.sent;

                        if (responseJson.readingList === "true") {
                          book.readingList = true;
                        }

                        if (responseJson.favoriteList === "true") {
                          book.favoriteList = true;
                        }

                        if (responseJson.completedList === "true") {
                          book.completedList = true;
                        } // let responseJson = response.json()


                        _context2.next = 9;
                        return fetch("http://localhost:3000/books/".concat(book.key), {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            bookName: book.title,
                            authorName: book.author,
                            bookKey: book.key,
                            readingList: book.readingList,
                            favoriteList: book.favoriteList,
                            completedList: book.completedList
                          })
                        });

                      case 9:
                        _context2.next = 13;
                        break;

                      case 11:
                        _context2.next = 13;
                        return fetch("http://localhost:3000/books", {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            bookName: book.title,
                            authorName: book.author,
                            bookKey: book.key,
                            readingList: book.readingList,
                            favoriteList: book.favoriteList,
                            completedList: book.completedList
                          })
                        });

                      case 13:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addToList(_x) {
    return _ref5.apply(this, arguments);
  };
}();

var getAllBooks = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var favorites, readingList, completedList;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            readingListArray = [];
            favoritesArray = [];
            completedArray = [];
            favorites = document.querySelector("#favorites");
            readingList = document.querySelector("#readingList");
            completedList = document.querySelector("#completedList");
            _context5.next = 8;
            return fetch("http://localhost:3000/books").then( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(response) {
                var responseJson;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return response.json();

                      case 2:
                        responseJson = _context4.sent;
                        responseJson.forEach(function (element) {
                          if (element.readingList === "true") {
                            readingListArray.push({
                              "key": element.bookKey,
                              "title": element.bookName,
                              "author": element.authorName,
                              "readingList": element.readingList,
                              "favoriteList": element.favoriteList,
                              "completedList": element.completedList
                            });
                            var d = document.createElement("div");
                            d.className = "searchResult";
                            d.setAttribute("key", element.bookKey);
                            d.innerHTML = "\n                            <h4>".concat(element.bookName, "</h4>\n                            <p>").concat(element.authorName, "</p>\n                            \n                            ");
                            readingList.appendChild(d);
                          }

                          if (element.completedList === "true") {
                            completedArray.push({
                              "key": element.bookKey,
                              "title": element.bookName,
                              "author": element.authorName,
                              "readingList": element.readingList,
                              "favoriteList": element.favoriteList,
                              "completedList": element.completedList
                            });

                            var _d = document.createElement("div");

                            _d.className = "searchResult";

                            _d.setAttribute("key", element.bookKey);

                            _d.innerHTML = "\n                            <h4>".concat(element.bookName, "</h4>\n                            <p>").concat(element.authorName, "</p>\n                            \n                            ");
                            completedList.appendChild(_d);
                          }

                          if (element.favoriteList === "true") {
                            favoritesArray.push({
                              "key": element.bookKey,
                              "title": element.bookName,
                              "author": element.authorName,
                              "readingList": element.readingList,
                              "favoriteList": element.favoriteList,
                              "completedList": element.completedList
                            });

                            var _d2 = document.createElement("div");

                            _d2.className = "searchResult";

                            _d2.setAttribute("key", element.bookKey);

                            _d2.innerHTML = "\n                            <h4>".concat(element.bookName, "</h4>\n                            <p>").concat(element.authorName, "</p>\n                            \n                            ");
                            favorites.appendChild(_d2);
                          }
                        });

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x3) {
                return _ref8.apply(this, arguments);
              };
            }());

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getAllBooks() {
    return _ref7.apply(this, arguments);
  };
}();

getAllBooks();