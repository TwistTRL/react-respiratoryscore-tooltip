import React, {PureComponent} from "react";
import {format} from "date-fns";
import "./RespiratoryScoresTooltip.css";

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
                <td className="RespiratoryScoresTooltip-table-variableName">Device</td>
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
      let Left_Pump = VADVariables["Berlin Heart Left Pump"];
      let Right_Beat_Rate = VADVariables["Berlin Heart Right Beat Rate"];
      let Right_Pump = VADVariables["Berlin Heart Right Pump"];
      let Membrane_Movement_Left_Ejection = VADVariables["Membrane Movement, Left Ejection"] || "";
      let Membrane_Movement_Left_Filling = VADVariables["Membrane Movement, Left Filling"] || "";
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">VAD</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Device</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Left Beat Rate</td>
                <td>{Left_Beat_Rate} bpm</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Left Pump</td>
                <td>{Left_Pump} mL/kg/min</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Right Beat Rate</td>
                <td>{Right_Beat_Rate} bpm</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Right Pump</td>
                <td>{Right_Pump} mL/kg/min</td>
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
                <td className="RespiratoryScoresTooltip-table-variableName">Device</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{HeartWare_Pump_Flow} LPM</td>
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
                <td className="RespiratoryScoresTooltip-table-variableName">Device</td>
                <td>{Machine_Type} LPM</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{Impella_Flow_Rate} LPM</td>
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
                <td className="RespiratoryScoresTooltip-table-variableName">Device</td>
                <td>{Machine_Type}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{Quadrox_Flow} LPM</td>
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
                <td className="RespiratoryScoresTooltip-table-variableName">Device</td>
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
    if (RST==="RA") {
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{RST}</h1>
        </div>
      );
    }
    if (RST==="MASK") {
      let {FiO2} = respiratoryVariables;
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                <td>{FiO2}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="BB") {
      let FlowRate = respiratoryVariables["Flow Rate"];
      let FiO2 = respiratoryVariables["FiO2"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow Rate</td>
                <td>{FlowRate} !!!unit!!!</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO<sub>2</sub></td>
                <td>{FiO2}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="NC") {
      let FlowRate = respiratoryVariables["Flow Rate"];
      let FiO2 = respiratoryVariables["FiO2"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow Rate</td>
                <td>{FlowRate} LPM</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO<sub>2</sub></td>
                <td>{FiO2}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="HFNC") {
      let FiO2 = respiratoryVariables["FiO2"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                <td>{FiO2} cm H<sub>2</sub>O</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="CPAP") {
      let CPAP = respiratoryVariables["CPAP"];
      let CPAPFlow = respiratoryVariables["CPAP Flow"];
      let Mask = respiratoryVariables["Mask"];
      let FiO2 = respiratoryVariables["FiO2"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">CPAP</td>
                <td>{CPAP} cm H<sub>2</sub>O</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">CPAP Flow</td>
                <td>{CPAPFlow} LPM</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Mask</td>
                <td>{Mask}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                <td>{FiO2} cm H<sub>2</sub>O</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="BIPAP") {
      let IPAP = respiratoryVariables["IPAP"];
      let EPAP = respiratoryVariables["EPAP"];
      let Rate = respiratoryVariables["Rate"];
      let RiseTime = respiratoryVariables["Rise Time"];
      let Mask = respiratoryVariables["Mask"];
      let FiO2 = respiratoryVariables["FiO2"];
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">IPAP</td>
                <td>{IPAP} cm H<sub>2</sub>O</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">EPAP</td>
                <td>{EPAP} cm H<sub>2</sub>O</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Rate</td>
                <td>{Rate} BPM</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Rise Time</td>
                <td>{RiseTime} sec</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Mask</td>
                <td>{Mask}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                <td>{FiO2}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="BVM") {
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
        </div>
      );
    }
    if (RST==="PSV") {
      let {PS} = respiratoryVariables;
      let {PEEP} = respiratoryVariables;
      let {FiO2} = respiratoryVariables;
      let {Tv} = respiratoryVariables;
      let {RR} = respiratoryVariables;
      let {EtCO2} = respiratoryVariables;
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <div style={{display:"flex"}}>
            <div>
              <table className="RespiratoryScoresTooltip-table">
                <tbody>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PS</td>
                    <td>{PS} cm H<sub>2</sub>O</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PEEP</td>
                    <td>{PEEP} cm H<sub>2</sub>O</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                    <td>{FiO2}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="RespiratoryScoresTooltip-table">
                <tbody>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">Tv</td>
                    <td>{Tv} mL</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">RR</td>
                    <td>{RR} BPM</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">EtCO2</td>
                    <td>{EtCO2} cm H<sub>2</sub>O</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    if (RST==="PCV") {
      let {PIP} = respiratoryVariables;
      let {PEEP} = respiratoryVariables;
      let {VR} = respiratoryVariables;
      let {PS} = respiratoryVariables;
      let {FiO2} = respiratoryVariables;
      let TvMandatory = respiratoryVariables["Tv (mandatory)"];
      let TvSpontaneous = respiratoryVariables["Tv (spontaneous)"];
      let {RR} = respiratoryVariables;
      let {EtCO2} = respiratoryVariables;
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <div style={{display:"flex"}}>
            <div>
              <table className="RespiratoryScoresTooltip-table">
                <tbody>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PIP</td>
                    <td>{PIP} cm H<sub>2</sub>O</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PEEP</td>
                    <td>{PEEP} cm H<sub>2</sub>O</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">VR</td>
                    <td>{VR} BPM</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PS</td>
                    <td>{PS} mL</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                    <td>{FiO2} mL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="RespiratoryScoresTooltip-table">
                <tbody>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">Tv (mand)</td>
                    <td>{TvMandatory} mL</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">Tv (spont)</td>
                    <td>{TvSpontaneous} BPM</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">RR</td>
                    <td>{RR} cm H<sub>2</sub>O</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">EtCO2</td>
                    <td>{EtCO2} cm H<sub>2</sub>O</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    if (RST==="VCV") {
      let {TvSet} = respiratoryVariables["Tv (set)"];
      let {PEEP} = respiratoryVariables;
      let {PS} = respiratoryVariables;
      let {FiO2} = respiratoryVariables;
      let {PIP} = respiratoryVariables;
      let {RR} = respiratoryVariables;
      let {EtCO2} = respiratoryVariables;
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <div style={{display:"flex"}}>
            <div>
              <table className="RespiratoryScoresTooltip-table">
                <tbody>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">Tv (set)</td>
                    <td>{TvSet} mL</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PEEP</td>
                    <td>{PEEP} cm H<sub>2</sub>O</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PS</td>
                    <td>{PS} BPM</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                    <td>{FiO2} mL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="RespiratoryScoresTooltip-table">
                <tbody>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">PIP</td>
                    <td>{PIP} mL</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">RR</td>
                    <td>{RR} BPM</td>
                  </tr>
                  <tr>
                    <td className="RespiratoryScoresTooltip-table-variableName">EtCO2</td>
                    <td>{EtCO2} cm H<sub>2</sub>O</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    if (RST==="HFOV") {
      let {MAP} = respiratoryVariables;
      let {Amplitude} = respiratoryVariables;
      let {Frequency} = respiratoryVariables;
      let {Power} = respiratoryVariables;
      let {FiO2} = respiratoryVariables;
      let {Flow} = respiratoryVariables;
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">MAP</td>
                <td>{MAP}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Amplitude</td>
                <td>{Amplitude}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Frequency</td>
                <td>{Frequency} Hz</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Power</td>
                <td>{Power}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                <td>{FiO2}%</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Flow</td>
                <td>{Flow} LPM</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (RST==="HFJV") {
      let HFJVPIP = respiratoryVariables["HFJV PIP"];
      let HFJVRate = respiratoryVariables["HFJV Rate"];
      let HFJViTime = respiratoryVariables["HFJV iTime"];
      let HFJVMAP = respiratoryVariables["HFJV MAP"];
      let HFJVPEEP = respiratoryVariables["HFJV PEEP"];
      let {FiO2} = respiratoryVariables;
      let {PIP} = respiratoryVariables;
      let {PEEP} = respiratoryVariables;
      let {Rate} = respiratoryVariables;
      return (
        <div style={{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}}>
          <h1 className="RespiratoryScoresTooltip-title">{respiratoryVariables.RST}</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">HFJVPIP</td>
                <td>{HFJVPIP} mL</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">HFJVRate</td>
                <td>{HFJVRate} BPM</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">HFJViTime</td>
                <td>{HFJViTime} Sec</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">HFJVMAP</td>
                <td>{HFJVMAP}</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">HFJVPEEP</td>
                <td>{HFJVPEEP} cm H<sub>2</sub>O</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">FiO2</td>
                <td>{FiO2}%</td>
              </tr>
            </tbody>
          </table>
          {/* CMV under HFJV */}
          <h1 className="RespiratoryScoresTooltip-title">CMV</h1>
          <table className="RespiratoryScoresTooltip-table">
            <tbody>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">PIP</td>
                <td>{PIP} mL</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">PEEP</td>
                <td>{PEEP} cm H<sub>2</sub>O</td>
              </tr>
              <tr>
                <td className="RespiratoryScoresTooltip-table-variableName">Rate</td>
                <td>{Rate} BPM</td>
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
