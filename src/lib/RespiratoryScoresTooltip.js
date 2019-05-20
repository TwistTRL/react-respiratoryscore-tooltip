import React, {PureComponent} from "react";
import {format} from "date-fns";
import "./RespiratoryScoresTooltip.css";

const RSVToDisplay = {
    "RA":[],
    "NC":["NC_Flow","FiO2","iNO_Set"],
    "MASK":["MASK_Flow","FiO2"],
    "BB":["NC_Flow","FiO2"],
    "HFNC":["HFNC_Flow","FiO2","iNO_Set"],
    "CPAP":["CPAP_PEEP_comb","FiO2"],
    "BIPAP":["BIPAP_IPAP","BIPAP_EPAP","BIPAP_Rate","FiO2"],
    "PSV":["PEEP","PS","FiO2","iNO_Set","duration"],
    "PCV":["VT_set_norm","PIP_comb","PEEP","PS","VR","FiO2","iNO_Set","duration"],
    "VCV":["VT_set_norm","PEEP","PS","VR","FiO2","iNO_Set"],
    "HFOV":["HFOV_MPAW","HFOV_Amplitude","HFOV_Frequency","FiO2","iNO_Set"],
    "HFJV":["FiO2","HFJV_PEEP","HFJV_PIP","HFJV_Rate","iNO_Set"],
    "ECMO":["ECMO_Flow_norm"]
  }

const TITLE_COLOR = {
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
  
  "ECMO": "#F6323E",
}


class RespiratoryScoresTooltip extends PureComponent {
  render() {
    let { location, timeStamp,
          ECMOVariables,
          VADVariables,
          respiratoryVariables,
          pageX,pageY,
          } = this.props;
    let ECMODisplay, VADDisplay, respiratoryDisplay = null;
    let LocationDisplay = this.getLocationDisplay(location,timeStamp);
   
    if (ECMOVariables) {
      ECMODisplay = this.getECMODisplay(ECMOVariables);
    }
    if (VADVariables) {
      VADDisplay =  this.getVADDisplay(VADVariables);
    }
    if (respiratoryVariables){
      respiratoryDisplay =  this.getRespiratoryDisplay(respiratoryVariables);
    }
    
    return (
      <div style={{ position:"fixed",zIndex:9999,
                    top:pageY-50,left:10+pageX,
                    pointerEvents:"none",
                    width:300,
                    borderRadius:4,padding:0,margin:0,overflow:"hidden",
                    border: "solid 1px black", boxShadow:"2px 2px 2px black"
                    }}>
        {/*Location section*/}
        {LocationDisplay}
        {/*ECMO section*/}
        {ECMODisplay}
        {/*VAD section*/}
        {VADDisplay}
        {/*RSS section*/}
        {respiratoryDisplay}
      </div>
    )
  }

  getLocationDisplay(location,timeStamp) {
    return (
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#ffe7c9",padding:5,boxShadow:"0px 0px 5px black",whiteSpace:"nowrap"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <h1 className="RespiratoryScoresTooltip-title">Location: {location}</h1>
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

  getECMODisplay(ECMOVariables) {
    let {ECMO_Flow_Rate_Weight_Normalized} = ECMOVariables;
    return (
      <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
        <h1 className="RespiratoryScoresTooltip-title">ECMO</h1>
        <table className="RespiratoryScoresTooltip-table">
          <tbody>
            <tr>
              <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
              <td>{ECMO_Flow_Rate_Weight_Normalized} mL/kg/min</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  getVADDisplay(VADVariables) {
    let {Machine_Type} = VADVariables;
    if (Machine_Type==="Abiomed") {
      let Abiomed_Cardiac_Index = VADVariables["Abiomed Cardiac Index"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">VAD</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Machine</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Cardiac Index</td>
                <td>{Abiomed_Cardiac_Index}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (Machine_Type==="Berlin") {
      let Left_Beat_Rate = VADVariables["Berlin Heart Left Beat Rate"];
      let Left_Pump = VADVariables["Berlin Heart Left Beat Rate"];
      let Right_Beat_Rate = VADVariables["Berlin Heart Right Beat Rate"];
      let Right_Pump = VADVariables["Berlin Heart Right Beat Rate"];
      let Membrane_Movement_Left_Ejection = VADVariables["Membrane Movement, Left Ejection"] || "";
      let Membrane_Movement_Left_Filling = VADVariables["Membrane Movement, Left Filling"] || "";
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">VAD</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Machine</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Left Beat Rate</td>
                <td>{Left_Beat_Rate}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Left Pump</td>
                <td>{Left_Pump}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Right Beat Rate</td>
                <td>{Right_Beat_Rate}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Right Pump</td>
                <td>{Right_Pump}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Left Ejection</td>
                <td>{Membrane_Movement_Left_Ejection.slice(0,2)}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Left Filling</td>
                <td>{Membrane_Movement_Left_Filling.slice(0,2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (Machine_Type==="HeartWare") {
      let HeartWare_Pump_Flow = VADVariables["HeartWare Pump Flow"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">VAD</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Machine</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{HeartWare_Pump_Flow}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (Machine_Type==="Impella") {
      let Impella_Flow_Rate = VADVariables["Impella Flow Rate"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">VAD</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Machine</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{Impella_Flow_Rate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (Machine_Type==="Quadrox") {
      let Quadrox_Flow = VADVariables["Quadrox Flow (L/min)"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">VAD</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Machine</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{Quadrox_Flow}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (Machine_Type==="RotaFlow") {
      let RateFlow_Flow_Measure = VADVariables["RotaFlow Flow Measure (L/min)"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">VAD</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Machine</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{RateFlow_Flow_Measure}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  getRespiratoryDisplay(respiratoryVariables) {
    let {RST} = respiratoryVariables
    if (RST==="PSV") {
      let {PIP,PEEP,FIO2} = respiratoryVariables
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">PIP</td>
                <td>{PIP} cm H<sub>2</sub>O</td>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO<sub>2</sub></td>
                <td>{FIO2}%</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">PEEP</td>
                <td>{PEEP} cm H<sub>2</sub>O</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  }
}

export default RespiratoryScoresTooltip
