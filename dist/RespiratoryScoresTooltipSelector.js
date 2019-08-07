"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _plotUtils = require("plot-utils");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RSV_X_KEY = "TIME";
var LOCATION_START_KEY = "START";
var LOCATION_END_KEY = "END";

var RespiratoryScoresTooltipSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(RespiratoryScoresTooltipSelector, _Component);

  function RespiratoryScoresTooltipSelector() {
    _classCallCheck(this, RespiratoryScoresTooltipSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(RespiratoryScoresTooltipSelector).apply(this, arguments));
  }

  _createClass(RespiratoryScoresTooltipSelector, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateTooltip();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateTooltip();
    }
  }, {
    key: "updateTooltip",
    value: function updateTooltip() {
      var selectHandler = this.props.selectHandler;
      var _this$props = this.props,
          hoveringPosition = _this$props.hoveringPosition,
          width = _this$props.width,
          minX = _this$props.minX,
          maxX = _this$props.maxX,
          location = _this$props.location,
          respiratorySupportVariable = _this$props.respiratorySupportVariable;

      if (hoveringPosition === null) {
        var dataX = null;
        var selectedLocationID = null;
        var selectedRSVID = null;
        var hoveringClientX = null;
        var hoveringClientY = null;
        selectHandler(dataX, selectedLocationID, selectedRSVID, hoveringClientX, hoveringClientY);
      } else {
        var _dataX = (0, _plotUtils.fromDomXCoord_Linear)(width, minX, maxX, hoveringPosition["domX"]);

        var selectedRSV = this.getLeftOrRightRSV(respiratorySupportVariable, _dataX);

        var _selectedRSVID = selectedRSV ? selectedRSV["ID"] : null;

        var selectedLocation = this.getCurrentLocation(location, _dataX);

        var _selectedLocationID = selectedLocation ? selectedLocation["ID"] : null;

        var _hoveringClientX = hoveringPosition["clientX"];
        var _hoveringClientY = hoveringPosition["clientY"];
        selectHandler(_dataX, _selectedLocationID, _selectedRSVID, _hoveringClientX, _hoveringClientY);
      }
    }
  }, {
    key: "getLeftOrRightRSV",
    value: function getLeftOrRightRSV(rsv, dataX) {
      if (rsv.length === 0) {
        return null;
      }

      var ret = rsv[0];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = rsv[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var rec = _step.value;

          if (rec[RSV_X_KEY] <= dataX) {
            ret = rec;
          }

          if (rec[RSV_X_KEY] > dataX) {
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return ret;
    }
  }, {
    key: "getCurrentLocation",
    value: function getCurrentLocation(location, dataX) {
      var ret = null;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = location[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var l = _step2.value;

          if (l[LOCATION_START_KEY] <= dataX && dataX <= l[LOCATION_END_KEY]) {
            ret = l;
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return ret;
    }
  }]);

  return RespiratoryScoresTooltipSelector;
}(_react.Component);

var _default = RespiratoryScoresTooltipSelector;
exports.default = _default;