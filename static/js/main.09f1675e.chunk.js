(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),c=n.n(r),s=(n(69),n(56)),l=n(12),o=(n(70),n(71),n(50)),u=n.n(o),d=n(52),j=n.n(d),b=n(112),m=n(118),h=n(117),O=n(5),f=function(e){var t=e.addNewTimer,n=e.timers,i=Object(a.useState)(!1),r=Object(l.a)(i,2),c=r[0],s=r[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),f=d[0],v=d[1],g=Object(a.useState)(0),p=Object(l.a)(g,2),x=p[0],S=p[1],y=Object(a.useState)(0),T=Object(l.a)(y,2),C=T[0],N=T[1],w=Object(a.useState)(0),I=Object(l.a)(w,2),F=I[0],k=I[1],P=Object(a.useState)(""),E=Object(l.a)(P,2),W=E[0],B=E[1],D=function(){return s(!1)},M=function(){v(""),S(0),N(0),k(0)},A=function(e){e.target.value.length>2&&(e.target.value=e.target.value.substring(1)),"hours"===e.target.name?S(e.target.value):"minutes"===e.target.name&&e.target.value<=60?N(e.target.value):"seconds"===e.target.name&&e.target.value<=60&&k(e.target.value)};return Object(a.useEffect)((function(){var e=document.getElementById("createsNewTimer");n.length<1?(e.style.height="100vh",e.style.backgroundColor="#181A18",B(window.innerHeight/20)):(e.style.height="8vh",e.style.background="linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",e.style.padding="2rem",B(window.innerHeight/40))}),[n.length]),Object(O.jsxs)("div",{children:[Object(O.jsxs)(b.a,{style:{fontSize:W},id:"createsNewTimer",color:"primary",fullWidth:!0,variant:"contained",onClick:function(){return s(!0)},children:[Object(O.jsx)(j.a,{}),Object(O.jsx)("p",{children:"Add More timers"})]}),Object(O.jsx)(m.a,{open:c,onClose:D,style:{display:"flex",justifyContent:"center",marginTop:"8rem"},children:Object(O.jsxs)("div",{className:"modalContainer",children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0===f.length?alert("Please enter a title"):x<=0&&C<=0&&F<=0?alert("Please enter a valid time"):(t({id:u()(),title:f,timer:{hours:parseInt(x),minutes:parseInt(C),seconds:parseInt(F)}}),D(),M())},style:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)(h.a,{variant:"outlined",label:"New Title",value:f,onChange:function(e){v(e.target.value)}}),Object(O.jsxs)("div",{className:"modalTimeFields",children:[Object(O.jsx)(h.a,{type:"number",name:"hours",label:"hours",value:x.toString().padStart(2,"0"),onChange:A}),":",Object(O.jsx)(h.a,{type:"number",name:"minutes",label:"minutes",value:C.toString().padStart(2,"0"),onChange:A}),":",Object(O.jsx)(h.a,{type:"number",name:"seconds",label:"seconds",value:F.toString().padStart(2,"0"),onChange:A})]}),Object(O.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",children:"START"})]}),Object(O.jsx)(b.a,{onClick:M,children:"Clear"})]})})]})},v=(n(81),n(82),function(e){var t=e.hoursMinSecs,n=(e.title,e.id),i=e.removeTimerWhenFinished,r=e.resetTimer,c=e.handleResetTimer,s=e.isPaused,o=t.hours,u=t.minutes,d=t.seconds,j=Object(a.useState)([o,u,d]),b=Object(l.a)(j,2),m=Object(l.a)(b[0],3),h=m[0],f=m[1],v=m[2],g=b[1],p=function(){0===h&&0===f&&0===v?i(n):g(0===f&&0===v?[h-1,59,59]:0===v?[h,f-1,59]:[h,f,v-1])};return Object(a.useEffect)((function(){r&&(c(),g([parseInt(o),parseInt(u),parseInt(d)]))})),Object(a.useEffect)((function(){if(!s){var e=setInterval((function(){return p()}),1e3);return function(){return clearInterval(e)}}})),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"timetext",children:"".concat(h.toString().padStart(2,"0"),":").concat(f.toString().padStart(2,"0"),":").concat(v.toString().padStart(2,"0"))})})}),g=n(116),p=n(53),x=n.n(p),S=n(55),y=n.n(S),T=n(54),C=n.n(T),N=function(e){var t=e.timer,n=e.title,i=e.id,r=e.removeTimerWhenFinished,c=Object(a.useState)(!1),s=Object(l.a)(c,2),o=s[0],u=s[1],d=Object(a.useState)(!1),j=Object(l.a)(d,2),b=j[0],m=j[1],h=function(){u(!o)};return Object(O.jsxs)("div",{className:"cardContainer",id:n,children:[Object(O.jsx)(v,{hoursMinSecs:t,title:n,id:i,removeTimerWhenFinished:r,resetTimer:o,isPaused:b,handleResetTimer:h}),Object(O.jsx)("hr",{className:"cardDivider"}),Object(O.jsx)("h5",{className:"cardTitle",children:n}),Object(O.jsxs)("div",{className:"cardBtns",children:[Object(O.jsx)(g.a,{color:"primary","aria-label":"add",onClick:h,children:Object(O.jsx)(x.a,{})}),Object(O.jsx)(g.a,{color:"secondary","aria-label":"edit",onClick:function(){m(!b)},children:b?Object(O.jsx)(C.a,{}):Object(O.jsx)(y.a,{})})]})]})};var w=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=function(e){i(n.filter((function(t){return t.id!==e})))};return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(f,{addNewTimer:function(e){i((function(t){return[e].concat(Object(s.a)(t))}))},timers:n}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"timers",children:n.map((function(e){return Object(O.jsx)(N,{id:e.id,timer:e.timer,title:e.title,removeTimerWhenFinished:r},e.id)}))})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),I()}},[[83,1,2]]]);
//# sourceMappingURL=main.09f1675e.chunk.js.map