(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var l=a(13),r=a(14),n=a(16),i=a(15),o=a(17),c=a(1),s=a.n(c),p=a(65),m=a.n(p),u=a(28),d=(a(174),function(e){function t(){return Object(l.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t,a=this.props,l=a.location,r=a.timeStamp,n=a.ECMOVariables,i=a.VADVariables,o=a.respiratoryVariables,c=a.pageX,p=a.pageY,m=null,u=this.getLocationDisplay(l,r);return n&&(e=this.getECMODisplay(n)),i&&(t=this.getVADDisplay(i)),o&&(m=this.getRespiratoryDisplay(o)),s.a.createElement("div",{style:{position:"fixed",zIndex:9999,top:p-50,left:10+c,pointerEvents:"none",width:300,borderRadius:4,padding:0,margin:0,overflow:"hidden",border:"solid 1px black",boxShadow:"2px 2px 2px black"}},u,e,t,m)}},{key:"getLocationDisplay",value:function(e,t){return s.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#ffe7c9",padding:5,boxShadow:"0px 0px 5px black",whiteSpace:"nowrap"}},s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},s.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"Location: ",e)),s.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontSize:"12px",fontStyle:"italic"}},s.a.createElement("div",{style:{textAlign:"right"}},Object(u.format)(t,"MMM DD YYYY")),s.a.createElement("div",{style:{textAlign:"right"}},Object(u.format)(t,"HH:mm:ss"))))}},{key:"getECMODisplay",value:function(e){var t=e.ECMO_Flow_Rate_Weight_Normalized;return s.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},s.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"ECMO"),s.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},s.a.createElement("tr",null,s.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow"),s.a.createElement("td",null,t," mL/kg/min"))))}},{key:"getVADDisplay",value:function(e){if("RotaWare"===e.Machine_Type)return s.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},s.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"VAD"),s.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},s.a.createElement("tr",null,s.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Machine"),s.a.createElement("td",null,"Machine_Type"))))}},{key:"getRespiratoryDisplay",value:function(e){if("PSV"===e.RST){var t=e.PIP,a=e.PEEP,l=e.FIO2;return s.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},s.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),s.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},s.a.createElement("tr",null,s.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PIP"),s.a.createElement("td",null,t," cm H",s.a.createElement("sub",null,"2"),"O"),s.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO",s.a.createElement("sub",null,"2")),s.a.createElement("td",null,l,"%")),s.a.createElement("tr",null,s.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PEEP"),s.a.createElement("td",null,a," cm H",s.a.createElement("sub",null,"2"),"O"))))}return null}}]),t}(c.PureComponent)),b=function(e){function t(){return Object(l.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(d,{location:"ICU",timeStamp:new Date,ECMOVariables:{ECMO_Flow_Rate_Weight_Normalized:90},VADVariables:{Machine_Type:"RotaWare"},respiratoryVariables:{RST:"PSV",PIP:28,FIO2:30},pageX:100,pageY:100})}}]),t}(c.Component);m.a.render(s.a.createElement(b,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(175)}},[[66,1,2]]]);
//# sourceMappingURL=main.14701c8e.chunk.js.map