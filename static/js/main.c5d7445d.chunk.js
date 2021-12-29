(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c.n(n),s=c(24),u=c.n(s),o=(c(30),c(9)),i=c.n(o),j=c(13),l=c(2),b=(c(32),c(10)),m=c.n(b),O=c(5),d=(c(65),function(e){var t=e.defaultCountry,c=e.changeSelectValue,n=e.amount,a=e.changeInput,s=e.\u0441urrencyShortName,u=e.currencySymbol,o=e.countries,i=e.countryFlag,j=e.currencyFullName,l=e.currencyFooterName,b=e.footerCurrencyRate,m=o&&o.map((function(e){return Object(r.jsx)("option",{value:e.name.common,children:e.name.common.length>25?e.name.common.slice(0,30)+"...":e.name.common},e.name.common)}));return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"currency__country",children:Object(r.jsx)("select",{value:t,onChange:c,children:m})}),Object(r.jsxs)("div",{className:"currency__content",children:[Object(r.jsxs)("div",{className:"currency__content__symbol",children:[Object(r.jsxs)("p",{children:[u," ",s]}),Object(r.jsx)("img",{src:i,alt:i})]}),Object(r.jsx)("input",{type:"number",value:n||"",onChange:a,min:"0"})]}),Object(r.jsxs)("div",{className:"currency__board",children:[Object(r.jsx)("div",{className:"currency__board__name",children:j}),Object(r.jsx)("div",{className:"currency__board__value",children:"1 ".concat(s," = ").concat(b," ").concat(l)})]})]})}),h=(c(66),function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:["Currency converter is an app for showing relevant currency rates from ",Object(r.jsx)("a",{href:"https://www.frankfurter.app",children:"Frankfurter API"}),Object(r.jsx)("br",{}),"This project was created by ",Object(r.jsx)("a",{href:"https://github.com/rgdzv",children:"Ramis Gadzhiomarov"}),Object(r.jsx)("br",{})," You can find code source ",Object(r.jsx)("a",{href:"https://github.com/rgdzv/react-currency-converter",children:"here"})]})]})}),f=Object(n.memo)(h),p=(c(67),function(e){var t=e.children;return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("div",{className:"header__name",children:t}),Object(r.jsx)("div",{className:"header__date",children:(new Date).toLocaleDateString()})]})}),x=Object(n.memo)(p),v=c.p+"static/media/preloader.20cbc66a.gif",y=function(){var e,t,c=Object(n.useState)([]),a=Object(l.a)(c,2),s=a[0],u=a[1],o=Object(n.useState)(""),b=Object(l.a)(o,2),h=b[0],p=b[1],y=Object(n.useState)(""),g=Object(l.a)(y,2),S=g[0],N=g[1],_=Object(n.useState)(""),F=Object(l.a)(_,2),k=F[0],w=F[1],C=Object(n.useState)(""),R=Object(l.a)(C,2),E=R[0],I=R[1],z=Object(n.useState)(""),D=Object(l.a)(z,2),V=D[0],J=D[1],P=Object(n.useState)(""),T=Object(l.a)(P,2),A=T[0],B=T[1],G=Object(n.useState)(""),H=Object(l.a)(G,2),L=H[0],M=H[1],U=Object(n.useState)(""),W=Object(l.a)(U,2),Y=W[0],q=W[1],K=Object(n.useState)(""),Q=Object(l.a)(K,2),X=Q[0],Z=Q[1],$=Object(n.useState)(""),ee=Object(l.a)($,2),te=ee[0],ce=ee[1],re=Object(n.useState)(0),ne=Object(l.a)(re,2),ae=ne[0],se=ne[1],ue=Object(n.useState)(0),oe=Object(l.a)(ue,2),ie=oe[0],je=oe[1],le=Object(n.useState)(1),be=Object(l.a)(le,2),me=be[0],Oe=be[1],de=Object(n.useState)(!0),he=Object(l.a)(de,2),fe=he[0],pe=he[1],xe=Object(n.useState)(0),ve=Object(l.a)(xe,2),ye=ve[0],ge=ve[1],Se=Object(n.useState)(!0),Ne=Object(l.a)(Se,2),_e=Ne[0],Fe=Ne[1],ke=Object(n.useState)(""),we=Object(l.a)(ke,2),Ce=we[0],Re=we[1];fe?(e=me,t=parseFloat((me*ye).toFixed(2))):(t=me,e=parseFloat((me/ye).toFixed(2)));var Ee=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c,r,n,a,s,o,j,l,b,O,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://api.frankfurter.app/currencies");case 3:return t=e.sent,e.next=6,t.data;case 6:return c=e.sent,e.next=9,m.a.get("https://restcountries.com/v3.1/all");case 9:return r=e.sent,e.next=12,r.data;case 12:return n=e.sent,e.next=15,m.a.get("https://api.frankfurter.app/latest?from=USD");case 15:return a=e.sent,e.next=18,a.data.rates;case 18:s=e.sent,o=Object.keys(s)[26],j=n.filter((function(e){return e.currencies})),l=j.filter((function(e){var t=Object.keys(e.currencies)[0];return c[t]})),b=l.sort((function(e,t){return e.name.common>t.name.common?1:e.name.common<t.name.common?-1:0})),u(b),O=Object.keys(b[95].currencies)[0],d=Object.keys(b[72].currencies)[0],p(b[95].name.common),J(b[95].currencies[O].symbol),w(O),M(b[95].flags.svg),Z(b[95].currencies[O].name),N(b[72].name.common),B(b[72].currencies[d].symbol),I(d),q(b[72].flags.svg),ce(b[72].currencies[d].name),ge(s[o]),Fe(!1),e.next=44;break;case 40:e.prev=40,e.t0=e.catch(0),Re(e.t0.message),Fe(!1);case 44:case"end":return e.stop()}}),e,null,[[0,40]])})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k||!E){e.next=11;break}return e.next=4,m.a.get("https://api.frankfurter.app/latest?&amount=1&from=".concat(k,"&to=").concat(E));case 4:return t=e.sent,e.next=7,t.data.rates;case 7:c=e.sent,se(c[E].toFixed(2)),je(parseFloat((1/c[E]).toFixed(2))),ge(c[E]);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),Re("Please, convert different currencies!"),Fe(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Ee()}),[]),Object(n.useEffect)((function(){Ie()}),[k,E]),Object(r.jsxs)(O.Container,{style:{paddingTop:"20px",minHeight:"100vh"},children:[Object(r.jsx)(O.Row,{children:Object(r.jsx)(O.Col,{children:Object(r.jsx)(x,{children:"Currency converter"})})}),Object(r.jsx)(O.Row,{justify:"center",children:Object(r.jsxs)(O.Col,{style:{maxWidth:"350px"},children:[_e?Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("img",{src:v,alt:v})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{defaultCountry:h,changeSelectValue:function(e){p(e.target.value),s.slice(0).forEach((function(t){if(e.target.value===t.name.common){var c=Object.keys(t.currencies)[0];w(c),J(t.currencies[c].symbol),M(t.flags.svg),Z(t.currencies[c].name)}})),Re("")},amount:e,changeInput:function(e){Oe(parseFloat(e.target.value)),pe(!0)},"\u0441urrencyShortName":k,currencySymbol:V,countryFlag:L,currencyFullName:X,countries:s,currencyFooterName:E,footerCurrencyRate:ae}),Object(r.jsx)(d,{defaultCountry:S,changeSelectValue:function(e){N(e.target.value),s.slice(0).forEach((function(t){if(e.target.value===t.name.common){var c=Object.keys(t.currencies)[0];I(c),B(t.currencies[c].symbol),q(t.flags.svg),ce(t.currencies[c].name)}})),Re("")},amount:t,changeInput:function(e){Oe(parseFloat(e.target.value)),pe(!1)},"\u0441urrencyShortName":E,currencySymbol:A,countryFlag:Y,currencyFullName:te,countries:s,currencyFooterName:k,footerCurrencyRate:ie})]}),Ce&&Object(r.jsx)("div",{className:"error",children:Ce})]})}),Object(r.jsx)(O.Row,{children:Object(r.jsx)(O.Col,{children:Object(r.jsx)(f,{})})})]})};u.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.c5d7445d.chunk.js.map