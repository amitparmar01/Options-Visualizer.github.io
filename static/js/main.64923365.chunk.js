(this["webpackJsonpoptions-visualizer"]=this["webpackJsonpoptions-visualizer"]||[]).push([[0],{184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),i=(a(72),a(73),a(16)),o=a.n(i),u=a(29),s=a(7),d=(a(75),a(12)),p=a(6),b={changeSymbol:function(e){return{type:"CHANGE_SYMBOL",symbol:e}},updateStrategies:{addStrategy:function(){return{type:"ADD_STRATEGY"}},updateStrategy:function(e,t){return{type:"UPDATE_STRATEGY",index:e,strat:t}},updateLeg:function(e,t,a,n){return{type:"UPDATE_LEG",index:e,leg:t,field:a,value:n}},clearStrategy:function(e){return{type:"CLEAR_STRATEGY",index:e}},deleteStrategy:function(e){return{type:"DELETE_STRATEGY",index:e}},clearAll:function(){return{type:"CLEAR_ALL"}}}};var g=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!0),g=Object(s.a)(i,2),m=g[0],f=g[1],v=Object(n.useState)(new Set),E=Object(s.a)(v,2),y=E[0],S=E[1],C=Object(p.b)(),h=Object(p.c)((function(e){return e.currentSymbol}));return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cloud.iexapis.com/stable/ref-data/iex/symbols?token=pk_bd79aebbe66a47efb162e2717b930293");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){S(new Set(e.map((function(e){return e.symbol}))))}))}),[]),console.log("here"),r.a.createElement("div",{className:"Ticker-div"},r.a.createElement("form",{onSubmit:function(e){var t=l.trim().toUpperCase();t!==h&&C(b.changeSymbol(t)),e.preventDefault()}},r.a.createElement("label",{style:{paddingRight:"5px"}},r.a.createElement("input",{type:"text",placeholder:"Enter Ticker Symbol Here",value:l,onChange:function(e){var t=e.target.value.trim().toUpperCase();t.length<=5&&y.has(t)?f(!1):f(!0),c(e.target.value)},className:"Ticker-searchbar"})),r.a.createElement(d.a,{variant:"outline-primary",type:"submit",disabled:m,style:{float:"center",borderRadius:"0px"}},"Submit")))},m=(a(80),a(64));var f=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.currentStrategies.length}));return r.a.createElement("div",{className:"AddClear-div"},r.a.createElement(m.a,{"aria-label":"Add/Clear Group"},r.a.createElement(d.a,{disabled:4===t,onClick:function(t){e(b.updateStrategies.addStrategy()),t.preventDefault()}},"+ New Strategy (",t,")"),r.a.createElement(d.a,{disabled:0===t,onClick:function(t){e(b.updateStrategies.clearAll()),t.preventDefault()}},"Clear All")))},v=(a(81),a(65)),E=(a(176),a(182),["#191716","#E6AF2E","#E0E2DB","#BEB7A4"]);var y=function(e){var t=[],a=Object(n.useState)(0),l=Object(s.a)(a,2),c=l[0],i=l[1],d=Object(n.useState)(0),b=Object(s.a)(d,2),g=b[0],m=b[1],f=Object(n.useState)(0),y=Object(s.a)(f,2),S=y[0],C=y[1],h=Object(n.useState)([]),O=Object(s.a)(h,2),x=O[0],j=O[1],L=Object(n.useState)([0,0]),k=Object(s.a)(L,2),P=(k[0],k[1],Object(p.c)((function(e){return e.currentSymbol}))),D=Object(p.c)((function(e){return e.currentStrategies}));Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cloud.iexapis.com/stable/stock/"+t+"/quote?token=pk_bd79aebbe66a47efb162e2717b930293");case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}void 0!==P&&""!==P&&function(t){return e.apply(this,arguments)}(P).then((function(e){m(e.week52High),C(e.week52Low),i(e.latestPrice)}))}),[P]);var A=Math.ceil(S-c/10-10),T=Math.ceil(g+c/10+10);if(Object(n.useEffect)((function(){for(var e=[],t=0;t<D.length;t++)for(var a=0;void 0!==D[t].legs&&a<Object.keys(D[t].legs).length;a++)Number(D[t].legs[a].strike)+c/10>T&&(T=Number(D[t].legs[a].strike)+c/10);for(var n=0;n<D.length;n++){if(e.push([]),S+g+c!==0)for(var r=A;r<=T;)e[n].push({x:Number(r).toFixed(2),y:0}),r+=10;for(var l=0;void 0!==D[n].legs&&l<Object.keys(D[n].legs).length;l++)for(var i=0;i<e[n].length;i++){var o="-"===D[n].legs[l].direction?1:-1,u=D[n].legs[l].type,s=100*D[n].legs[l].premium;console.log(s);var d=D[n].legs[l].strike,p=D[n].legs[l].quantity,b=parseFloat(e[n][i].x),m=o*s;"C"===u&&b>=d&&(m=-o*(100*(b-d)-s)),"P"===u&&b<=d&&(m=-o*(100*(d-b)-s)),0!==s&&0!==d&&void 0!==s&&void 0!==d&&(e[n][i].y+=m*p)}}0==D.length||void 0===D[0].legs?j([]):j(e)}),[D]),0!==g){var w=5*Math.floor(c/5);c<w&&-150,"Long "+w+" call @ 1.50",t=[{type:"line",mode:"vertical",scaleID:"x-axis-0",value:Number(S).toFixed(2),borderColor:"#38677D",borderWidth:2,borderDash:[2],label:{backgroundColor:"#959296",content:"52 wk Low",position:"bottom",enabled:!0}},{type:"line",mode:"vertical",scaleID:"x-axis-0",value:Number(c).toFixed(2),borderColor:"#38677D",borderWidth:2,borderDash:[2],label:{backgroundColor:"#959296",content:"Current Price",enabled:!0}},{type:"line",mode:"vertical",scaleID:"x-axis-0",value:Number(g).toFixed(2),borderColor:"#38677D",borderWidth:2,borderDash:[2],label:{backgroundColor:"#959296",content:"52 wk High",position:"top",enabled:!0}}]}for(var _={datasets:[]},N=0;N<x.length;N++)_.datasets.push({label:"Strategy "+(N+1),fill:!1,lineTension:0,backgroundColor:"rgba(75, 192, 192, 1)",borderColor:E[N],borderWidth:2,data:x[N]});return r.a.createElement("div",{className:"Chart-div"},r.a.createElement(v.Line,{data:_,options:{title:{display:!0,text:(void 0===P?"":P)+" Profit/Loss Chart",fontSize:20},legend:{display:!0,position:"right"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Profit or Loss",fontSize:18},ticks:{callback:function(e,t,a){return"$"+e}}}],xAxes:[{type:"linear",scaleLabel:{display:!0,labelString:"Price at Expiration",fontSize:18},ticks:{callback:function(e,t,a){return"$"+e},min:A,max:T}}]},plugins:{zoom:{pan:{enabled:!0,mode:"xy"},zoom:{enabled:!1,mode:"xy"}}},annotation:{drawTime:"beforeDatasetsDraw",annotations:t}}}))},S=(a(184),a(185),a(5)),C=(a(186),a(66));var h=function(e){var t=Object(p.c)((function(t){return null==t.currentStrategies[e.id].legs?null:t.currentStrategies[e.id].legs[e.index]})),a=Object(p.b)();function l(t){var n="+"===t.target.value?"+":"-";a(b.updateStrategies.updateLeg(e.id,e.index,"direction",n))}function c(t){var n="P"===t.target.value?"P":"C";a(b.updateStrategies.updateLeg(e.id,e.index,"type",n))}return Object(n.useEffect)((function(){a(b.updateStrategies.updateLeg(e.id,e.index,"direction",e.direction)),a(b.updateStrategies.updateLeg(e.id,e.index,"type",e.type)),a(b.updateStrategies.updateLeg(e.id,e.index,"strike",0)),a(b.updateStrategies.updateLeg(e.id,e.index,"premium",0)),a(b.updateStrategies.updateLeg(e.id,e.index,"quantity",0))}),[a,e.id,e.index,e.direction,e.type,e.newStrat]),r.a.createElement("div",{className:"StratLeg-div"},r.a.createElement(S.a,null,r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Group,{as:C.a,controlID:"legDirection"},r.a.createElement(S.a.Check,{type:"radio",name:"dir",label:"Long",value:"+",checked:null==t?"+"===e.direction:"+"===t.direction,disabled:"+"!==e.direction&&!e.custom,onChange:l}),r.a.createElement(S.a.Check,{type:"radio",name:"dir",label:"Short",value:"-",checked:null==t?"-"===e.direction:"-"===t.direction,disabled:"-"!==e.direction&&!e.custom,onChange:l})),r.a.createElement(S.a.Group,{as:C.a,controlID:"legType"},r.a.createElement(S.a.Check,{type:"radio",name:"pc",label:"Put",value:"P",checked:null==t?"P"===e.type:"P"===t.type,disabled:"P"!==e.type&&!e.custom,onChange:c}),r.a.createElement(S.a.Check,{type:"radio",name:"pc",label:"Call",value:"C",checked:null==t?"C"===e.type:"C"===t.type,disabled:"C"!==e.type&&!e.custom,onChange:c})),r.a.createElement(S.a.Group,{as:C.a,controlID:"legStrike"},r.a.createElement(S.a.Label,null,"Strike"),r.a.createElement(S.a.Control,{value:null==t?0:t.strike,onChange:function(t){a(b.updateStrategies.updateLeg(e.id,e.index,"strike",t.target.value))}})),r.a.createElement(S.a.Group,{as:C.a,controlID:"legPremium"},r.a.createElement(S.a.Label,null,"Premium"),r.a.createElement(S.a.Control,{value:null==t?0:t.premium,onChange:function(t){a(b.updateStrategies.updateLeg(e.id,e.index,"premium",t.target.value))}})),r.a.createElement(S.a.Group,{as:C.a,controlID:"legQuantity"},r.a.createElement(S.a.Label,null,"Quantity"),r.a.createElement(S.a.Control,{value:null==t?0:t.quantity,onChange:function(t){a(b.updateStrategies.updateLeg(e.id,e.index,"quantity",t.target.value))}})))))};var O=function(e){var t=Object(p.b)(),a=Object(p.c)((function(t){return t.currentStrategies[e.id].strat}));return r.a.createElement("div",{className:"StratBody-div"},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,{controlID:"stratSelect"},r.a.createElement(S.a.Label,null,"Select Strategy"),r.a.createElement(S.a.Control,{as:"select",onChange:function(a){"---Select Strategy Type---"===a.target.value?t(b.updateStrategies.clearStrategy(e.id)):t(b.updateStrategies.updateStrategy(e.id,a.target.value))},value:"undefined"==typeof a?"---Select Strategy Type---":a},r.a.createElement("option",null,"---Select Strategy Type---"),Object.keys(e.table).map((function(e){return r.a.createElement("option",null,e)})))),r.a.createElement(S.a.Group,{controlID:"stratLegs"},"undefined"==typeof a?null:e.table[a].map((function(t,n){return[r.a.createElement(S.a.Label,null,"Leg ",n+1),r.a.createElement(h,{id:e.id,index:n,direction:t.charAt(0),type:t.charAt(1),newStrat:a,custom:a.startsWith("Custom")})]}))),r.a.createElement(d.a,{onClick:function(a){t(b.updateStrategies.deleteStrategy(e.id)),a.preventDefault()}},"Delete Strategy")))},x={"Custom (1 Leg)":["+C"],"Custom (2 Legs)":["+C","+C"],"Custom (3 Legs)":["+C","+C","+C"],"Custom (4 Legs)":["+C","+C","+C","+C"],"Bull Call Spread":["+C","-C"],"Bear Call Spread":["+C","-C"],"Bull Put Spread":["+P","-P"],"Bear Put Spread":["+P","-P"],"Long Straddle":["+C","+P"],"Long Strangle":["+C","+P"],"Long Call Butterfly":["+C","-C","-C","+C"],"Short Call Butterfly":["-C","+C","+C","-C"],"Long Put Butterfly":["+P","-P","-P","+P"],"Short Put Butterfly":["-P","+P","+P","-P"],"Iron Butterfly":["+P","-P","-C","+C"],"Reverse Iron Butterfly":["-P","+P","+C","-C"],"Iron Condor":["+P","-P","-C","+C"],"Jade Lizard":["-P","-C","+C"],"Long Guts":["+C","+P"]};var j=function(e){var t=Object(p.c)((function(e){return e.currentStrategies})),a=Object(n.useState)({}),l=Object(s.a)(a,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){i(x)}),[]),r.a.createElement("div",{className:"StratContainer-div"},t.map((function(e,a){return r.a.createElement(O,{id:a,strat:e.strat,legs:e.legs,table:c,thisStrategy:t[a]})})))};function L(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,"Options Visualizer \xa0",r.a.createElement("img",{src:"/favicon.ico",style:{verticalAlign:"middle"},alt:"Logo"}))),r.a.createElement(g,null),r.a.createElement(f,null),r.a.createElement(j,null),r.a.createElement(y,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(188);var k=a(15),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SYMBOL":return t.symbol;default:return e}},D=a(20),A=a(13),T=a(8),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_STRATEGY":return[].concat(Object(T.a)(e),[{}]);case"UPDATE_STRATEGY":return[].concat(Object(T.a)(e.slice(0,t.index)),[{strat:t.strat,legs:[]}],Object(T.a)(e.slice(t.index+1)));case"UPDATE_LEG":return[].concat(Object(T.a)(e.slice(0,t.index)),[Object(A.a)(Object(A.a)({},e[t.index]),{},{legs:Object(A.a)(Object(A.a)({},e[t.index].legs),{},Object(D.a)({},t.leg,Object(A.a)(Object(A.a)({},e[t.index].legs[t.leg]),{},Object(D.a)({},t.field,t.value))))})],Object(T.a)(e.slice(t.index+1)));case"CLEAR_STRATEGY":return[].concat(Object(T.a)(e.slice(0,t.index)),[{}],Object(T.a)(e.slice(t.index+1)));case"DELETE_STRATEGY":return[].concat(Object(T.a)(e.slice(0,t.index)),Object(T.a)(e.slice(t.index+1)));case"CLEAR_ALL":return[];default:return e}},_=Object(k.b)({currentSymbol:P,currentStrategies:w}),N=Object(k.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(p.a,{store:N},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){e.exports=a(189)},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.64923365.chunk.js.map