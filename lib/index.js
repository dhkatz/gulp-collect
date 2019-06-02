"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Filenames = void 0;

var _through = _interopRequireDefault(require("through2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Filenames =
/*#__PURE__*/
function (_Function) {
  _inherits(Filenames, _Function);

  function Filenames() {
    var _this;

    _classCallCheck(this, Filenames);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Filenames).call(this));
    _this.names = new Map();
    _this.DEFAULT = Symbol('default');
    return _possibleConstructorReturn(_this, new Proxy(_assertThisInitialized(_this), {
      // eslint-disable-next-line
      apply: function apply(target, thisArg, args) {
        var _this2;

        return (_this2 = _this).__call__.apply(_this2, _toConsumableArray(args));
      }
    }));
  }

  _createClass(Filenames, [{
    key: "__call__",
    value: function __call__() {
      var _this3 = this;

      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.DEFAULT;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        override: false
      };
      if (typeof name === 'string' && name === 'all') throw new Error("'".concat(name, "' is a reserved namespace and cannot be used!"));

      if (options.override) {
        this.names.set(name, []);
      }

      return _through["default"].obj(function (file, enc, callback) {
        _this3.register(file, name, _objectSpread({}, options, {
          override: false
        }));

        callback(null, file);
      });
    }
    /**
     * Retrieve an array of file names/paths for a given namespace.
     * @param {string | symbol} name Custom file namespace name
     * @param {PathType} type Type of path to retrieve for each file
     */

  }, {
    key: "get",
    value: function get() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.DEFAULT;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'relative';
      if (typeof name === 'string' && name === 'all') return this.names;
      if (!this.names.has(name)) this.names.set(name, []);
      var files = this.names.get(name);

      switch (type) {
        case 'all':
          return files;

        case 'absolute':
          return files.map(function (file) {
            return file.absolute;
          });

        case 'base':
          return files.map(function (file) {
            return file.base;
          });

        case 'relative':
        default:
          return files.map(function (file) {
            return file.relative;
          });
      }
    }
    /**
     * Reset the namespace for the given namespace.
     * @param {string | symbol} name Name of file namespace
     */

  }, {
    key: "forget",
    value: function forget() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.DEFAULT;

      if (typeof name === 'string' && name === 'all') {
        this.names = new Map();
      } else {
        this.names.set(name, []);
      }
    }
  }, {
    key: "register",
    value: function register(file) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.DEFAULT;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        override: false
      };

      if (options.override || !this.names.has(name)) {
        this.names.set(name, []);
      }

      this.names.get(name).push({
        relative: file.relative,
        absolute: file.path,
        base: file.base
      });
    }
  }]);

  return Filenames;
}(_wrapNativeSuper(Function));

