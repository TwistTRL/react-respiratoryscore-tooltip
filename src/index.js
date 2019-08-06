import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import RespiratoryScoresTooltip from "./lib";

const LOCATION_SAMPLE = {
  "8S:203":{ward:"8S", room:"203"},
  "8E:301":{ward:"8E", room:"301"}
}

const ECMO_VAD_VARIABLES_SAMPLE = {
  on: {ECMO_Flow_Rate_Weight_Normalized: 92},
  off: null
};

const RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE = {
  "AIRWAY_ASSESSMENT": null,
  "APRV_PHIGH": null,
  "APRV_PLOW": null,
  "APRV_PS": null,
  "BIPAP_EPAP": null,
  "BIPAP_IPAP": null,
  "BIPAP_RATE": null,
  "C_STAT": null,
  "CPAP": null,
  "CPAP_FLOW": null,
  "ETCO2": null,
  "ETT_SIZE": null,
  "FIO2": null,
  "FLOW_RATE": null,
  "HE": null,
  "HFJV_ITIME": null,
  "HFJV_MAP": null,
  "HFJV_MONITORED_PEEP": null,
  "HFJV_PIP": null,
  "HFJV_RATE": null,
  "HFNC": null,
  "HFOV_AMPLITUDE": null,
  "HFOV_BIAS_FLOW": null,
  "HFOV_FREQUENCY": null,
  "HFOV_ITIME": "%",
  "HFOV_MODEL": null,
  "HFOV_POWER": null,
  "INO_DOSE": null,
  "ITIME": null,
  "MAP": null,
  "MASK": null,
  "MODE": null,
  "MVE": null,
  "NAVA": null,
  "OXYGEN_FIO2_DELIVERY_DEVICE": null,
  "OXYGEN_LMIN_DELIVERY_DEVICE": null,
  "OXYGEN_SOURCE": null,
  "PEEP": null,
  "PIP": null,
  "PPLAT": null,
  "PS": null,
  "RESPIRATORY_RATE": null,
  "RISE_TIME": null,
  "TV": null,
  "TV_MAND": null,
  "TV_SPONT": null,
  "VENT_RATE": null
  };

const RESPIRATORY_SUPPORT_VARIABLE_SAMPLE = {
  "RA":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
        "RST":"RA"},
  "MASK":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST": "MASK",
          "PIP": 10,
          "PEEP": 1,
          "FLOW_RATE": 12,
          "FIO2": 25,
          "INO_DOSE": 12
          },
  "BB":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
        "RST": "BB",
        "MASK": "Large",
        "FLOW_RATE": 30,
        "FIO2": 20,
        "INO_DOSE": 0.5,
        },
  "NC":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
        "RST":"NC",
        "FLOW_RATE":30,
        "FIO2":20,
        "INO_DOSE":30,
        },
  "HFNC":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST": "HFNC",
          "FLOW_RATE": 30,
          "FIO2": 21,
          "INO_DOSE": 0.8,
          "HE": 20
          },
  "CPAP":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST":"CPAP",
          "MASK":"Large",
          "CPAP":10,
          "CPAP_FLOW":10,
          "FIO2":20,
          "INO_DOSE": 0.8,
          "HE": 20
          },
  "BIPAP":{ ...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
            "RST":"BIPAP",
            "MASK":"Small",
            "BIPAP_IPAP":10,
            "BIPAP_EPAP":10,
            "BIPAP_RATE":20,
            "RISE_TIME":123,
            "FIO2":30,
            "INO_DOSE":1,
            "HE": 20,
            },
  "BVM":{ ...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST":"BVM",
          "ETT_SIZE": 4,
          "PIP":20,
          "PEEP":10,
          "FIO2":21,
          "INO_DOSE":1,
          "HE":0.5,
          },
  "PSV":{ ...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST":"PSV",
          "ETT_SIZE": 4,
          "PS": 10,
          "PEEP":10,
          "MAP":10,
          "FIO2":20,
          "INO_DOSE":0.5,
          "HE":0.5,
          "ETCO2":30,
          "TV":100,
          "TV_SPONT":80,
          "RESPIRATORY_RATE": 20,
          "C_STAT":10,
          },
  "PCV":{ ...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST":"PCV",
          "ETT_SIZE": 4,
          "PIP":10,
          "PEEP":10,
          "PS":10,
          "VENT_RATE":10,
          "ITIME":10,
          "MAP":10,
          "FIO2":10,
          "INO_DOSE":0.5,
          "HE":0.5,
          "ETCO2":10,
          "TV_MAND":10,
          "TV_SPONT":10,
          "RESPIRATORY_RATE":10,
          "C_STAT":10,
          "APRV_PHIGH":10,
          "APRV_PLOW":10,
          "APRV_PS":10,
          },
  "VCV":{ ...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST":"VCV",
          "ETT_SIZE": 2,
          "TV_MAND": 70,
          "PPLAT": 12,
          "PEEP": 123,
          "PS": 123,
          "VENT_RATE": 123,
          "ITIME": 123,
          "MAP": 123,
          "FIO2": 123,
          "INO_DOSE": 123,
          "HE": 123,
          "ETCO2": 123,
          "PIP": 123,
          "TV_SPONT": 123,
          "RESPIRATORY_RATE": 123,
          "C_STAT": 10,
          },
  "HFOV":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST":"HFOV",
          "ETT_SIZE": 2,
          "MAP":10,
          "HFOV_AMPLITUDE":10,
          "HFOV_FREQUENCY":10,
          "HFOV_ITIME":10,
          "HFOV_BIAS_FLOW":10,
          "HFOV_POWER":10,
          "FIO2":10,
          "INO_DOSE":12,
          "HE":10,
          },
  "HFJV":{...RESPIRATORY_SUPPORT_VARIABLE_TEMPLATE,
          "RST":"HFJV",
          "ETT_SIZE":2,
          "HFJV_PIP":10,
          "HFJV_MONITORED_PEEP":10,
          "HFJV_RATE":10,
          "HFJV_ITIME":10,
          "HFJV_MAP":10,
          "PIP":10,
          "PEEP":10,
          "PS":10,
          "VENT_RATE":10,
          "ITIME":10,
          "MAP":10,
          "FIO2":10,
          "INO_DOSE":10,
          "HE":10,
          "ETCO2":10,
          "RESPIRATORY_RATE":10,
          "TV_MAND":10,
          "TV_SPONT":10,
          }
}

