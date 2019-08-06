"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _plotUtils = require("plot-utils");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSV_X_KEY = "TIME";
var LOCATION_START_KEY = "START";
var LOCATION_END_KEY = "END";

var RespiratoryScoresTooltipSelector = function (_Component) {
  _inherits(RespiratoryScoresTooltipSelector, _Component);

  function RespiratoryScoresTooltipSelector() {
    _classCallCheck(this, RespiratoryScoresTooltipSelector);

    return _possibleConstructorReturn(this, (RespiratoryScoresTooltipSelector.__proto__ || Object.getPrototypeOf(RespiratoryScoresTooltipSelector)).apply(this, arguments));
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
      var _props = this.props,
          hoveringPosition = _props.hoveringPosition,
          width = _props.width,
          minX = _props.minX,
          maxX = _props.maxX,
          location = _props.location,
          respiratorySupportVariable = _props.respiratorySupportVariable;

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
      for (var rec in rsv) {
        if (rec[RSV_X_KEY] <= dataX) {
          ret = rec;
        }
        if (rec[RSV_X_KEY] > dataX) {
          break;
        }
      }
      return ret;
    }
  }, {
    key: "getCurrentLocation",
    value: function getCurrentLocation(location, dataX) {
      var ret = null;
      for (var l in location) {
        if (l[LOCATION_START_KEY] <= dataX && dataX <= l[LOCATION_END_KEY]) {
          ret = l;
          break;
        }
      }
      return ret;
    }
  }]);

  return RespiratoryScoresTooltipSelector;
}(_react.Component);

exports.default = RespiratoryScoresTooltipSelector;