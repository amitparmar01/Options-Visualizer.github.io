(this["webpackJsonpoptions-visualizer"]=this["webpackJsonpoptions-visualizer"]||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),c=a.n(o),i=(a(63),a(64),a(11)),l=a.n(i),s=a(23),u=a(7),d=(a(66),a(57)),b=a(6),p={changeSymbol:function(e){return{type:"CHANGE_SYMBOL",payload:e}}};var f=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!0),f=Object(u.a)(i,2),m=f[0],v=f[1],E=Object(n.useState)(new Set),h=Object(u.a)(E,2),O=h[0],S=h[1],_=Object(b.b)(),g=Object(b.c)((function(e){return e.currentSymbol}));return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cloud.iexapis.com/stable/ref-data/iex/symbols?token="+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_IEX_API_KEY);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){S(new Set(e.map((function(e){return e.symbol}))))}))}),[]),r.a.createElement("div",{className:"Ticker-div"},r.a.createElement("form",{onSubmit:function(e){var t=o.trim().toUpperCase();t!==g&&_(p.changeSymbol(t)),e.preventDefault()}},r.a.createElement("label",{style:{paddingRight:"5px"}},r.a.createElement("input",{type:"text",placeholder:"Enter Ticker Symbol Here",value:o,onChange:function(e){var t=e.target.value.trim().toUpperCase();t.length<=5&&O.has(t)?v(!1):v(!0),c(e.target.value)},className:"Ticker-searchbar"})),r.a.createElement(d.a,{variant:"outline-primary",type:"submit",disabled:m,style:{float:"center",borderRadius:"0px"}},"Submit")))},m=(a(71),a(55));a(164);var v=function(e){var t=[],a=[],o=[],c="",i=Object(n.useState)(0),d=Object(u.a)(i,2),p=d[0],f=d[1],v=Object(n.useState)(0),E=Object(u.a)(v,2),h=E[0],O=E[1],S=Object(n.useState)(0),_=Object(u.a)(S,2),g=_[0],y=_[1],w=Object(b.c)((function(e){return e.currentSymbol}));if(Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("https://cloud.iexapis.com/stable/stock/"+t+"/quote?token="+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_IEX_API_KEY);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}void 0!==w&&function(t){return e.apply(this,arguments)}(w).then((function(e){O(e.week52High),y(e.week52Low),f(e.latestPrice)}))}),[w]),0!==h){var C=5*Math.floor(p/5),j=100*(p-C)-150;p<C&&(j=-150),o=[-150,-150,j,100*(h-C)-150,2*(h-C)*100-150],c="Long "+C+" call @ 1.50",t=[0,g,p,h,h+h-p],a=[{type:"line",mode:"vertical",scaleID:"x-axis-0",value:1,borderColor:"#38677D",borderWidth:2,label:{backgroundColor:"#959296",content:"52 wk Low",enabled:!0}},{type:"line",mode:"vertical",scaleID:"x-axis-0",value:2,borderColor:"#38677D",borderWidth:2,label:{backgroundColor:"#959296",content:"Current Price",enabled:!0}},{type:"line",mode:"vertical",scaleID:"x-axis-0",value:3,borderColor:"#38677D",borderWidth:2,label:{backgroundColor:"#959296",content:"52 wk High",enabled:!0}}]}var k={labels:t,datasets:[{label:c,fill:!1,lineTension:0,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:o}]};return r.a.createElement("div",{className:"Chart-div"},r.a.createElement(m.a,{data:k,options:{title:{display:!0,text:(void 0===w?"":w)+" Profit/Loss Chart",fontSize:20},legend:{display:!0,position:"right"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Profit or Loss",fontSize:18},ticks:{callback:function(e,t,a){return"$"+e}}}],xAxes:[{scaleLabel:{display:!0,labelString:"Price at Expiration",fontSize:18},ticks:{callback:function(e,t,a){return"$"+e}}}]},annotation:{drawTime:"beforeDatasetsDraw",annotations:a}}}))};function E(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,"Options Visualizer \xa0",r.a.createElement("img",{src:"/favicon.ico",style:{verticalAlign:"middle"},alt:"Logo"}))),r.a.createElement(f,null),r.a.createElement(v,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(170);var h=a(10),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SYMBOL":return t.payload;default:return e}},S=Object(h.b)({currentSymbol:O}),_=Object(h.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(b.a,{store:_},r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a(171)},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.e1dcb327.chunk.js.map