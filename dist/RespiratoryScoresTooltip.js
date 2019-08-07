"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateFns = require("date-fns");

require("./RespiratoryScoresTooltip.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// CSS


var UNIT_MAP = {
  "AIRWAY_ASSESSMENT": null,
  "APRV_PHIGH": "cm H2O",
  "APRV_PLOW": "cm H2O",
  "APRV_PS": "cm H2O",
  "BIPAP_EPAP": "cm H2O",
  "BIPAP_IPAP": "cm H2O",
  "BIPAP_RATE": "BPM",
  "C_STAT": "mL/cm H2O",
  "CPAP": "cm H2O",
  "CPAP_FLOW": "LPM",
  "ETCO2": "mmHg",
  "ETT_SIZE": "mm",
  "FIO2": "%",
  "FLOW_RATE": "LPM",
  "HE": "%",
  "HFJV_ITIME": "sec",
  "HFJV_MAP": "cm H2O",
  "HFJV_MONITORED_PEEP": "cm H2O",
  "HFJV_PIP": "cm H2O",
  "HFJV_RATE": "BPM",
  "HFNC": "LPM",
  "HFOV_AMPLITUDE": "cm H2O",
  "HFOV_BIAS_FLOW": "LPM",
  "HFOV_FREQUENCY": "Hz",
  "HFOV_ITIME": "%",
  "HFOV_MODEL": null,
  "HFOV_POWER": "cm H2O",
  "INO_DOSE": "PPM",
  "ITIME": "sec",
  "MAP": "cm H2O",
  "MASK": null,
  "MODE": null,
  "MVE": "mL",
  "NAVA": null,
  "OXYGEN_FIO2_DELIVERY_DEVICE": null,
  "OXYGEN_LMIN_DELIVERY_DEVICE": null,
  "OXYGEN_SOURCE": null,
  "PEEP": "cm H2O",
  "PIP": "cm H2O",
  "PPLAT": "cm H2O",
  "PS": "cm H2O",
  "RESPIRATORY_RATE": "RPM",
  "RISE_TIME": "sec",
  "TV": "mL",
  "TV_MAND": "mL",
  "TV_SPONT": "mL",
  "VENT_RATE": "RPM"
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
          timeStamp = _props.timeStamp,
          location = _props.location,
          ECMOVADVariable = _props.ECMOVADVariable,
          respiratorySuppportVariable = _props.respiratorySuppportVariable,
          clientX = _props.clientX,
          clientY = _props.clientY;

      var LocationDisplay = this.getLocationTimeDisplay(location, timeStamp);
      var ECMOVADDisplay = void 0,
          respiratorySupportDisplay = null;

      if (respiratorySuppportVariable) {
        respiratorySupportDisplay = this.getRespiratorySupportDisplay(respiratorySuppportVariable);
      }

      if (ECMOVADVariable) {
        //ECMOVADDisplay =  this.getECMOVADDisplay(ECMOVADVariable);
      }

      return _react2.default.createElement(
        "div",
        { className: "RespiratoryScoresTooltip",
          style: { position: "fixed", zIndex: 9999,
            top: clientY - 50, left: 10 + clientX
          } },
        LocationDisplay,
        respiratorySupportDisplay
      );
    }
  }, {
    key: "getLocationTimeDisplay",
    value: function getLocationTimeDisplay(location, timeStamp) {
      var locationString = "Unknown";
      var backgroundColor = "lightgrey";
      if (location !== null) {
        var ward = location.ward,
            room = location.room;

        locationString = ward + ": " + room;
        backgroundColor = ward === "8S" ? "#ff2a22" : "#ffe7c9";
      }
      return _react2.default.createElement(
        "div",
        { className: "RespiratoryScoresTooltip-LocationTime",
          style: { backgroundColor: backgroundColor } },
        _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-LocationTime-Location" },
          _react2.default.createElement(
            "h1",
            null,
            locationString
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-LocationTime-Time" },
          _react2.default.createElement(
            "i",
            null,
            (0, _dateFns.format)(timeStamp, "MMM DD YYYY")
          ),
          _react2.default.createElement(
            "i",
            null,
            (0, _dateFns.format)(timeStamp, "HH:mm:ss")
          )
        )
      );
    }
  }, {
    key: "generateTableRow",
    value: function generateTableRow(title, value, unit) {
      if (value === null) {
        return null;
      }
      if (unit !== null) {
        return _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "td",
            null,
            title
          ),
          _react2.default.createElement(
            "td",
            null,
            _react2.default.createElement(
              "strong",
              null,
              value
            ),
            _react2.default.createElement(
              "small",
              null,
              unit
            )
          )
        );
      } else {
        return _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "td",
            null,
            title
          ),
          _react2.default.createElement(
            "td",
            null,
            _react2.default.createElement(
              "strong",
              null,
              value
            )
          )
        );
      }
    }
  }, {
    key: "getRespiratorySupportDisplay",
    value: function getRespiratorySupportDisplay(respiratorySupportVariable) {
      if (respiratorySupportVariable === null) {
        return null;
      }
      var RST = respiratorySupportVariable.RST;

      if (RST === "RA") {
        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            RST
          )
        );
      }
      if (RST === "MASK") {
        var MASK = respiratorySupportVariable.MASK,
            PIP = respiratorySupportVariable.PIP,
            PEEP = respiratorySupportVariable.PEEP,
            FLOW_RATE = respiratorySupportVariable.FLOW_RATE,
            FIO2 = respiratorySupportVariable.FIO2,
            INO_DOSE = respiratorySupportVariable.INO_DOSE;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("Mask", MASK, UNIT_MAP["MASK"]),
              this.generateTableRow("PIP", PIP, UNIT_MAP["PIP"]),
              this.generateTableRow("PEEP", PEEP, UNIT_MAP["PEEP"]),
              this.generateTableRow("Flow Rate", FLOW_RATE, UNIT_MAP["FLOW_RATE"]),
              this.generateTableRow("FiO2", FIO2, UNIT_MAP["FIO2"]),
              this.generateTableRow("iNO Dose", INO_DOSE, UNIT_MAP["INO_DOSE"])
            )
          )
        );
      }
      if (RST === "BB") {
        var _MASK = respiratorySupportVariable.MASK,
            _FLOW_RATE = respiratorySupportVariable.FLOW_RATE,
            _FIO = respiratorySupportVariable.FIO2;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("Mask", _MASK, UNIT_MAP["MASK"]),
              this.generateTableRow("Flow Rate", _FLOW_RATE, UNIT_MAP["FLOW_RATE"]),
              this.generateTableRow("FiO2", _FIO, UNIT_MAP["FIO2"])
            )
          )
        );
      }
      if (RST === "NC") {
        var _FLOW_RATE2 = respiratorySupportVariable.FLOW_RATE,
            _FIO2 = respiratorySupportVariable.FIO2,
            _INO_DOSE = respiratorySupportVariable.INO_DOSE;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("Flow Rate", _FLOW_RATE2, UNIT_MAP["FLOW_RATE"]),
              this.generateTableRow("FiO2", _FIO2, UNIT_MAP["FIO2"]),
              this.generateTableRow("iNO Dose", _INO_DOSE, UNIT_MAP["INO_DOSE"])
            )
          )
        );
      }
      if (RST === "HFNC") {
        var _FLOW_RATE3 = respiratorySupportVariable.FLOW_RATE,
            _FIO3 = respiratorySupportVariable.FIO2,
            _INO_DOSE2 = respiratorySupportVariable.INO_DOSE,
            HE = respiratorySupportVariable.HE;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("Flow Rate", _FLOW_RATE3, UNIT_MAP["FLOW_RATE"]),
              this.generateTableRow("FiO2", _FIO3, UNIT_MAP["FIO2"]),
              this.generateTableRow("iNO Dose", _INO_DOSE2, UNIT_MAP["INO_DOSE"]),
              this.generateTableRow("He", HE, UNIT_MAP["HE"])
            )
          )
        );
      }
      if (RST === "CPAP") {
        var _MASK2 = respiratorySupportVariable.MASK,
            CPAP = respiratorySupportVariable.CPAP,
            CPAP_FLOW = respiratorySupportVariable.CPAP_FLOW,
            _FIO4 = respiratorySupportVariable.FIO2,
            _INO_DOSE3 = respiratorySupportVariable.INO_DOSE,
            _HE = respiratorySupportVariable.HE;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("Mask", _MASK2, UNIT_MAP["MASK"]),
              this.generateTableRow("CPAP", CPAP, UNIT_MAP["CPAP"]),
              this.generateTableRow("CPAP Flow", CPAP_FLOW, UNIT_MAP["CPAP_FLOW"]),
              this.generateTableRow("FiO2", _FIO4, UNIT_MAP["FIO2"]),
              this.generateTableRow("iNO Dose", _INO_DOSE3, UNIT_MAP["INO_DOSE"]),
              this.generateTableRow("He", _HE, UNIT_MAP["HE"])
            )
          )
        );
      }
      if (RST === "BIPAP") {
        var _MASK3 = respiratorySupportVariable.MASK,
            BIPAP_IPAP = respiratorySupportVariable.BIPAP_IPAP,
            BIPAP_EPAP = respiratorySupportVariable.BIPAP_EPAP,
            BIPAP_RATE = respiratorySupportVariable.BIPAP_RATE,
            RISE_TIME = respiratorySupportVariable.RISE_TIME,
            _FIO5 = respiratorySupportVariable.FIO2,
            _INO_DOSE4 = respiratorySupportVariable.INO_DOSE,
            _HE2 = respiratorySupportVariable.HE;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("Mask", _MASK3, UNIT_MAP["MASK"]),
              this.generateTableRow("IPAP", BIPAP_IPAP, UNIT_MAP["BIPAP_IPAP"]),
              this.generateTableRow("EPAP", BIPAP_EPAP, UNIT_MAP["BIPAP_EPAP"]),
              this.generateTableRow("Rate", BIPAP_RATE, UNIT_MAP["BIPAP_RATE"]),
              this.generateTableRow("Rise Time", RISE_TIME, UNIT_MAP["RISE_TIME"]),
              this.generateTableRow("FiO2", _FIO5, UNIT_MAP["FIO2"]),
              this.generateTableRow("iNO Dose", _INO_DOSE4, UNIT_MAP["INO_DOSE"]),
              this.generateTableRow("He", _HE2, UNIT_MAP["HE"])
            )
          )
        );
      }
      if (RST === "BVM") {
        var ETT_SIZE = respiratorySupportVariable.ETT_SIZE,
            _PIP = respiratorySupportVariable.PIP,
            _PEEP = respiratorySupportVariable.PEEP,
            _FIO6 = respiratorySupportVariable.FIO2,
            _INO_DOSE5 = respiratorySupportVariable.INO_DOSE,
            _HE3 = respiratorySupportVariable.HE;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("ETT Size", ETT_SIZE, UNIT_MAP["ETT_SIZE"]),
              this.generateTableRow("PIP", _PIP, UNIT_MAP["PIP"]),
              this.generateTableRow("PEEP", _PEEP, UNIT_MAP["PEEP"]),
              this.generateTableRow("FiO2", _FIO6, UNIT_MAP["FIO2"]),
              this.generateTableRow("iNO Dose", _INO_DOSE5, UNIT_MAP["INO_DOSE"]),
              this.generateTableRow("He", _HE3, UNIT_MAP["HE"])
            )
          )
        );
      }
      if (RST === "PSV") {
        var _ETT_SIZE = respiratorySupportVariable.ETT_SIZE,
            PS = respiratorySupportVariable.PS,
            _PEEP2 = respiratorySupportVariable.PEEP,
            MAP = respiratorySupportVariable.MAP,
            _FIO7 = respiratorySupportVariable.FIO2,
            _INO_DOSE6 = respiratorySupportVariable.INO_DOSE,
            _HE4 = respiratorySupportVariable.HE,
            ETCO2 = respiratorySupportVariable.ETCO2,
            TV = respiratorySupportVariable.TV,
            TV_SPONT = respiratorySupportVariable.TV_SPONT,
            RESPIRATORY_RATE = respiratorySupportVariable.RESPIRATORY_RATE,
            C_STAT = respiratorySupportVariable.C_STAT;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "div",
            { className: "RespiratoryScoresTooltip-RespiratorySupport-DualTable" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("ETT Size", _ETT_SIZE, UNIT_MAP["ETT_SIZE"]),
                  this.generateTableRow("PS", PS, UNIT_MAP["PS"]),
                  this.generateTableRow("PEEP", _PEEP2, UNIT_MAP["PEEP"]),
                  this.generateTableRow("MAP", MAP, UNIT_MAP["MAP"]),
                  this.generateTableRow("FiO2", _FIO7, UNIT_MAP["FIO2"]),
                  this.generateTableRow("iNO Dose", _INO_DOSE6, UNIT_MAP["INO_DOSE"]),
                  this.generateTableRow("He", _HE4, UNIT_MAP["HE"])
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("EtCO2", ETCO2, UNIT_MAP["ETCO2"]),
                  this.generateTableRow("TV", TV, UNIT_MAP["TV"]),
                  this.generateTableRow("TV(spont)", TV_SPONT, UNIT_MAP["TV_SPONT"]),
                  this.generateTableRow("Resp Rate", RESPIRATORY_RATE, UNIT_MAP["RESPIRATORY_RATE"]),
                  this.generateTableRow("Cstat", C_STAT, UNIT_MAP["C_STAT"])
                )
              )
            )
          )
        );
      }
      if (RST === "PCV") {
        var _ETT_SIZE2 = respiratorySupportVariable.ETT_SIZE,
            _PIP2 = respiratorySupportVariable.PIP,
            _PEEP3 = respiratorySupportVariable.PEEP,
            _PS = respiratorySupportVariable.PS,
            VENT_RATE = respiratorySupportVariable.VENT_RATE,
            ITIME = respiratorySupportVariable.ITIME,
            _MAP = respiratorySupportVariable.MAP,
            _FIO8 = respiratorySupportVariable.FIO2,
            _INO_DOSE7 = respiratorySupportVariable.INO_DOSE,
            _HE5 = respiratorySupportVariable.HE,
            _ETCO = respiratorySupportVariable.ETCO2,
            _TV = respiratorySupportVariable.TV,
            TV_MAND = respiratorySupportVariable.TV_MAND,
            _TV_SPONT = respiratorySupportVariable.TV_SPONT,
            _RESPIRATORY_RATE = respiratorySupportVariable.RESPIRATORY_RATE,
            _C_STAT = respiratorySupportVariable.C_STAT,
            APRV_PHIGH = respiratorySupportVariable.APRV_PHIGH,
            APRV_PLOW = respiratorySupportVariable.APRV_PLOW,
            APRV_PS = respiratorySupportVariable.APRV_PS;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "div",
            { className: "RespiratoryScoresTooltip-RespiratorySupport-DualTable" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("ETT Size", _ETT_SIZE2, UNIT_MAP["ETT_SIZE"]),
                  this.generateTableRow("PIP", _PIP2, UNIT_MAP["PIP"]),
                  this.generateTableRow("PEEP", _PEEP3, UNIT_MAP["PEEP"]),
                  this.generateTableRow("PS", _PS, UNIT_MAP["PS"]),
                  this.generateTableRow("Vent Rate", VENT_RATE, UNIT_MAP["VENT_RATE"]),
                  this.generateTableRow("iTime", ITIME, UNIT_MAP["ITIME"]),
                  this.generateTableRow("MAP", _MAP, UNIT_MAP["MAP"]),
                  this.generateTableRow("FiO2", _FIO8, UNIT_MAP["FIO2"]),
                  this.generateTableRow("iNO Dose", _INO_DOSE7, UNIT_MAP["INO_DOSE"]),
                  this.generateTableRow("He", _HE5, UNIT_MAP["HE"])
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("EtCO2", _ETCO, UNIT_MAP["ETCO2"]),
                  this.generateTableRow("TV", _TV, UNIT_MAP["TV"]),
                  this.generateTableRow("TV(mand)", TV_MAND, UNIT_MAP["TV_MAND"]),
                  this.generateTableRow("TV(spont)", _TV_SPONT, UNIT_MAP["TV_SPONT"]),
                  this.generateTableRow("Resp Rate", _RESPIRATORY_RATE, UNIT_MAP["RESPIRATORY_RATE"]),
                  this.generateTableRow("Cstat", _C_STAT, UNIT_MAP["C_STAT"]),
                  this.generateTableRow("APRV Phigh", APRV_PHIGH, UNIT_MAP["APRV_PHIGH"]),
                  this.generateTableRow("APRV Plow", APRV_PLOW, UNIT_MAP["APRV_PLOW"]),
                  this.generateTableRow("APRV PS", APRV_PS, UNIT_MAP["APRV_PS"])
                )
              )
            )
          )
        );
      }
      if (RST === "VCV") {
        var _ETT_SIZE3 = respiratorySupportVariable.ETT_SIZE,
            _TV_MAND = respiratorySupportVariable.TV_MAND,
            PPLAT = respiratorySupportVariable.PPLAT,
            _PEEP4 = respiratorySupportVariable.PEEP,
            _PS2 = respiratorySupportVariable.PS,
            _VENT_RATE = respiratorySupportVariable.VENT_RATE,
            _ITIME = respiratorySupportVariable.ITIME,
            _MAP2 = respiratorySupportVariable.MAP,
            _FIO9 = respiratorySupportVariable.FIO2,
            _INO_DOSE8 = respiratorySupportVariable.INO_DOSE,
            _HE6 = respiratorySupportVariable.HE,
            _ETCO2 = respiratorySupportVariable.ETCO2,
            _PIP3 = respiratorySupportVariable.PIP,
            _TV_SPONT2 = respiratorySupportVariable.TV_SPONT,
            _RESPIRATORY_RATE2 = respiratorySupportVariable.RESPIRATORY_RATE,
            _C_STAT2 = respiratorySupportVariable.C_STAT;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "div",
            { className: "RespiratoryScoresTooltip-RespiratorySupport-DualTable" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("ETT Size", _ETT_SIZE3, UNIT_MAP["ETT_SIZE"]),
                  this.generateTableRow("TV(mand)", _TV_MAND, UNIT_MAP["TV_MAND"]),
                  this.generateTableRow("Pplat", PPLAT, UNIT_MAP["PPLAT"]),
                  this.generateTableRow("PEEP", _PEEP4, UNIT_MAP["PEEP"]),
                  this.generateTableRow("PS", _PS2, UNIT_MAP["PS"]),
                  this.generateTableRow("Vent Rate", _VENT_RATE, UNIT_MAP["VENT_RATE"]),
                  this.generateTableRow("iTime", _ITIME, UNIT_MAP["ITIME"]),
                  this.generateTableRow("MAP", _MAP2, UNIT_MAP["MAP"]),
                  this.generateTableRow("FiO2", _FIO9, UNIT_MAP["FIO2"]),
                  this.generateTableRow("iNO Dose", _INO_DOSE8, UNIT_MAP["INO_DOSE"]),
                  this.generateTableRow("He", _HE6, UNIT_MAP["HE"])
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("EtCO2", _ETCO2, UNIT_MAP["ETCO2"]),
                  this.generateTableRow("PIP", _PIP3, UNIT_MAP["PIP"]),
                  this.generateTableRow("TV(spont)", _TV_SPONT2, UNIT_MAP["TV_SPONT"]),
                  this.generateTableRow("Resp Rate", _RESPIRATORY_RATE2, UNIT_MAP["RESPIRATORY_RATE"]),
                  this.generateTableRow("Cstat", _C_STAT2, UNIT_MAP["C_STAT"])
                )
              )
            )
          )
        );
      }
      if (RST === "HFOV") {
        var _ETT_SIZE4 = respiratorySupportVariable.ETT_SIZE,
            _MAP3 = respiratorySupportVariable.MAP,
            HFOV_AMPLITUDE = respiratorySupportVariable.HFOV_AMPLITUDE,
            HFOV_FREQUENCY = respiratorySupportVariable.HFOV_FREQUENCY,
            HFOV_ITIME = respiratorySupportVariable.HFOV_ITIME,
            HFOV_BIAS_FLOW = respiratorySupportVariable.HFOV_BIAS_FLOW,
            HFOV_POWER = respiratorySupportVariable.HFOV_POWER,
            _FIO10 = respiratorySupportVariable.FIO2,
            _INO_DOSE9 = respiratorySupportVariable.INO_DOSE,
            _HE7 = respiratorySupportVariable.HE;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              this.generateTableRow("ETT Size", _ETT_SIZE4, UNIT_MAP["ETT_SIZE"]),
              this.generateTableRow("MAP", _MAP3, UNIT_MAP["MAP"]),
              this.generateTableRow("Amplitude", HFOV_AMPLITUDE, UNIT_MAP["HFOV_AMPLITUDE"]),
              this.generateTableRow("Frequency", HFOV_FREQUENCY, UNIT_MAP["HFOV_FREQUENCY"]),
              this.generateTableRow("iTime", HFOV_ITIME, UNIT_MAP["HFOV_ITIME"]),
              this.generateTableRow("Flow", HFOV_BIAS_FLOW, UNIT_MAP["HFOV_BIAS_FLOW"]),
              this.generateTableRow("Power", HFOV_POWER, UNIT_MAP["HFOV_POWER"]),
              this.generateTableRow("FiO2", _FIO10, UNIT_MAP["FIO2"]),
              this.generateTableRow("iNO Dose", _INO_DOSE9, UNIT_MAP["INO_DOSE"]),
              this.generateTableRow("He", _HE7, UNIT_MAP["HE"])
            )
          )
        );
      }
      if (RST === "HFJV") {
        var _ETT_SIZE5 = respiratorySupportVariable.ETT_SIZE,
            HFJV_PIP = respiratorySupportVariable.HFJV_PIP,
            HFJV_MONITORED_PEEP = respiratorySupportVariable.HFJV_MONITORED_PEEP,
            HFJV_RATE = respiratorySupportVariable.HFJV_RATE,
            HFJV_ITIME = respiratorySupportVariable.HFJV_ITIME,
            HFJV_MAP = respiratorySupportVariable.HFJV_MAP,
            _PIP4 = respiratorySupportVariable.PIP,
            _PEEP5 = respiratorySupportVariable.PEEP,
            _PS3 = respiratorySupportVariable.PS,
            _VENT_RATE2 = respiratorySupportVariable.VENT_RATE,
            _ITIME2 = respiratorySupportVariable.ITIME,
            _MAP4 = respiratorySupportVariable.MAP,
            _FIO11 = respiratorySupportVariable.FIO2,
            _INO_DOSE10 = respiratorySupportVariable.INO_DOSE,
            _HE8 = respiratorySupportVariable.HE,
            _ETCO3 = respiratorySupportVariable.ETCO2,
            _RESPIRATORY_RATE3 = respiratorySupportVariable.RESPIRATORY_RATE,
            _TV_MAND2 = respiratorySupportVariable.TV_MAND,
            _TV_SPONT3 = respiratorySupportVariable.TV_SPONT;

        return _react2.default.createElement(
          "div",
          { className: "RespiratoryScoresTooltip-RespiratorySupport" },
          _react2.default.createElement(
            "h1",
            null,
            respiratorySupportVariable.RST
          ),
          _react2.default.createElement(
            "div",
            { className: "RespiratoryScoresTooltip-RespiratorySupport-DualTable" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("ETT Size", _ETT_SIZE5, UNIT_MAP["ETT_SIZE"]),
                  this.generateTableRow("HFJV PIP", HFJV_PIP, UNIT_MAP["HFJV_PIP"]),
                  this.generateTableRow("HFJV PEEP", HFJV_MONITORED_PEEP, UNIT_MAP["HFJV_MONITORED_PEEP"]),
                  this.generateTableRow("HFJV Rate", HFJV_RATE, UNIT_MAP["HFJV_RATE"]),
                  this.generateTableRow("HFJV iTime", HFJV_ITIME, UNIT_MAP["HFJV_ITIME"]),
                  this.generateTableRow("HFJV MAP", HFJV_MAP, UNIT_MAP["HFJV_MAP"]),
                  this.generateTableRow("PIP", _PIP4, UNIT_MAP["PIP"]),
                  this.generateTableRow("PEEP", _PEEP5, UNIT_MAP["PEEP"]),
                  this.generateTableRow("PS", _PS3, UNIT_MAP["PS"]),
                  this.generateTableRow("Vent Rate", _VENT_RATE2, UNIT_MAP["VENT_RATE"]),
                  this.generateTableRow("iTime", _ITIME2, UNIT_MAP["ITIME"]),
                  this.generateTableRow("MAP", _MAP4, UNIT_MAP["MAP"]),
                  this.generateTableRow("FiO2", _FIO11, UNIT_MAP["FIO2"]),
                  this.generateTableRow("iNO Dose", _INO_DOSE10, UNIT_MAP["INO_DOSE"]),
                  this.generateTableRow("He", _HE8, UNIT_MAP["HE"])
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "tbody",
                  null,
                  this.generateTableRow("EtCO2", _ETCO3, UNIT_MAP["ETCO2"]),
                  this.generateTableRow("Resp Rate", _RESPIRATORY_RATE3, UNIT_MAP["RESPIRATORY_RATE"]),
                  this.generateTableRow("TV(mand)", _TV_MAND2, UNIT_MAP["TV_MAND"]),
                  this.generateTableRow("TV(spont)", _TV_SPONT3, UNIT_MAP["TV_SPONT"])
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

RespiratoryScoresTooltip.propTypes = {
  location: _propTypes2.default.object,
  ECMOVADVariable: _propTypes2.default.object,
  respiratorySuppportVariable: _propTypes2.default.object,
  clientX: _propTypes2.default.number,
  clientY: _propTypes2.default.number
};

exports.default = RespiratoryScoresTooltip;