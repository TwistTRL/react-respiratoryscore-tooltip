import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import RespiratoryScoresTooltip from "./lib/RespiratoryScoresTooltip";

class App extends Component{
  constructor(props){
    super(props);
    this.state={pageX:100,pageY:100};
  }
  render() {
    let {pageX,pageY} = this.state;
    return (
      <>
        pageX:
        <input  type="range" min={0} max={1000} value={pageX}
                onChange={(ev)=> {
                            this.setState({pageX:Number.parseInt(ev.target.value)})
                          }}
        />
        pageY:
        <input  type="range" min={0} max={1000} value={pageY}
                onChange={(ev)=> {
                            this.setState({pageY:Number.parseInt(ev.target.value)})
                          }}
        />
        <RespiratoryScoresTooltip location={"ICU"} timeStamp={new Date()}
                                  ECMOVariables={{ECMO_Flow_Rate_Weight_Normalized:90}}
                                  VADVariables={{Machine_Type: "RotaWare"}}
                                  respiratoryVariables={{"RST":"PSV","PIP":28,"FIO2":30}}
                                  pageX={pageX} pageY={pageY}
        />
      </>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