exports.Filenames = Filenames;
var filenames = new Filenames();
module.exports = filenames;
var _default = filenames;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJGaWxlbmFtZXMiLCJuYW1lcyIsIk1hcCIsIkRFRkFVTFQiLCJTeW1ib2wiLCJQcm94eSIsImFwcGx5IiwidGFyZ2V0IiwidGhpc0FyZyIsImFyZ3MiLCJfX2NhbGxfXyIsIm5hbWUiLCJvcHRpb25zIiwib3ZlcnJpZGUiLCJFcnJvciIsInNldCIsInRocm91Z2giLCJvYmoiLCJmaWxlIiwiZW5jIiwiY2FsbGJhY2siLCJyZWdpc3RlciIsInR5cGUiLCJoYXMiLCJmaWxlcyIsImdldCIsIm1hcCIsImFic29sdXRlIiwiYmFzZSIsInJlbGF0aXZlIiwicHVzaCIsInBhdGgiLCJGdW5jdGlvbiIsImZpbGVuYW1lcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JhQSxTOzs7OztBQUtULHVCQUFxQjtBQUFBOztBQUFBOztBQUNqQjtBQURpQixVQUpiQyxLQUlhLEdBSnlCLElBQUlDLEdBQUosRUFJekI7QUFBQSxVQUZkQyxPQUVjLEdBRklDLE1BQU0sQ0FBQyxTQUFELENBRVY7QUFHakIsNkNBQU8sSUFBSUMsS0FBSixnQ0FBZ0I7QUFDbkI7QUFDQUMsTUFBQUEsS0FBSyxFQUFFLGVBQUNDLE1BQUQsRUFBZUMsT0FBZixFQUE4QkMsSUFBOUIsRUFBbUQ7QUFBQTs7QUFDdEQsZUFBTyxpQkFBS0MsUUFBTCxrQ0FBaUJELElBQWpCLEVBQVA7QUFDSDtBQUprQixLQUFoQixDQUFQO0FBTUg7Ozs7K0JBRXdHO0FBQUE7O0FBQUEsVUFBekZFLElBQXlGLHVFQUFqRSxLQUFLUixPQUE0RDtBQUFBLFVBQW5EUyxPQUFtRCx1RUFBaEM7QUFBRUMsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FBZ0M7QUFDckcsVUFBSSxPQUFPRixJQUFQLEtBQWdCLFFBQWhCLElBQTRCQSxJQUFJLEtBQUssS0FBekMsRUFBZ0QsTUFBTSxJQUFJRyxLQUFKLFlBQWNILElBQWQsbURBQU47O0FBRWhELFVBQUlDLE9BQU8sQ0FBQ0MsUUFBWixFQUFzQjtBQUNsQixhQUFLWixLQUFMLENBQVdjLEdBQVgsQ0FBZUosSUFBZixFQUFxQixFQUFyQjtBQUNIOztBQUVELGFBQU9LLG9CQUFRQyxHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUF5QkMsR0FBekIsRUFBc0NDLFFBQXRDLEVBQW9GO0FBQ25HLFFBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWNILElBQWQsRUFBb0JQLElBQXBCLG9CQUErQkMsT0FBL0I7QUFBd0NDLFVBQUFBLFFBQVEsRUFBRTtBQUFsRDs7QUFFQU8sUUFBQUEsUUFBUSxDQUFDLElBQUQsRUFBT0YsSUFBUCxDQUFSO0FBQ0gsT0FKTSxDQUFQO0FBS0g7QUFFRDs7Ozs7Ozs7MEJBUXdJO0FBQUEsVUFBN0hQLElBQTZILHVFQUE3RixLQUFLUixPQUF3RjtBQUFBLFVBQS9FbUIsSUFBK0UsdUVBQTlELFVBQThEO0FBQ3BJLFVBQUksT0FBT1gsSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsSUFBSSxLQUFLLEtBQXpDLEVBQWdELE9BQU8sS0FBS1YsS0FBWjtBQUVoRCxVQUFJLENBQUMsS0FBS0EsS0FBTCxDQUFXc0IsR0FBWCxDQUFlWixJQUFmLENBQUwsRUFBMkIsS0FBS1YsS0FBTCxDQUFXYyxHQUFYLENBQWVKLElBQWYsRUFBcUIsRUFBckI7QUFFM0IsVUFBTWEsS0FBSyxHQUFHLEtBQUt2QixLQUFMLENBQVd3QixHQUFYLENBQWVkLElBQWYsQ0FBZDs7QUFFQSxjQUFRVyxJQUFSO0FBQ0ksYUFBSyxLQUFMO0FBQ0ksaUJBQU9FLEtBQVA7O0FBQ0osYUFBSyxVQUFMO0FBQ0ksaUJBQU9BLEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNSLElBQUQ7QUFBQSxtQkFBd0JBLElBQUksQ0FBQ1MsUUFBN0I7QUFBQSxXQUFWLENBQVA7O0FBQ0osYUFBSyxNQUFMO0FBQ0ksaUJBQU9ILEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNSLElBQUQ7QUFBQSxtQkFBd0JBLElBQUksQ0FBQ1UsSUFBN0I7QUFBQSxXQUFWLENBQVA7O0FBQ0osYUFBSyxVQUFMO0FBQ0E7QUFDSSxpQkFBT0osS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ1IsSUFBRDtBQUFBLG1CQUF3QkEsSUFBSSxDQUFDVyxRQUE3QjtBQUFBLFdBQVYsQ0FBUDtBQVRSO0FBV0g7QUFFRDs7Ozs7Ozs2QkFJa0U7QUFBQSxVQUFwRGxCLElBQW9ELHVFQUFwQixLQUFLUixPQUFlOztBQUM5RCxVQUFJLE9BQU9RLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEJBLElBQUksS0FBSyxLQUF6QyxFQUFnRDtBQUM1QyxhQUFLVixLQUFMLEdBQWEsSUFBSUMsR0FBSixFQUFiO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0QsS0FBTCxDQUFXYyxHQUFYLENBQWVKLElBQWYsRUFBcUIsRUFBckI7QUFDSDtBQUNKOzs7NkJBRWVPLEksRUFBNEc7QUFBQSxVQUFwRlAsSUFBb0YsdUVBQTVELEtBQUtSLE9BQXVEO0FBQUEsVUFBOUNTLE9BQThDLHVFQUEzQjtBQUFFQyxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUEyQjs7QUFDeEgsVUFBSUQsT0FBTyxDQUFDQyxRQUFSLElBQW9CLENBQUMsS0FBS1osS0FBTCxDQUFXc0IsR0FBWCxDQUFlWixJQUFmLENBQXpCLEVBQWdEO0FBQzVDLGFBQUtWLEtBQUwsQ0FBV2MsR0FBWCxDQUFlSixJQUFmLEVBQXFCLEVBQXJCO0FBQ0g7O0FBRUQsV0FBS1YsS0FBTCxDQUFXd0IsR0FBWCxDQUFlZCxJQUFmLEVBQXFCbUIsSUFBckIsQ0FBMEI7QUFDdEJELFFBQUFBLFFBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQURPO0FBRXRCRixRQUFBQSxRQUFRLEVBQUVULElBQUksQ0FBQ2EsSUFGTztBQUd0QkgsUUFBQUEsSUFBSSxFQUFFVixJQUFJLENBQUNVO0FBSFcsT0FBMUI7QUFLSDs7OzttQkFoRjBCSSxROzs7QUFtRi9CLElBQU1DLFNBQVMsR0FBRyxJQUFJakMsU0FBSixFQUFsQjtBQUVBa0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixTQUFqQjtlQUVlQSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZpbnlsIGZyb20gJ3ZpbnlsJztcbmltcG9ydCB0aHJvdWdoIGZyb20gJ3Rocm91Z2gyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ3N0cmVhbSc7XG5cbmV4cG9ydCB0eXBlIFBhdGhUeXBlID0gJ3JlbGF0aXZlJyB8ICdhbGwnIHwgJ2Fic29sdXRlJyB8ICdiYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlIHtcbiAgICByZWxhdGl2ZTogc3RyaW5nO1xuICAgIGFic29sdXRlOiBzdHJpbmc7XG4gICAgYmFzZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGV4aXN0aW5nIGZpbGVzIGluIHRoZSBuYW1lc3BhY2UgbGlzdFxuICAgICAqL1xuICAgIG92ZXJyaWRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVuYW1lcyB7XG4gICAgKG5hbWU/OiBzdHJpbmcgfCBzeW1ib2wsIG9wdGlvbnM/OiBPcHRpb25zKTogVHJhbnNmb3JtO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZW5hbWVzIGV4dGVuZHMgRnVuY3Rpb24ge1xuICAgIHByaXZhdGUgbmFtZXM6IE1hcDxzdHJpbmcgfCBzeW1ib2wsIEZpbGVbXT4gPSBuZXcgTWFwKCk7XG5cbiAgICBwdWJsaWMgREVGQVVMVDogc3ltYm9sID0gU3ltYm9sKCdkZWZhdWx0Jyk7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRoaXMsIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgYXBwbHk6ICh0YXJnZXQ6IHRoaXMsIHRoaXNBcmc6IHRoaXMsIGFyZ3M6IGFueVtdKTogYW55ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2NhbGxfXyguLi5hcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBfX2NhbGxfXyhuYW1lOiBzdHJpbmcgfCBzeW1ib2wgPSB0aGlzLkRFRkFVTFQsIG9wdGlvbnM6IE9wdGlvbnMgPSB7IG92ZXJyaWRlOiBmYWxzZSB9KTogVHJhbnNmb3JtIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBuYW1lID09PSAnYWxsJykgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgYSByZXNlcnZlZCBuYW1lc3BhY2UgYW5kIGNhbm5vdCBiZSB1c2VkIWApO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm92ZXJyaWRlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVzLnNldChuYW1lLCBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhyb3VnaC5vYmooKGZpbGU6IHZpbnlsLlN0cmVhbUZpbGUsIGVuYzogc3RyaW5nLCBjYWxsYmFjazogdGhyb3VnaC5UcmFuc2Zvcm1DYWxsYmFjayk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcihmaWxlLCBuYW1lLCB7IC4uLm9wdGlvbnMsIG92ZXJyaWRlOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZmlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIGFuIGFycmF5IG9mIGZpbGUgbmFtZXMvcGF0aHMgZm9yIGEgZ2l2ZW4gbmFtZXNwYWNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgc3ltYm9sfSBuYW1lIEN1c3RvbSBmaWxlIG5hbWVzcGFjZSBuYW1lXG4gICAgICogQHBhcmFtIHtQYXRoVHlwZX0gdHlwZSBUeXBlIG9mIHBhdGggdG8gcmV0cmlldmUgZm9yIGVhY2ggZmlsZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQobmFtZTogJ2FsbCcsIHR5cGU/OiBQYXRoVHlwZSk6IE1hcDxzdHJpbmcgfCBzeW1ib2wsIEZpbGVbXT47XG4gICAgcHVibGljIGdldChuYW1lPzogc3RyaW5nIHwgc3ltYm9sLCB0eXBlPzogUGF0aFR5cGUpOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyB8IHN5bWJvbCwgdHlwZTogJ2FsbCcpOiBGaWxlW107XG4gICAgcHVibGljIGdldChuYW1lOiAnYWxsJyB8IHN0cmluZyB8IHN5bWJvbCA9IHRoaXMuREVGQVVMVCwgdHlwZTogUGF0aFR5cGUgPSAncmVsYXRpdmUnKTogTWFwPHN0cmluZyB8IHN5bWJvbCwgRmlsZVtdPiB8IHN0cmluZ1tdIHwgRmlsZVtdIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBuYW1lID09PSAnYWxsJykgcmV0dXJuIHRoaXMubmFtZXM7XG5cbiAgICAgICAgaWYgKCF0aGlzLm5hbWVzLmhhcyhuYW1lKSkgdGhpcy5uYW1lcy5zZXQobmFtZSwgW10pO1xuXG4gICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5uYW1lcy5nZXQobmFtZSk7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlcztcbiAgICAgICAgICAgIGNhc2UgJ2Fic29sdXRlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZXMubWFwKChmaWxlOiBGaWxlKTogc3RyaW5nID0+IGZpbGUuYWJzb2x1dGUpO1xuICAgICAgICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVzLm1hcCgoZmlsZTogRmlsZSk6IHN0cmluZyA9PiBmaWxlLmJhc2UpO1xuICAgICAgICAgICAgY2FzZSAncmVsYXRpdmUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZXMubWFwKChmaWxlOiBGaWxlKTogc3RyaW5nID0+IGZpbGUucmVsYXRpdmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIG5hbWVzcGFjZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IHN5bWJvbH0gbmFtZSBOYW1lIG9mIGZpbGUgbmFtZXNwYWNlXG4gICAgICovXG4gICAgcHVibGljIGZvcmdldChuYW1lOiAnYWxsJyB8IHN0cmluZyB8IHN5bWJvbCA9IHRoaXMuREVGQVVMVCk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIG5hbWUgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uYW1lcy5zZXQobmFtZSwgW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKGZpbGU6IHZpbnlsLlN0cmVhbUZpbGUsIG5hbWU6IHN0cmluZyB8IHN5bWJvbCA9IHRoaXMuREVGQVVMVCwgb3B0aW9uczogT3B0aW9ucyA9IHsgb3ZlcnJpZGU6IGZhbHNlIH0pOiB2b2lkIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub3ZlcnJpZGUgfHwgIXRoaXMubmFtZXMuaGFzKG5hbWUpKSAge1xuICAgICAgICAgICAgdGhpcy5uYW1lcy5zZXQobmFtZSwgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYW1lcy5nZXQobmFtZSkucHVzaCh7XG4gICAgICAgICAgICByZWxhdGl2ZTogZmlsZS5yZWxhdGl2ZSxcbiAgICAgICAgICAgIGFic29sdXRlOiBmaWxlLnBhdGgsXG4gICAgICAgICAgICBiYXNlOiBmaWxlLmJhc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgZmlsZW5hbWVzID0gbmV3IEZpbGVuYW1lcygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGVuYW1lcztcblxuZXhwb3J0IGRlZmF1bHQgZmlsZW5hbWVzO1xuIl19