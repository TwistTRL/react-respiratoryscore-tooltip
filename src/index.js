import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import RespiratoryScoresTooltip from "./lib/RespiratoryScoresTooltip";

const LOCATION_SAMPLE = {
  "8S:203":{ward:"8S", room:"203"},
  "8E:301":{ward:"8E", room:"301"}
}

const ECMO_VARIABLES_SAMPLE = {
  on: {ECMO_Flow_Rate_Weight_Normalized: 92},
  off: null
};

const VAD_VARIABLES_SAMPLE = {
  Abiomed: {Machine_Type: "Abiomed",
            "Abiomed Cardiac Index": 2.5
            },
  Berlin: { Machine_Type: "Berlin",
            "Berlin Heart Left Beat Rate": 70,
            "Berlin Heart Left Pump": 25,
            "Berlin Heart Right Beat Rate": 70,
            "Berlin Heart Right Pump": 25,
            "Membrane Movement, Left Ejection": "++ Complete/almost complete membrane movement to end",
            "Membrane Movement, Left Filling": "++ Complete/almost complete membrane movement to end"
            },
  HeartWare: {Machine_Type: "HeartWare",
              "HeartWare Pump Flow": 2.3
              },
  Impella: {Machine_Type: "Impella",
            "Impella Flow Rate": 1.8
            },
  Quadrox: {Machine_Type: "Quadrox",
            "Quadrox Flow (L/min)": 2.3
            },
  RotaFlow: {Machine_Type: "RotaFlow",
            "RotaFlow Flow Measure (L/min)": 3.56
            },
};


class App extends Component{
  constructor(props){
    super(props);
    this.state={pageX:100, pageY:200,
                locationSelection: "8S:203",
                timeStamp: new Date(),
                ECMOVariablesSelection: "on",
                VADVariablesSelection: "Abiomed",
                respiratoryVariablesSelection: "PSV"
                };
  }
  render() {
    let { pageX,pageY,
          locationSelection,timeStamp,
          ECMOVariablesSelection,VADVariablesSelection,respiratoryVariablesSelection} = this.state;
    return (
      <>
        {/*pageX*/}
        <div>
          pageX:
          <input  type="range" min={0} max={1000} value={pageX}
                  onChange={(ev)=> {
                              this.setState({pageX:Number.parseInt(ev.target.value)});
                            }}
          />
        </div>
        {/*pageY*/}
        <div>
          pageY:
          <input  type="range" min={0} max={1000} value={pageY}
                  onChange={(ev)=> {
                              this.setState({pageY:Number.parseInt(ev.target.value)});
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
        {/*ECMO Variables*/}
        <div>
          ECMOVariables:
          preset:
          <select onChange={(ev)=>{
                              this.setState({ECMOVariablesSelection:ev.target.value});
                            }}
          >
            <option value="on">on</option>
            <option value="off">off</option>
          </select> 
          <pre>
            {JSON.stringify(ECMO_VARIABLES_SAMPLE[ECMOVariablesSelection])}
          </pre>
        </div>
        {/*VAD Variables*/}
        <div>
          VADVariables:
          preset:
          <select onChange={(ev)=>{
                              this.setState({VADVariablesSelection:ev.target.value});
                            }}
          >
            <option value="Abiomed">Abiomed</option>
            <option value="Berlin">Berlin</option>
            <option value="HeartWare">HeartWare</option>
            <option value="Impella">Impella</option>
            <option value="Quadrox">Quadrox</option>
            <option value="RotaFlow">RotaFlow</option>
          </select> 
          <pre>
            {JSON.stringify(VAD_VARIABLES_SAMPLE[VADVariablesSelection])}
          </pre>
        </div>
        {/*Actual tooltip display*/}
        <RespiratoryScoresTooltip location={LOCATION_SAMPLE[locationSelection]} timeStamp={timeStamp}
                                  ECMOVariables={ECMO_VARIABLES_SAMPLE[ECMOVariablesSelection]}
                                  VADVariables={VAD_VARIABLES_SAMPLE[VADVariablesSelection]}
                                  respiratoryVariables={{"RST":"PSV","PIP":28,"FIO2":30}}
                                  pageX={pageX} pageY={pageY}
        />
      </>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
