(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(8),s=c.n(a),i=(c(42),c(33)),o=c(21),l=c(28),u=c(10);function j(e){for(var t=2;t<e;t++)if(e%t===0)return!1;return!0}var d=function(e){for(var t=[2],c=3;c<e;c+=2)j(c)&&t.push(c);return t.map((function(e){return{number:e}}))}(100);!function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=[e[c],e[t]];e[t]=n[0],e[c]=n[1]}}(d);var b=d.slice(0,9),O=(c(43),c(44),c(84)),f=c(32),h=c(2),m=function(e){var t=e.moves,c=e.bestScore,n=e.handleRestart;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Memory Game"}),Object(h.jsx)(O.a,{children:Object(h.jsxs)("div",{className:"sub-header",children:[Object(h.jsxs)("div",{className:"moves",children:[Object(h.jsx)("span",{className:"bold",children:"Moves:"}),t]}),Object(h.jsx)("div",{className:"reshuffle",children:Object(h.jsx)("button",{onClick:n,children:Object(h.jsx)(f.a,{})})}),localStorage.getItem("bestScore")&&Object(h.jsxs)("div",{className:"high-score",children:[Object(h.jsx)("span",{children:"Best Score:"}),c]})]})})]})},v=(c(46),c(22)),x=c.n(v),p=function(e){var t=e.onClick,c=e.card,n=e.index,r=e.isInactive,a=e.isFlipped,s=e.isDisabled;return Object(h.jsxs)("div",{className:x()("card",{"is-flipped":a,"is-inactive":r}),onClick:function(){!a&&!s&&t(n)},children:[Object(h.jsx)("div",{className:"card-face card-font-face"}),Object(h.jsx)("div",{className:"card-face card-back-face",children:c.number})]})},g=c(83),S=c(82),N=c(80),y=c(81),I=c(79),M=(c(47),function(e){var t=e.handleRestart,c=e.showModal,n=e.bestScore,r=e.moves;return Object(h.jsx)("div",{children:Object(h.jsxs)(g.a,{open:c,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(h.jsx)("h2",{children:"Memory Game"}),Object(h.jsx)(I.a,{id:"alert-dialog-title",children:"Hurray !!! You completed the game !!"}),Object(h.jsx)(N.a,{children:Object(h.jsxs)(y.a,{id:"alert-dialog-description",children:["You got ",r," moves.Your best score is ",n]})}),Object(h.jsx)(S.a,{children:Object(h.jsx)("button",{onClick:t,color:"primary",children:"Restart"})})]})})});c(52);function k(e,t,c){var n=e[t];e[t]=e[c],e[c]=n}function R(e){for(var t=e.length;t>0;t--){k(e,t-1,Math.floor(Math.random()*t))}return e}var T=function(){var e=Object(n.useState)((function(){return R(b.concat(b))})),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(u.a)(a,2),j=s[0],d=s[1],O=Object(n.useState)({}),f=Object(u.a)(O,2),v=f[0],x=f[1],g=Object(n.useState)(0),S=Object(u.a)(g,2),N=S[0],y=S[1],I=Object(n.useState)(!1),k=Object(u.a)(I,2),T=k[0],w=k[1],C=Object(n.useState)(!1),E=Object(u.a)(C,2),Y=E[0],B=E[1],D=Object(n.useState)(JSON.parse(localStorage.getItem("bestScore"))||Number.POSITIVE_INFINITY),F=Object(u.a)(D,2),J=F[0],G=F[1],H=Object(n.useRef)(null),K=function(){var e=Object(u.a)(j,2),t=e[0],n=e[1];if(B(!1),c[t].number===c[n].number)return x((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},c[t].number,!0))})),void d([]);H.current=setTimeout((function(){d([])}),500)},P=function(e){1===j.length?(d((function(t){return[].concat(Object(i.a)(t),[e])})),y((function(e){return e+1})),B(!0)):(clearTimeout(H.current),d([e]))};Object(n.useEffect)((function(){var e=null;return 2===j.length&&(e=setTimeout(K,300)),function(){clearTimeout(e)}}),[j]),Object(n.useEffect)((function(){!function(){if(Object.keys(v).length===b.length){w(!0);var e=Math.min(N,J);G(e),localStorage.setItem("bestScore",e)}}()}),[v]);var V=function(e){return j.includes(e)},_=function(e){return Boolean(v[e.number])},q=function(){x({}),d([]),w(!1),y(0),B(!1),r(R(b.concat(b)))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{moves:N,bestScore:J,handleRestart:q}),Object(h.jsx)("div",{className:"card-cont",children:Object(h.jsx)("div",{className:"card-slot",children:c.map((function(e,t){return Object(h.jsx)("div",{className:"card-uno",children:Object(h.jsx)(p,{card:e,index:t,isDisabled:Y,isInactive:_(e),isFlipped:V(t),onClick:P},t)},t)}))})}),Object(h.jsx)(M,{showModal:T,moves:N,bestScore:J,handleRestart:q})]})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.cbf4d04a.chunk.js.map