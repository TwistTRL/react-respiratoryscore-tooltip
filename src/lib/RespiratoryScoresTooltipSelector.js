import React, {Component} from "react";
import {fromDomXCoord_Linear} from "plot-utils";
import PropTypes from "prop-types";

const RSV_X_KEY = "TIME";
const LOCATION_START_KEY = "START";
const LOCATION_END_KEY = "END";

class RespiratoryScoresTooltipSelector extends Component {
  render(){
    return null;
  }

  componentDidMount(){
    this.updateTooltip();
  }

  componentDidUpdate(){
    this.updateTooltip();
  }

  updateTooltip() {
    let {updateTooltipHandler} = this.props;
    let { domX,width,minX,maxX,
          location,respiratorySupportVariable} = this.props;
    let dataX = fromDomXCoord_Linear(width,minX,maxX,domX);
    let selectedRSV = this.getLeftOrRightRSV(respiratorySupportVariable,dataX);
    let selectedLocation = this.getCurrentLocation(location,dataX);
    updateTooltipHandler(dataX,selectedLocation,selectedRSV);
  }

  getLeftOrRightRSV(rsv,dataX){
    if (rsv.length===0) {
      return null;
    }
    let ret = rsv[0];
    for (let rec in rsv) {
      if (rec[RSV_X_KEY]<=dataX) {
        ret = rec;
      }
      if (rec[RSV_X_KEY]>dataX){
        break;
      }
    }
    return ret;
  }
  
  getCurrentLocation(location,dataX) {
    let ret = null;
    for (let l in location) {
      if (l[LOCATION_START_KEY]<=dataX && dataX<=l[LOCATION_END_KEY]) {
        ret = l;
        break;
      }
    }
    return ret;
  }
}

export default RespiratoryScoresTooltipSelector;
