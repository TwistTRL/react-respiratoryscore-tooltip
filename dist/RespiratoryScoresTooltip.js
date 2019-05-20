"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _dateFns = require("date-fns");

require("./RespiratoryScoresTooltip.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSVToDisplay = {
  "RA": [],
  "NC": ["NC_Flow", "FiO2", "iNO_Set"],
  "MASK": ["MASK_Flow", "FiO2"],
  "BB": ["NC_Flow", "FiO2"],
  "HFNC": ["HFNC_Flow", "FiO2", "iNO_Set"],
  "CPAP": ["CPAP_PEEP_comb", "FiO2"],
  "BIPAP": ["BIPAP_IPAP", "BIPAP_EPAP", "BIPAP_Rate", "FiO2"],
  "PSV": ["PEEP", "PS", "FiO2", "iNO_Set", "duration"],
  "PCV": ["VT_set_norm", "PIP_comb", "PEEP", "PS", "VR", "FiO2", "iNO_Set", "duration"],
  "VCV": ["VT_set_norm", "PEEP", "PS", "VR", "FiO2", "iNO_Set"],
  "HFOV": ["HFOV_MPAW", "HFOV_Amplitude", "HFOV_Frequency", "FiO2", "iNO_Set"],
  "HFJV": ["FiO2", "HFJV_PEEP", "HFJV_PIP", "HFJV_Rate", "iNO_Set"],
  "ECMO": ["ECMO_Flow_norm"]
};

var TITLE_COLOR = {
  "RA": "#A4D65E",
  "NC": "#A4D65E",
  "MASK": "#A4D65E",
  "BB": "#A4D65E",

  "HFNC": "#41B6E6",
  "CPAP": "#41B6E6",
  "BIPAP": "#41B6E6",

  "PSV": "#FBDB65",
  "PCV": "#FBDB65",
  "VCV": "#FBDB65",

  "HFOV": "#C6579A",
  "HFJV": "#C6579A",

  "ECMO": "#F6323E"
};

