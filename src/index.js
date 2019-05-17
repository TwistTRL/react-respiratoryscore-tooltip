import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import RespiratoryScoresTooltip from "./lib/RespiratoryScoresTooltip";

class App extends Component{
  render() {
    return (<RespiratoryScoresTooltip location={"ICU"} timeStamp={new Date()}
                                      ECMOVariables={{ECMO_Flow_Rate_Weight_Normalized:90}}
                                      VADVariables={{Machine_Type: "RotaWare"}}
                                      respiratoryVariables={{"RST":"PSV","PIP":28,"FIO2":30}}
                                      pageX={100} pageY={100}
              />)
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
