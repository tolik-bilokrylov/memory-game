(this["webpackJsonptets-task"]=this["webpackJsonptets-task"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),u=(n(15),n(10)),o=n(5),s=n(7),f=n(2);function d(e){for(var t=2;t<e;t++)if(e%t===0)return!1;return!0}var l=function(e){for(var t=[2],n=3;n<e;n+=2)d(n)&&t.push(n);return t.map((function(e){return{number:e}}))}(100);!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}}(l);var b=l.slice(0,9),j=(n(16),n(17),n(9)),v=n.n(j),O=n(0),m=function(e){var t=e.onClick,n=e.card,c=e.index,r=e.isInactive,a=e.isFlipped,i=e.isDisabled;return Object(O.jsxs)("div",{className:v()("card",{"is-flipped":a,"is-inactive":r}),onClick:function(){!a&&!i&&t(c)},children:[Object(O.jsx)("div",{className:"card-face card-font-face"}),Object(O.jsx)("div",{className:"card-face card-back-face",children:n.number})]})};n(19);function h(e,t,n){var c=e[t];e[t]=e[n],e[n]=c}var p=function(){var e=Object(c.useState)((function(){return function(e){for(var t=e.length;t>0;t--)h(e,t-1,Math.floor(Math.random()*t));return e}(b.concat(b))})),t=Object(f.a)(e,2),n=t[0],r=(t[1],Object(c.useState)([])),a=Object(f.a)(r,2),i=a[0],d=a[1],l=Object(c.useState)({}),j=Object(f.a)(l,2),v=j[0],p=j[1],x=Object(c.useState)(!1),k=Object(f.a)(x,2),N=k[0],g=k[1],M=Object(c.useRef)(null),S=function(){var e=Object(f.a)(i,2),t=e[0],c=e[1];if(g(!1),n[t].number===n[c].number)return p((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},n[t].number,!0))})),void d([]);M.current=setTimeout((function(){d([])}),500)},T=function(e){1===i.length?(d((function(t){return[].concat(Object(u.a)(t),[e])})),g(!0)):(clearTimeout(M.current),d([e]))};Object(c.useEffect)((function(){var e=null;return 2===i.length&&(e=setTimeout(S,300)),function(){clearTimeout(e)}}),[i]);var C=function(e){return i.includes(e)},I=function(e){return Boolean(v[e.number])};return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"card-cont",children:Object(O.jsx)("div",{className:"card-slot",children:n.map((function(e,t){return Object(O.jsx)("div",{className:"card-uno",children:Object(O.jsx)(m,{card:e,index:t,isDisabled:N,isInactive:I(e),isFlipped:C(t),onClick:T},t)},t)}))})})})};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5efabc7a.chunk.js.map