var RespiratoryScoresTooltip = function (_PureComponent) {
  _inherits(RespiratoryScoresTooltip, _PureComponent);

  function RespiratoryScoresTooltip() {
    _classCallCheck(this, RespiratoryScoresTooltip);

    return _possibleConstructorReturn(this, (RespiratoryScoresTooltip.__proto__ || Object.getPrototypeOf(RespiratoryScoresTooltip)).apply(this, arguments));
  }

  _createClass(RespiratoryScoresTooltip, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          location = _props.location,
          timeStamp = _props.timeStamp,
          ECMOVariables = _props.ECMOVariables,
          VADVariables = _props.VADVariables,
          respiratoryVariables = _props.respiratoryVariables,
          pageX = _props.pageX,
          pageY = _props.pageY;

      var ECMODisplay = void 0,
          VADDisplay = void 0,
          respiratoryDisplay = null;
      var LocationDisplay = this.getLocationDisplay(location, timeStamp);

      if (ECMOVariables) {
        ECMODisplay = this.getECMODisplay(ECMOVariables);
      }
      if (VADVariables) {
        VADDisplay = this.getVADDisplay(VADVariables);
      }
      if (respiratoryVariables) {
        respiratoryDisplay = this.getRespiratoryDisplay(respiratoryVariables);
      }

      return _react2.default.createElement(
        "div",
        { style: { position: "fixed", zIndex: 9999,
            top: pageY - 50, left: 10 + pageX,
            pointerEvents: "none",
            width: 300,
            borderRadius: 4, padding: 0, margin: 0, overflow: "hidden",
            border: "solid 1px black", boxShadow: "2px 2px 2px black"
          } },
        LocationDisplay,
        ECMODisplay,
        VADDisplay,
        respiratoryDisplay
      );
    }
  }, {
    key: "getLocationDisplay",
    value: function getLocationDisplay(location, timeStamp) {
      return _react2.default.createElement(
        "div",
        { style: { display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#ffe7c9", padding: 5, boxShadow: "0px 0px 5px black", whiteSpace: "nowrap" } },
        _react2.default.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", justifyContent: "center" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "Location: ",
            location
          )
        ),
        _react2.default.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", fontSize: "12px", fontStyle: "italic" } },
          _react2.default.createElement(
            "div",
            { style: { textAlign: "right" } },
            (0, _dateFns.format)(timeStamp, "MMM DD YYYY")
          ),
          _react2.default.createElement(
            "div",
            { style: { textAlign: "right" } },
            (0, _dateFns.format)(timeStamp, "HH:mm:ss")
          )
        )
      );
    }
  }, {
    key: "getECMODisplay",
    value: function getECMODisplay(ECMOVariables) {
      var ECMO_Flow_Rate_Weight_Normalized = ECMOVariables.ECMO_Flow_Rate_Weight_Normalized;

      return _react2.default.createElement(
        "div",
        { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
        _react2.default.createElement(
          "h1",
          { className: "RespiratoryScoresTooltip-title" },
          "ECMO"
        ),
        _react2.default.createElement(
          "table",
          { className: "RespiratoryScoresTooltip-table" },
          _react2.default.createElement(
            "tbody",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { className: "RespiratoryScoresTooltip-table-variableName" },
                "Flow"
              ),
              _react2.default.createElement(
                "td",
                null,
                ECMO_Flow_Rate_Weight_Normalized,
                " mL/kg/min"
              )
            )
          )
        )
      );
    }
  }, {
    key: "getVADDisplay",
    value: function getVADDisplay(VADVariables) {
      var Machine_Type = VADVariables.Machine_Type;

      if (Machine_Type === "Abiomed") {
        var Abiomed_Cardiac_Index = VADVariables["Abiomed Cardiac Index"];
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "VAD"
          ),
          _react2.default.createElement(
            "table",
            { className: "RespiratoryScoresTooltip-table" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Machine"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Machine_Type
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Cardiac Index"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Abiomed_Cardiac_Index
                )
              )
            )
          )
        );
      }
      if (Machine_Type === "Berlin") {
        var Left_Beat_Rate = VADVariables["Berlin Heart Left Beat Rate"];
        var Left_Pump = VADVariables["Berlin Heart Left Beat Rate"];
        var Right_Beat_Rate = VADVariables["Berlin Heart Right Beat Rate"];
        var Right_Pump = VADVariables["Berlin Heart Right Beat Rate"];
        var Membrane_Movement_Left_Ejection = VADVariables["Membrane Movement, Left Ejection"] || "";
        var Membrane_Movement_Left_Filling = VADVariables["Membrane Movement, Left Filling"] || "";
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "VAD"
          ),
          _react2.default.createElement(
            "table",
            { className: "RespiratoryScoresTooltip-table" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Machine"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Machine_Type
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Left Beat Rate"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Left_Beat_Rate
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Left Pump"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Left_Pump
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Right Beat Rate"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Right_Beat_Rate
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Right Pump"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Right_Pump
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Left Ejection"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Membrane_Movement_Left_Ejection.slice(0, 2)
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Left Filling"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Membrane_Movement_Left_Filling.slice(0, 2)
                )
              )
            )
          )
        );
      }
      if (Machine_Type === "HeartWare") {
        var HeartWare_Pump_Flow = VADVariables["HeartWare Pump Flow"];
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "VAD"
          ),
          _react2.default.createElement(
            "table",
            { className: "RespiratoryScoresTooltip-table" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Machine"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Machine_Type
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Flow"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  HeartWare_Pump_Flow
                )
              )
            )
          )
        );
      }
      if (Machine_Type === "Impella") {
        var Impella_Flow_Rate = VADVariables["Impella Flow Rate"];
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "VAD"
          ),
          _react2.default.createElement(
            "table",
            { className: "RespiratoryScoresTooltip-table" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Machine"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Machine_Type
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Flow"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Impella_Flow_Rate
                )
              )
            )
          )
        );
      }
      if (Machine_Type === "Quadrox") {
        var Quadrox_Flow = VADVariables["Quadrox Flow (L/min)"];
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "VAD"
          ),
          _react2.default.createElement(
            "table",
            { className: "RespiratoryScoresTooltip-table" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Machine"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Machine_Type
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Flow"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Quadrox_Flow
                )
              )
            )
          )
        );
      }
      if (Machine_Type === "RotaFlow") {
        var RateFlow_Flow_Measure = VADVariables["RotaFlow Flow Measure (L/min)"];
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "VAD"
          ),
          _react2.default.createElement(
            "table",
            { className: "RespiratoryScoresTooltip-table" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Machine"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Machine_Type
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Flow"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  RateFlow_Flow_Measure
                )
              )
            )
          )
        );
      }
    }
  }, {
    key: "getRespiratoryDisplay",
    value: function getRespiratoryDisplay(respiratoryVariables) {
      var RST = respiratoryVariables.RST;

      if (RST === "PSV") {
        var PIP = respiratoryVariables.PIP,
            PEEP = respiratoryVariables.PEEP,
            FIO2 = respiratoryVariables.FIO2;

        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            respiratoryVariables.RST
          ),
          _react2.default.createElement(
            "table",
            { className: "RespiratoryScoresTooltip-table" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "PIP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  PIP,
                  " cm H",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  ),
                  "O"
                ),
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "FiO",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  )
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  FIO2,
                  "%"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "PEEP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  PEEP,
                  " cm H",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  ),
                  "O"
                )
              )
            )
          )
        );
      }
      return null;
    }
  }]);

  return RespiratoryScoresTooltip;
}(_react.PureComponent);

exports.default = RespiratoryScoresTooltip;