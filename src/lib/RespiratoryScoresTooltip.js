import React, {PureComponent} from "react";
import {format} from "date-fns";
import "./RespiratoryScoresTooltip.css";

const UNIT_MAP = {
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

class RespiratoryScoresTooltip extends PureComponent {
  render() {
    let { timeStamp,
          location,
          ECMOVADVariable,
          respiratorySuppportVariable,
          pageX,pageY,
          } = this.props;
    let LocationDisplay = this.getLocationDisplay(location,timeStamp);
    let ECMOVADDisplay, respiratorySupportDisplay = null;

    if (respiratorySuppportVariable){
      respiratorySupportDisplay =  this.getRespiratorySupportDisplay(respiratorySuppportVariable);
    }
    
    if (ECMOVADVariable){
      //ECMOVADDisplay =  this.getECMOVADDisplay(ECMOVADVariable);
    }
    
    return (
      <div  className="RespiratoryScoresTooltip"
            style={{position:"fixed",zIndex:9999,
                    top:pageY-50,left:10+pageX
                    }}>
        {/*Location section*/}
        {LocationDisplay}
        {/*RSS section*/}
        {respiratorySupportDisplay}
      </div>
    )
  }

  getLocationDisplay(location,timeStamp) {
    let {ward,room} = location;
    return (
      <div style={{ display:"flex",flexDirection:"row",justifyContent:"space-between",
                    padding:5,boxShadow:"0px 0px 5px black",whiteSpace:"nowrap",
                    backgroundColor: ward==="8S" ? "#ff2a22" : "#ffe7c9"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <h1 className="RespiratoryScoresTooltip-title">{ward}: {room}</h1>
        </div>
        <div style={{display:"flex",flexDirection:"column",fontSize:"12px",fontStyle:"italic"}}>
          <div style={{textAlign:"right"}}>
            {format(timeStamp,"MMM DD YYYY")}
          </div>
          <div style={{textAlign:"right"}}>
            {format(timeStamp,"HH:mm:ss")}
          </div>
        </div>
      </div>
    )
  }

  generateTableRow(title,value,unit) {
    if (value===null){
      return null;
    }
    if (unit!==null) {
      return (
        <tr>
          <td>{title}</td>
          <td>{value} {unit}</td>
        </tr>
      );
    }
    else {
      return (
        <tr>
          <td>{title}</td>
          <td>{value}</td>
        </tr>
      );
    }
  }
  
  getRespiratorySupportDisplay(respiratorySupportVariable) {
    let {RST} = respiratorySupportVariable
    if (RST==="RA") {
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{RST}</h1>
        </div>
      );
    }
    if (RST==="MASK") {
      let { MASK,PIP,PEEP,FLOW_RATE,
            FIO2,INO_DOSE} = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("Mask",MASK,UNIT_MAP["MASK"])}
              {this.generateTableRow("PIP",PIP,UNIT_MAP["PIP"])}
              {this.generateTableRow("PEEP",PEEP,UNIT_MAP["PEEP"])}
              {this.generateTableRow("Flow Rate",FLOW_RATE,UNIT_MAP["FLOW_RATE"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
              {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="BB") {
      let { MASK,FLOW_RATE,FIO2} = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("Mask",MASK,UNIT_MAP["MASK"])}
              {this.generateTableRow("Flow Rate",FLOW_RATE,UNIT_MAP["FLOW_RATE"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="NC") {
      let { FLOW_RATE,FIO2,INO_DOSE } = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("Flow Rate",FLOW_RATE,UNIT_MAP["FLOW_RATE"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
              {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="HFNC") {
      let { FLOW_RATE,FIO2,INO_DOSE,HE } = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("Flow Rate",FLOW_RATE,UNIT_MAP["FLOW_RATE"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
              {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
              {this.generateTableRow("He",HE,UNIT_MAP["HE"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="CPAP") {
      let { MASK,CPAP,CPAP_FLOW,FIO2,INO_DOSE,HE } = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("Mask",MASK,UNIT_MAP["MASK"])}
              {this.generateTableRow("CPAP",CPAP,UNIT_MAP["CPAP"])}
              {this.generateTableRow("CPAP Flow",CPAP_FLOW,UNIT_MAP["CPAP_FLOW"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
              {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
              {this.generateTableRow("He",INO_DOSE,UNIT_MAP["HE"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="BIPAP") {
      let { MASK,BIPAP_IPAP,BIPAP_EPAP,BIPAP_RATE,
            RISE_TIME,FIO2,INO_DOSE,HE } = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("Mask",MASK,UNIT_MAP["MASK"])}
              {this.generateTableRow("IPAP",BIPAP_IPAP,UNIT_MAP["BIPAP_IPAP"])}
              {this.generateTableRow("EPAP",BIPAP_EPAP,UNIT_MAP["BIPAP_EPAP"])}
              {this.generateTableRow("Rate",BIPAP_RATE,UNIT_MAP["BIPAP_RATE"])}
              {this.generateTableRow("Rise Time",RISE_TIME,UNIT_MAP["RISE_TIME"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
              {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
              {this.generateTableRow("He",INO_DOSE,UNIT_MAP["HE"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="BVM") {
      let { ETT_SIZE,PIP,PEEP,FIO2,INO_DOSE,HE } = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("ETT Size",ETT_SIZE,UNIT_MAP["ETT_SIZE"])}
              {this.generateTableRow("PIP",PIP,UNIT_MAP["PIP"])}
              {this.generateTableRow("PEEP",PEEP,UNIT_MAP["PEEP"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
              {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
              {this.generateTableRow("He",INO_DOSE,UNIT_MAP["HE"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="PSV") {
      let { ETT_SIZE,PS,PEEP,MAP,FIO2,INO_DOSE,HE,
            ETCO2,TV,TV_SPONT,RESPIRATORY_RATE,
            C_STAT} = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <div style={{display:"flex"}}>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("ETT Size",ETT_SIZE,UNIT_MAP["ETT_SIZE"])}
                  {this.generateTableRow("PS",PS,UNIT_MAP["PS"])}
                  {this.generateTableRow("PEEP",PEEP,UNIT_MAP["PEEP"])}
                  {this.generateTableRow("MAP",MAP,UNIT_MAP["MAP"])}
                  {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
                  {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
                  {this.generateTableRow("He",HE,UNIT_MAP["HE"])}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("EtCO2",ETCO2,UNIT_MAP["ETCO2"])}
                  {this.generateTableRow("TV",TV,UNIT_MAP["TV"])}
                  {this.generateTableRow("TV(spont)",TV_SPONT,UNIT_MAP["TV_SPONT"])}
                  {this.generateTableRow("Resp Rate",RESPIRATORY_RATE,UNIT_MAP["RESPIRATORY_RATE"])}
                  {this.generateTableRow("Cstat",C_STAT,UNIT_MAP["C_STAT"])}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    if (RST==="PCV") {
      let { ETT_SIZE,PIP,PEEP,PS,VENT_RATE,ITIME,MAP,FIO2,INO_DOSE,HE,
            ETCO2,TV,TV_MAND,TV_SPONT,RESPIRATORY_RATE,C_STAT,
            APRV_PHIGH,APRV_PLOW,APRV_PS} = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <div style={{display:"flex"}}>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("ETT Size",ETT_SIZE,UNIT_MAP["ETT_SIZE"])}
                  {this.generateTableRow("PIP",PIP,UNIT_MAP["PIP"])}
                  {this.generateTableRow("PEEP",PEEP,UNIT_MAP["PEEP"])}
                  {this.generateTableRow("PS",PS,UNIT_MAP["PS"])}
                  {this.generateTableRow("Vent Rate",VENT_RATE,UNIT_MAP["VENT_RATE"])}
                  {this.generateTableRow("iTime",ITIME,UNIT_MAP["ITIME"])}
                  {this.generateTableRow("MAP",MAP,UNIT_MAP["MAP"])}
                  {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
                  {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
                  {this.generateTableRow("He",HE,UNIT_MAP["HE"])}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("EtCO2",ETCO2,UNIT_MAP["ETCO2"])}
                  {this.generateTableRow("TV",TV,UNIT_MAP["TV"])}
                  {this.generateTableRow("TV(mand)",TV_MAND,UNIT_MAP["TV_MAND"])}
                  {this.generateTableRow("TV(spont)",TV_SPONT,UNIT_MAP["TV_SPONT"])}
                  {this.generateTableRow("Resp Rate",RESPIRATORY_RATE,UNIT_MAP["RESPIRATORY_RATE"])}
                  {this.generateTableRow("Cstat",C_STAT,UNIT_MAP["C_STAT"])}
                  {this.generateTableRow("APRV Phigh",APRV_PHIGH,UNIT_MAP["APRV_PHIGH"])}
                  {this.generateTableRow("APRV Plow",APRV_PLOW,UNIT_MAP["APRV_PLOW"])}
                  {this.generateTableRow("APRV PS",APRV_PS,UNIT_MAP["APRV_PS"])}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    if (RST==="VCV") {
      let { ETT_SIZE,TV_MAND,PPLAT,PEEP,PS,
            VENT_RATE,ITIME,MAP,FIO2,INO_DOSE,HE,
            ETCO2,PIP,TV_SPONT,RESPIRATORY_RATE,C_STAT} = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <div style={{display:"flex"}}>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("ETT Size",ETT_SIZE,UNIT_MAP["ETT_SIZE"])}
                  {this.generateTableRow("TV(mand)",TV_MAND,UNIT_MAP["TV_MAND"])}
                  {this.generateTableRow("Pplat",PPLAT,UNIT_MAP["PPLAT"])}
                  {this.generateTableRow("PEEP",PEEP,UNIT_MAP["PEEP"])}
                  {this.generateTableRow("PS",PS,UNIT_MAP["PS"])}
                  {this.generateTableRow("Vent Rate",VENT_RATE,UNIT_MAP["VENT_RATE"])}
                  {this.generateTableRow("iTime",ITIME,UNIT_MAP["ITIME"])}
                  {this.generateTableRow("MAP",MAP,UNIT_MAP["MAP"])}
                  {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
                  {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
                  {this.generateTableRow("He",HE,UNIT_MAP["HE"])}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("EtCO2",ETCO2,UNIT_MAP["ETCO2"])}
                  {this.generateTableRow("PIP",PIP,UNIT_MAP["PIP"])}
                  {this.generateTableRow("TV(spont)",TV_SPONT,UNIT_MAP["TV_SPONT"])}
                  {this.generateTableRow("Resp Rate",RESPIRATORY_RATE,UNIT_MAP["RESPIRATORY_RATE"])}
                  {this.generateTableRow("Cstat",C_STAT,UNIT_MAP["C_STAT"])}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    if (RST==="HFOV") {
      let { ETT_SIZE,MAP,HFOV_AMPLITUDE,HFOV_FREQUENCY,HFOV_ITIME,
            HFOV_BIAS_FLOW,HFOV_POWER,
            FIO2,INO_DOSE,HE} = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <table>
            <tbody>
              {this.generateTableRow("ETT Size",ETT_SIZE,UNIT_MAP["ETT_SIZE"])}
              {this.generateTableRow("MAP",MAP,UNIT_MAP["MAP"])}
              {this.generateTableRow("Amplitude",HFOV_AMPLITUDE,UNIT_MAP["HFOV_AMPLITUDE"])}
              {this.generateTableRow("Frequency",HFOV_FREQUENCY,UNIT_MAP["HFOV_FREQUENCY"])}
              {this.generateTableRow("Flow",HFOV_BIAS_FLOW,UNIT_MAP["HFOV_BIAS_FLOW"])}
              {this.generateTableRow("Power",HFOV_POWER,UNIT_MAP["HFOV_POWER"])}
              {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
              {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
              {this.generateTableRow("He",HE,UNIT_MAP["HE"])}
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="HFJV") {
      let { ETT_SIZE,HFJV_PIP,HFJV_MONITORED_PEEP,HFJV_RATE,HFJV_ITIME,HFJV_MAP,
            PIP,PEEP,PS,VENT_RATE,ITIME,MAP,FIO2,INO_DOSE,HE,
            ETCO2,RESPIRATORY_RATE,TV_MAND,TV_SPONT} = respiratorySupportVariable;
      return (
        <div className="RespiratoryScoresTooltip-RespiratorySupport">
          <h1>{respiratorySupportVariable.RST}</h1>
          <div style={{display:"flex"}}>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("ETT Size",ETT_SIZE,UNIT_MAP["ETT_SIZE"])}
                  {this.generateTableRow("HFJV PIP",HFJV_PIP,UNIT_MAP["HFJV_PIP"])}
                  {this.generateTableRow("HFJV PEEP",HFJV_MONITORED_PEEP,UNIT_MAP["HFJV_MONITORED_PEEP"])}
                  {this.generateTableRow("HFJV Rate",HFJV_RATE,UNIT_MAP["HFJV_RATE"])}
                  {this.generateTableRow("HFJV iTime",HFJV_ITIME,UNIT_MAP["HFJV_ITIME"])}
                  {this.generateTableRow("HFJV MAP",HFJV_MAP,UNIT_MAP["HFJV_MAP"])}
                  {this.generateTableRow("PIP",PIP,UNIT_MAP["PIP"])}
                  {this.generateTableRow("PEEP",PEEP,UNIT_MAP["PEEP"])}
                  {this.generateTableRow("PS",PS,UNIT_MAP["PS"])}
                  {this.generateTableRow("Vent Rate",VENT_RATE,UNIT_MAP["VENT_RATE"])}
                  {this.generateTableRow("iTime",ITIME,UNIT_MAP["ITIME"])}
                  {this.generateTableRow("MAP",MAP,UNIT_MAP["MAP"])}
                  {this.generateTableRow("FiO2",FIO2,UNIT_MAP["FIO2"])}
                  {this.generateTableRow("iNO Dose",INO_DOSE,UNIT_MAP["INO_DOSE"])}
                  {this.generateTableRow("He",HE,UNIT_MAP["HE"])}
                </tbody>
              </table>
            </div>
            <div>
              <table>
                <tbody>
                  {this.generateTableRow("EtCO2",ETCO2,UNIT_MAP["ETCO2"])}
                  {this.generateTableRow("Resp Rate",RESPIRATORY_RATE,UNIT_MAP["RESPIRATORY_RATE"])}
                  {this.generateTableRow("TV(mand)",TV_MAND,UNIT_MAP["TV_MAND"])}
                  {this.generateTableRow("TV(spont)",TV_SPONT,UNIT_MAP["TV_SPONT"])}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default RespiratoryScoresTooltip
