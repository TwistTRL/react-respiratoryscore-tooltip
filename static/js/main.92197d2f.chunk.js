(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,a,t){},176:function(e,a,t){"use strict";t.r(a);var l,r=t(14),n=t(15),o=t(17),c=t(16),i=t(18),m=t(5),s=t(0),p=t.n(s),E=t(66),u=t.n(E),d=t(29),b=(t(175),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e,a,t=this.props,l=t.location,r=t.timeStamp,n=t.ECMOVariables,o=t.VADVariables,c=t.respiratoryVariables,i=t.pageX,m=t.pageY,s=null,E=this.getLocationDisplay(l,r);return n&&(e=this.getECMODisplay(n)),o&&(a=this.getVADDisplay(o)),c&&(s=this.getRespiratoryDisplay(c)),p.a.createElement("div",{style:{position:"fixed",zIndex:9999,top:m-50,left:10+i,pointerEvents:"none",width:300,borderRadius:4,padding:0,margin:0,overflow:"hidden",border:"solid 1px black",boxShadow:"2px 2px 2px black"}},E,e,a,s)}},{key:"getLocationDisplay",value:function(e,a){var t=e.ward,l=e.room;return p.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:5,boxShadow:"0px 0px 5px black",whiteSpace:"nowrap",backgroundColor:"8S"===t?"#ff2a22":"#ffe7c9"}},p.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},t,": ",l)),p.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontSize:"12px",fontStyle:"italic"}},p.a.createElement("div",{style:{textAlign:"right"}},Object(d.format)(a,"MMM DD YYYY")),p.a.createElement("div",{style:{textAlign:"right"}},Object(d.format)(a,"HH:mm:ss"))))}},{key:"getECMODisplay",value:function(e){var a=e.ECMO_Flow_Rate_Weight_Normalized;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"ECMO"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow"),p.a.createElement("td",null,a," mL/kg/min")))))}},{key:"getVADDisplay",value:function(e){var a=e.Machine_Type;if("Abiomed"===a){var t=e["Abiomed Cardiac Index"];return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"VAD"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Device"),p.a.createElement("td",null,a)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Cardiac Index"),p.a.createElement("td",null,t)))))}if("Berlin"===a){var l=e["Berlin Heart Left Beat Rate"],r=e["Berlin Heart Left Pump"],n=e["Berlin Heart Right Beat Rate"],o=e["Berlin Heart Right Pump"],c=e["Membrane Movement, Left Ejection"]||"",i=e["Membrane Movement, Left Filling"]||"";return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"VAD"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Device"),p.a.createElement("td",null,a)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Left Beat Rate"),p.a.createElement("td",null,l," bpm")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Left Pump"),p.a.createElement("td",null,r," mL/kg/min")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Right Beat Rate"),p.a.createElement("td",null,n," bpm")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Right Pump"),p.a.createElement("td",null,o," mL/kg/min")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Left Ejection"),p.a.createElement("td",null,c.slice(0,2))),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Left Filling"),p.a.createElement("td",null,i.slice(0,2))))))}if("HeartWare"===a){var m=e["HeartWare Pump Flow"];return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"VAD"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Device"),p.a.createElement("td",null,a)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow"),p.a.createElement("td",null,m," LPM")))))}if("Impella"===a){var s=e["Impella Flow Rate"];return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"VAD"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Device"),p.a.createElement("td",null,a," LPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow"),p.a.createElement("td",null,s," LPM")))))}if("Quadrox"===a){var E=e["Quadrox Flow (L/min)"];return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"VAD"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Device"),p.a.createElement("td",null,a)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow"),p.a.createElement("td",null,E," LPM")))))}if("RotaFlow"===a){var u=e["RotaFlow Flow Measure (L/min)"];return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"VAD"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Device"),p.a.createElement("td",null,a)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow"),p.a.createElement("td",null,u)))))}}},{key:"getRespiratoryDisplay",value:function(e){var a=e.RST;if("RA"===a)return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},a));if("MASK"===a){var t=e.FiO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},a),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,t,"%")))))}if("BB"===a){var l=e["Flow Rate"],r=e.FiO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow Rate"),p.a.createElement("td",null,l," LPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO",p.a.createElement("sub",null,"2")),p.a.createElement("td",null,r,"%")))))}if("NC"===a){var n=e["Flow Rate"],o=e.FiO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow Rate"),p.a.createElement("td",null,n," LPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO",p.a.createElement("sub",null,"2")),p.a.createElement("td",null,o,"%")))))}if("HFNC"===a){var c=e.FiO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,c," cm H",p.a.createElement("sub",null,"2"),"O")))))}if("CPAP"===a){var i=e.CPAP,m=e["CPAP Flow"],s=e.Mask,E=e.FiO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"CPAP"),p.a.createElement("td",null,i," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"CPAP Flow"),p.a.createElement("td",null,m," LPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Mask"),p.a.createElement("td",null,s)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,E," cm H",p.a.createElement("sub",null,"2"),"O")))))}if("BIPAP"===a){var u=e.IPAP,d=e.EPAP,b=e.Rate,S=e["Rise Time"],y=e.Mask,R=e.FiO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"IPAP"),p.a.createElement("td",null,u," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"EPAP"),p.a.createElement("td",null,d," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Rate"),p.a.createElement("td",null,b," BPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Rise Time"),p.a.createElement("td",null,S," sec")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Mask"),p.a.createElement("td",null,y)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,R,"%")))))}if("BVM"===a)return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST));if("PSV"===a){var v=e.PS,N=e.PEEP,f=e.FiO2,T=e.Tv,P=e.RR,F=e.EtCO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("div",{style:{display:"flex"}},p.a.createElement("div",null,p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PS"),p.a.createElement("td",null,v," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PEEP"),p.a.createElement("td",null,N," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,f,"%"))))),p.a.createElement("div",null,p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Tv"),p.a.createElement("td",null,T," mL")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"RR"),p.a.createElement("td",null,P," BPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"EtCO2"),p.a.createElement("td",null,F," cm H",p.a.createElement("sub",null,"2"),"O")))))))}if("PCV"===a){var g=e.PIP,O=e.PEEP,w=e.VR,V=e.PS,C=e.FiO2,h=e["Tv (mandatory)"],M=e["Tv (spontaneous)"],A=e.RR,H=e.EtCO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("div",{style:{display:"flex"}},p.a.createElement("div",null,p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PIP"),p.a.createElement("td",null,g," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PEEP"),p.a.createElement("td",null,O," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"VR"),p.a.createElement("td",null,w," BPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PS"),p.a.createElement("td",null,V," mL")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,C," mL"))))),p.a.createElement("div",null,p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Tv (mand)"),p.a.createElement("td",null,h," mL")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Tv (spont)"),p.a.createElement("td",null,M," BPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"RR"),p.a.createElement("td",null,A," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"EtCO2"),p.a.createElement("td",null,H," cm H",p.a.createElement("sub",null,"2"),"O")))))))}if("VCV"===a){var x=e["Tv (set)"].TvSet,B=e.PEEP,k=e.PS,L=e.FiO2,D=e.PIP,I=e.RR,J=e.EtCO2;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("div",{style:{display:"flex"}},p.a.createElement("div",null,p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Tv (set)"),p.a.createElement("td",null,x," mL")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PEEP"),p.a.createElement("td",null,B," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PS"),p.a.createElement("td",null,k," BPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,L," mL"))))),p.a.createElement("div",null,p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PIP"),p.a.createElement("td",null,D," mL")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"RR"),p.a.createElement("td",null,I," BPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"EtCO2"),p.a.createElement("td",null,J," cm H",p.a.createElement("sub",null,"2"),"O")))))))}if("HFOV"===a){var z=e.MAP,j=e.Amplitude,_=e.Frequency,Y=e.Power,W=e.FiO2,Q=e.Flow;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"MAP"),p.a.createElement("td",null,z)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Amplitude"),p.a.createElement("td",null,j)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Frequency"),p.a.createElement("td",null,_," Hz")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Power"),p.a.createElement("td",null,Y)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,W,"%")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Flow"),p.a.createElement("td",null,Q," LPM")))))}if("HFJV"===a){var X=e["HFJV PIP"],K=e["HFJV Rate"],q=e["HFJV iTime"],U=e["HFJV MAP"],G=e["HFJV PEEP"],Z=e.FiO2,$=e.PIP,ee=e.PEEP,ae=e.Rate;return p.a.createElement("div",{style:{padding:5,backgroundColor:"#fff8ef",fontSize:"12px",whiteSpace:"nowrap"}},p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},e.RST),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"HFJVPIP"),p.a.createElement("td",null,X," mL")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"HFJVRate"),p.a.createElement("td",null,K," BPM")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"HFJViTime"),p.a.createElement("td",null,q," Sec")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"HFJVMAP"),p.a.createElement("td",null,U)),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"HFJVPEEP"),p.a.createElement("td",null,G," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"FiO2"),p.a.createElement("td",null,Z,"%")))),p.a.createElement("h1",{className:"RespiratoryScoresTooltip-title"},"CMV"),p.a.createElement("table",{className:"RespiratoryScoresTooltip-table"},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PIP"),p.a.createElement("td",null,$," mL")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"PEEP"),p.a.createElement("td",null,ee," cm H",p.a.createElement("sub",null,"2"),"O")),p.a.createElement("tr",null,p.a.createElement("td",{className:"RespiratoryScoresTooltip-table-variableName"},"Rate"),p.a.createElement("td",null,ae," BPM")))))}return null}}]),a}(s.PureComponent)),S={"8S:203":{ward:"8S",room:"203"},"8E:301":{ward:"8E",room:"301"}},y={on:{ECMO_Flow_Rate_Weight_Normalized:92},off:null},R={Abiomed:{Machine_Type:"Abiomed","Abiomed Cardiac Index":2.5},Berlin:{Machine_Type:"Berlin","Berlin Heart Left Beat Rate":70,"Berlin Heart Left Pump":25,"Berlin Heart Right Beat Rate":70,"Berlin Heart Right Pump":25,"Membrane Movement, Left Ejection":"++ Complete/almost complete membrane movement to end","Membrane Movement, Left Filling":"++ Complete/almost complete membrane movement to end"},HeartWare:{Machine_Type:"HeartWare","HeartWare Pump Flow":2.3},Impella:{Machine_Type:"Impella","Impella Flow Rate":1.8},Quadrox:{Machine_Type:"Quadrox","Quadrox Flow (L/min)":2.3},RotaFlow:{Machine_Type:"RotaFlow","RotaFlow Flow Measure (L/min)":3.56}},v={RA:{RST:"RA"},MASK:{RST:"MASK",FiO2:25},BB:{RST:"BB","Flow Rate":30,FiO2:20},HFNC:{RST:"HFNC",FiO2:40},CPAP:{RST:"CPAP",CPAP:10,"CPAP Flow":10,FiO2:20,Mask:"3M"},BIPAP:{RST:"BIPAP",IPAP:10,EPAP:10,Rate:20,"Rise Time":123,FiO2:30,Mask:"3M"},BVM:{RST:"BVM"},PSV:{RST:"PSV",PS:10,PEEP:10,FiO2:20,Tv:100,RR:20,EtCO2:30},PCV:{RST:"PCV",PIP:10,PEEP:10,VR:10,PS:10,FiO2:10,"Tv (mandatory)":10,"Tv (spontaneous)":10,RR:10,EtCO2:10},VCV:{RST:"VCV","Tv (set)":10,PEEP:10,PS:10,FiO2:10,PIP:10,RR:10,EtCO2:10},HFOV:{RST:"HFOV",MAP:10,Amplitude:10,Frequency:10,Power:10,FiO2:10,Flow:10},HFJV:(l={RST:"HFJV","HFJV PIP":10,"HFJV Rate":10,"HFJV iTime":10,"HFJV MAP":10,"HFJV PEEP":10,FiO2:10,PIP:10,PEEP:10,VR:10,PS:10},Object(m.a)(l,"FiO2",10),Object(m.a)(l,"Tv (mandatory)",10),Object(m.a)(l,"Tv (spontaneous)",10),Object(m.a)(l,"RR",10),Object(m.a)(l,"EtCO2",10),l)},N=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={pageX:100,pageY:200,locationSelection:"8S:203",timeStamp:new Date,ECMOVariablesSelection:"on",VADVariablesSelection:"Abiomed",respiratoryVariablesSelection:"RA"},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.pageX,l=a.pageY,r=a.locationSelection,n=a.timeStamp,o=a.ECMOVariablesSelection,c=a.VADVariablesSelection,i=a.respiratoryVariablesSelection;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",null,"pageX:",p.a.createElement("input",{type:"range",min:0,max:1e3,value:t,onChange:function(a){e.setState({pageX:Number.parseInt(a.target.value)})}})),p.a.createElement("div",null,"pageY:",p.a.createElement("input",{type:"range",min:0,max:1e3,value:l,onChange:function(a){e.setState({pageY:Number.parseInt(a.target.value)})}})),p.a.createElement("div",null,"location: preset:",p.a.createElement("select",{value:r,onChange:function(a){e.setState({locationSelection:a.target.value})}},p.a.createElement("option",{value:"8S:203"},"8S:203"),p.a.createElement("option",{value:"8E:301"},"8E:301")),p.a.createElement("pre",null,JSON.stringify(S[r]))),p.a.createElement("div",null,"timeStamp:",p.a.createElement("button",{onClick:function(a){e.setState({timeStamp:new Date})}},"Update timeStamp")),p.a.createElement("div",null,"ECMOVariables: preset:",p.a.createElement("select",{onChange:function(a){e.setState({ECMOVariablesSelection:a.target.value})}},p.a.createElement("option",{value:"on"},"on"),p.a.createElement("option",{value:"off"},"off")),p.a.createElement("pre",null,JSON.stringify(y[o]))),p.a.createElement("div",null,"VADVariables: preset:",p.a.createElement("select",{onChange:function(a){e.setState({VADVariablesSelection:a.target.value})}},p.a.createElement("option",{value:"Abiomed"},"Abiomed"),p.a.createElement("option",{value:"Berlin"},"Berlin"),p.a.createElement("option",{value:"HeartWare"},"HeartWare"),p.a.createElement("option",{value:"Impella"},"Impella"),p.a.createElement("option",{value:"Quadrox"},"Quadrox"),p.a.createElement("option",{value:"RotaFlow"},"RotaFlow")),p.a.createElement("pre",null,JSON.stringify(R[c]))),p.a.createElement("div",null,"respiratoryVariables: preset:",p.a.createElement("select",{onChange:function(a){e.setState({respiratoryVariablesSelection:a.target.value})}},p.a.createElement("option",{value:"RA"},"RA"),p.a.createElement("option",{value:"MASK"},"MASK"),p.a.createElement("option",{value:"BB"},"BB"),p.a.createElement("option",{value:"HFNC"},"HFNC"),p.a.createElement("option",{value:"CPAP"},"CPAP"),p.a.createElement("option",{value:"BIPAP"},"BIPAP"),p.a.createElement("option",{value:"BVM"},"BVM"),p.a.createElement("option",{value:"PSV"},"PSV"),p.a.createElement("option",{value:"PCV"},"PCV"),p.a.createElement("option",{value:"VCV"},"VCV"),p.a.createElement("option",{value:"HFOV"},"HFOV"),p.a.createElement("option",{value:"HFJV"},"HFJV")),p.a.createElement("pre",null,JSON.stringify(v[i]))),p.a.createElement(b,{location:S[r],timeStamp:n,ECMOVariables:y[o],VADVariables:R[c],respiratoryVariables:v[i],pageX:t,pageY:l}))}}]),a}(s.Component);u.a.render(p.a.createElement(N,null),document.getElementById("root"))},67:function(e,a,t){e.exports=t(176)}},[[67,1,2]]]);
//# sourceMappingURL=main.92197d2f.chunk.js.map