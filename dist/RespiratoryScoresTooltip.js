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
      var ward = location.ward,
          room = location.room;

      return _react2.default.createElement(
        "div",
        { style: { display: "flex", flexDirection: "row", justifyContent: "space-between",
            padding: 5, boxShadow: "0px 0px 5px black", whiteSpace: "nowrap",
            backgroundColor: ward === "8S" ? "#ff2a22" : "#ffe7c9" } },
        _react2.default.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", justifyContent: "center" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            ward,
            ": ",
            room
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
                  "Device"
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
        var Left_Pump = VADVariables["Berlin Heart Left Pump"];
        var Right_Beat_Rate = VADVariables["Berlin Heart Right Beat Rate"];
        var Right_Pump = VADVariables["Berlin Heart Right Pump"];
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
                  "Device"
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
                  Left_Beat_Rate,
                  " bpm"
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
                  Left_Pump,
                  " mL/kg/min"
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
                  Right_Beat_Rate,
                  " bpm"
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
                  Right_Pump,
                  " mL/kg/min"
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
                  "Device"
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
                  HeartWare_Pump_Flow,
                  " LPM"
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
                  "Device"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Machine_Type,
                  " LPM"
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
                  Impella_Flow_Rate,
                  " LPM"
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
                  "Device"
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
                  Quadrox_Flow,
                  " LPM"
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
                  "Device"
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

      if (RST === "RA") {
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            RST
          )
        );
      }
      if (RST === "MASK") {
        var FiO2 = respiratoryVariables.FiO2;

        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            RST
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
                  "FiO2"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  FiO2,
                  "%"
                )
              )
            )
          )
        );
      }
      if (RST === "BB") {
        var FlowRate = respiratoryVariables["Flow Rate"];
        var _FiO = respiratoryVariables["FiO2"];
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
                  "Flow Rate"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  FlowRate,
                  " LPM"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
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
                  _FiO,
                  "%"
                )
              )
            )
          )
        );
      }
      if (RST === "NC") {
        var _FlowRate = respiratoryVariables["Flow Rate"];
        var _FiO2 = respiratoryVariables["FiO2"];
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
                  "Flow Rate"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _FlowRate,
                  " LPM"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
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
                  _FiO2,
                  "%"
                )
              )
            )
          )
        );
      }
      if (RST === "HFNC") {
        var _FiO3 = respiratoryVariables["FiO2"];
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
                  "FiO2"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _FiO3,
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
      if (RST === "CPAP") {
        var CPAP = respiratoryVariables["CPAP"];
        var CPAPFlow = respiratoryVariables["CPAP Flow"];
        var Mask = respiratoryVariables["Mask"];
        var _FiO4 = respiratoryVariables["FiO2"];
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
                  "CPAP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  CPAP,
                  " cm H",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  ),
                  "O"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "CPAP Flow"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  CPAPFlow,
                  " LPM"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Mask"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Mask
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "FiO2"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _FiO4,
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
      if (RST === "BIPAP") {
        var IPAP = respiratoryVariables["IPAP"];
        var EPAP = respiratoryVariables["EPAP"];
        var Rate = respiratoryVariables["Rate"];
        var RiseTime = respiratoryVariables["Rise Time"];
        var _Mask = respiratoryVariables["Mask"];
        var _FiO5 = respiratoryVariables["FiO2"];
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
                  "IPAP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  IPAP,
                  " cm H",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  ),
                  "O"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "EPAP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  EPAP,
                  " cm H",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  ),
                  "O"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Rate"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Rate,
                  " BPM"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Rise Time"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  RiseTime,
                  " sec"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Mask"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _Mask
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "FiO2"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _FiO5,
                  "%"
                )
              )
            )
          )
        );
      }
      if (RST === "BVM") {
        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            respiratoryVariables.RST
          )
        );
      }
      if (RST === "PSV") {
        var PS = respiratoryVariables.PS;
        var PEEP = respiratoryVariables.PEEP;
        var _FiO6 = respiratoryVariables.FiO2;
        var Tv = respiratoryVariables.Tv;
        var RR = respiratoryVariables.RR;
        var EtCO2 = respiratoryVariables.EtCO2;

        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            respiratoryVariables.RST
          ),
          _react2.default.createElement(
            "div",
            { style: { display: "flex" } },
            _react2.default.createElement(
              "div",
              null,
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
                      "PS"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      PS,
                      " cm H",
                      _react2.default.createElement(
                        "sub",
                        null,
                        "2"
                      ),
                      "O"
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
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "FiO2"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _FiO6,
                      "%"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
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
                      "Tv"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      Tv,
                      " mL"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "RR"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      RR,
                      " BPM"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "EtCO2"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      EtCO2,
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
            )
          )
        );
      }
      if (RST === "PCV") {
        var PIP = respiratoryVariables.PIP;
        var _PEEP = respiratoryVariables.PEEP;
        var VR = respiratoryVariables.VR;
        var _PS = respiratoryVariables.PS;
        var _FiO7 = respiratoryVariables.FiO2;

        var TvMandatory = respiratoryVariables["Tv (mandatory)"];
        var TvSpontaneous = respiratoryVariables["Tv (spontaneous)"];
        var _RR = respiratoryVariables.RR;
        var _EtCO = respiratoryVariables.EtCO2;

        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            respiratoryVariables.RST
          ),
          _react2.default.createElement(
            "div",
            { style: { display: "flex" } },
            _react2.default.createElement(
              "div",
              null,
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
                      _PEEP,
                      " cm H",
                      _react2.default.createElement(
                        "sub",
                        null,
                        "2"
                      ),
                      "O"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "VR"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      VR,
                      " BPM"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "PS"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _PS,
                      " mL"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "FiO2"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _FiO7,
                      " mL"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
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
                      "Tv (mand)"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      TvMandatory,
                      " mL"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "Tv (spont)"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      TvSpontaneous,
                      " BPM"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "RR"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _RR,
                      " cm H",
                      _react2.default.createElement(
                        "sub",
                        null,
                        "2"
                      ),
                      "O"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "EtCO2"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _EtCO,
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
            )
          )
        );
      }
      if (RST === "VCV") {
        var TvSet = respiratoryVariables["Tv (set)"].TvSet;
        var _PEEP2 = respiratoryVariables.PEEP;
        var _PS2 = respiratoryVariables.PS;
        var _FiO8 = respiratoryVariables.FiO2;
        var _PIP = respiratoryVariables.PIP;
        var _RR2 = respiratoryVariables.RR;
        var _EtCO2 = respiratoryVariables.EtCO2;

        return _react2.default.createElement(
          "div",
          { style: { padding: 5, backgroundColor: "#fff8ef", fontSize: "12px", whiteSpace: "nowrap" } },
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            respiratoryVariables.RST
          ),
          _react2.default.createElement(
            "div",
            { style: { display: "flex" } },
            _react2.default.createElement(
              "div",
              null,
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
                      "Tv (set)"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      TvSet,
                      " mL"
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
                      _PEEP2,
                      " cm H",
                      _react2.default.createElement(
                        "sub",
                        null,
                        "2"
                      ),
                      "O"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "PS"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _PS2,
                      " BPM"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "FiO2"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _FiO8,
                      " mL"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
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
                      _PIP,
                      " mL"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "RR"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _RR2,
                      " BPM"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { className: "RespiratoryScoresTooltip-table-variableName" },
                      "EtCO2"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _EtCO2,
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
            )
          )
        );
      }
      if (RST === "HFOV") {
        var MAP = respiratoryVariables.MAP;
        var Amplitude = respiratoryVariables.Amplitude;
        var Frequency = respiratoryVariables.Frequency;
        var Power = respiratoryVariables.Power;
        var _FiO9 = respiratoryVariables.FiO2;
        var Flow = respiratoryVariables.Flow;

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
                  "MAP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  MAP
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Amplitude"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Amplitude
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Frequency"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Frequency,
                  " Hz"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Power"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  Power
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "FiO2"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _FiO9,
                  "%"
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
                  Flow,
                  " LPM"
                )
              )
            )
          )
        );
      }
      if (RST === "HFJV") {
        var HFJVPIP = respiratoryVariables["HFJV PIP"];
        var HFJVRate = respiratoryVariables["HFJV Rate"];
        var HFJViTime = respiratoryVariables["HFJV iTime"];
        var HFJVMAP = respiratoryVariables["HFJV MAP"];
        var HFJVPEEP = respiratoryVariables["HFJV PEEP"];
        var _FiO10 = respiratoryVariables.FiO2;
        var _PIP2 = respiratoryVariables.PIP;
        var _PEEP3 = respiratoryVariables.PEEP;
        var _Rate = respiratoryVariables.Rate;

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
                  "HFJVPIP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  HFJVPIP,
                  " mL"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "HFJVRate"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  HFJVRate,
                  " BPM"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "HFJViTime"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  HFJViTime,
                  " Sec"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "HFJVMAP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  HFJVMAP
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "HFJVPEEP"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  HFJVPEEP,
                  " cm H",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  ),
                  "O"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "FiO2"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _FiO10,
                  "%"
                )
              )
            )
          ),
          _react2.default.createElement(
            "h1",
            { className: "RespiratoryScoresTooltip-title" },
            "CMV"
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
                  _PIP2,
                  " mL"
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
                  _PEEP3,
                  " cm H",
                  _react2.default.createElement(
                    "sub",
                    null,
                    "2"
                  ),
                  "O"
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  { className: "RespiratoryScoresTooltip-table-variableName" },
                  "Rate"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _Rate,
                  " BPM"
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