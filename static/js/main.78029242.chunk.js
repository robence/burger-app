(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),i=n.n(c),u=n(4),o=n(1),l=n(5),s={ADD_ITEM:function(e,t){var n=e.burgerItems,r=t.item;return{burgerItems:[].concat(Object(l.a)(n),[r])}},NEW_BURGER:function(){return{burgerItems:[]}}},d=Object(o.a)({},{burgerItems:[]}),m=Object(r.createContext)(d),f=Object(o.a)({},s),p=function(e,t){var n=(0,f[t.type])(e,t.payload);return Object(o.a)({},e,n)},h=function(e){var t=e.children,n=Object(r.useReducer)(p,d),c=Object(u.a)(n,2),i=c[0],o=c[1];return a.a.createElement(m.Provider,{value:{state:i,dispatch:o}},t)},g=function(){var e=Object(r.useContext)(m);return{state:e.state,dispatch:e.dispatch}};function v(e){var t=e.onClick;return a.a.createElement("span",{onClick:t,style:{border:"1px solid black",borderRadius:"20px",padding:"3px",width:"200px",display:"flex",fontWeight:"500",justifyContent:"center",height:"30px",alignItems:"center",cursor:"pointer"}},"Give me a damn burger!")}var E=["Salad","Bacon","Egg","Cheese","Meat"];function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*e)+t}function x(){var e=b(E.length);return E[e]}var y="ADD_ITEM",j="NEW_BURGER";function w(){var e=g().dispatch,t=function(t){return e(function(e){return{type:y,payload:{item:e}}}(t))},n=function(){return e({type:j})},c=function(){n();var e=b(5,1);["Top"].concat(function(e){for(var t=[];t.length<e;){for(var n=x();t.includes(n);)n=x();t.push(n)}return t}(e),["Bottom"]).forEach(function(e){return t(e)})};return Object(r.useEffect)(function(){c()},[]),a.a.createElement("div",null,a.a.createElement(v,{onClick:c}))}var C=function(e){var t=e.item;return a.a.createElement("div",{style:{margin:"2px"}},a.a.createElement("img",{style:{height:"auto",width:"auto",maxWidth:"100px",maxHeight:"100px"},src:"".concat(t,".png"),alt:"logo"}))};function I(){var e=g().state;return a.a.createElement("div",{style:{border:"1px solid black",height:"80%",width:"80%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},e.burgerItems.map(function(e,t){return a.a.createElement(C,{item:e,key:t})}))}function k(){return a.a.createElement("div",{style:{minWidth:"300px",minHeight:"350px",width:"95%",height:"95%",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"column"}},a.a.createElement(w,null),a.a.createElement(I,null))}function O(){return a.a.createElement("div",{style:{width:"100vw",height:"100vh",backgroundColor:"lightgrey",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement(k,null))}function D(){return a.a.createElement(O,null)}n(12);var R=document.getElementById("root");i.a.render(a.a.createElement(function(){return a.a.createElement(h,null,a.a.createElement(D,null))},null),R)},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.78029242.chunk.js.map