"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bookController = _interopRequireDefault(require("../controllers/bookController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _bookController["default"].getAll);
router.get('/:key', _bookController["default"].getOne);
router.post('/', _bookController["default"].create);
router.put('/:key', _bookController["default"].update);
router["delete"]('/:key', _bookController["default"].remove);
var _default = router;
exports["default"] = _default;