function mask_object(obj) {
  let newObj = {...obj};
  for (let k of Object.keys(obj)) {
    if (obj[k]===null || k==="RST") {
      continue;
    }
    else {
      if (Math.random()<0.5) {
        newObj[k] = null;
      }
    }
  }
  return newObj;
}

class App extends Component{
  constructor(props){
    super(props);
    this.state={clientX:100, clientY:200,
                locationSelection: "8S:203",
                timeStamp: new Date(),
                respiratorySupportVariableSelection: "RA",
                mask: false
                };
  }
  render() {
    let { clientX,clientY,
          locationSelection,timeStamp,
          respiratorySupportVariableSelection,
          mask} = this.state;
    let respiratorySupportVariable = RESPIRATORY_SUPPORT_VARIABLE_SAMPLE[respiratorySupportVariableSelection];
    if (mask) {
      respiratorySupportVariable = mask_object(respiratorySupportVariable);
    }
    return (
      <>
        {/*clientX*/}
        <div>
          clientX:
          <input  type="range" min={0} max={1000} value={clientX}
                  onChange={(ev)=> {
                              this.setState({clientX:Number.parseInt(ev.target.value)});
                            }}
          />
        </div>
        {/*clientY*/}
        <div>
          clientY:
          <input  type="range" min={0} max={1000} value={clientY}
                  onChange={(ev)=> {
                              this.setState({clientY:Number.parseInt(ev.target.value)});
                            }}
          />
        </div>
        {/*location*/}
        <div>
          location:
          preset:
          <select value={locationSelection}
                  onChange={(ev)=>{
                              this.setState({locationSelection:ev.target.value});
                            }}
          >
            <option value="8S:203">8S:203</option>
            <option value="8E:301">8E:301</option>
          </select> 
          <pre>
            {JSON.stringify(LOCATION_SAMPLE[locationSelection])}
          </pre>
        </div>
        {/*timeStamp*/}
        <div>
          timeStamp:
          <button onClick={(ev)=> {
                              this.setState({timeStamp:new Date()});
                            }}
          >
            Update timeStamp
          </button>
        </div>
        {/*Respiratory Support Variables*/}
        <div>
          respiratorySupportVariable:
          preset:
          <select onChange={(ev)=>{
                              this.setState({respiratorySupportVariableSelection:ev.target.value});
                            }}
          >
            <option value="RA">RA</option>
            <option value="MASK">MASK</option>
            <option value="BB">BB</option>
            <option value="NC">NC</option>
            <option value="HFNC">HFNC</option>
            <option value="CPAP">CPAP</option>
            <option value="BIPAP">BIPAP</option>
            <option value="BVM">BVM</option>
            <option value="PSV">PSV</option>
            <option value="PCV">PCV</option>
            <option value="VCV">VCV</option>
            <option value="HFOV">HFOV</option>
            <option value="HFJV">HFJV</option>
          </select>
          mask:
          <input  type="checkbox" checked={mask}
                  onChange={ ()=>this.setState({mask: !mask}) }
                  />
          <pre>
            {JSON.stringify(respiratorySupportVariable,null,' ')}
          </pre>
        </div>
        {/*Actual tooltip display*/}
        <RespiratoryScoresTooltip location={LOCATION_SAMPLE[locationSelection]} timeStamp={timeStamp}
                                  respiratorySuppportVariable={respiratorySupportVariable}
                                  clientX={clientX} clientY={clientY}
        />
      </>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
