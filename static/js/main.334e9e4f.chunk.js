(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var r=c(26),n=(c(36),c(37),c(8)),a=c(3),s=c(4),i=c(10),l=c.n(i),j=c(1),o=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},d=function(){var e=Object(n.d)(),t=Object(s.a)(e,1)[0].toString();return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{to:"/",className:o,children:"Home"}),Object(j.jsx)(n.c,{to:"/people?".concat(t),className:o,children:"People"})]})})})},u=(c(39),function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(d,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(a.b,{})})})]})}),b=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},h=c(5),O=c(7),x=c(0),m=(c(40),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),p=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),f=function(e){return e.All="",e.Male="m",e.Female="f",e}({}),v=function(e){return e.Sex="sex",e.Query="query",e.Centuries="centuries",e.Sort="sort",e.Order="order",e}({}),N=function(e){var t=e.person,c=t.name,r=t.sex,a=t.slug,i=Object(n.d)(),o=Object(s.a)(i,1)[0].toString();return Object(j.jsx)(n.b,{to:"../".concat(a,"?").concat(o),className:l()({"has-text-danger":r===f.Female}),children:c})};function g(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var y="Something went wrong",S="There are no people on the server",w="There are no people matching the current search criteria",k=c(15),C=function(e){return e.map((function(t){return Object(k.a)(Object(k.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))};var L=function(e){var t=e.person,c=e.selectedSlug,r=t.sex,n=t.born,a=t.died,s=t.fatherName,i=t.motherName,o=t.father,d=t.mother,u=t.slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":u===c}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(N,{person:t})}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:d?Object(j.jsx)(N,{person:d}):i||"-"}),Object(j.jsx)("td",{children:o?Object(j.jsx)(N,{person:o}):s||"-"})]})},A=c(27);function F(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(s.a)(e,2),r=t[0],n=t[1];null===n?c.delete(r):Array.isArray(n)?(c.delete(r),n.forEach((function(e){c.append(r,e)}))):c.set(r,n)})),c.toString()}var P=["children","params"],E=function(e){var t=e.children,c=e.params,r=Object(A.a)(e,P),a=Object(n.d)(),i=Object(s.a)(a,1)[0];return Object(j.jsx)(n.b,Object(k.a)(Object(k.a)({to:{search:F(i,c)}},r),{},{children:t}))},B=c(6),_=function(e){var t=e.people,c=e.sort,r=e.order,n=Object(a.r)().slug,i=void 0===n?"":n;function o(e){var t,n,a=e===c&&!r;return e!==c?(n={},Object(B.a)(n,v.Sort,e),Object(B.a)(n,v.Order,null),n):a?Object(B.a)({},v.Order,"desc"):(t={},Object(B.a)(t,v.Sort,null),Object(B.a)(t,v.Order,null),t)}return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object.entries(p).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[n,Object(j.jsx)(E,{params:o(a),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:l()("fas",{"fa-sort":c!==a,"fa-sort-up":c===a&&!r,"fa-sort-down":c===a&&r})})})})]})},n)})),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(L,{selectedSlug:i,person:e},e.slug)}))})]})},M=c(9),Q=function(e){var t,c=e.query,r=e.filterBySex,a=e.centuries,i=Object(n.d)(),o=Object(s.a)(i,2),d=o[0],u=o[1];function b(e){return a.includes(e)?a.filter((function(t){return t!==e})):[].concat(Object(M.a)(a),[e])}return Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.entries(f).map((function(e){var t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)(E,{params:Object(B.a)({},v.Sex,n||null),className:l()({"is-active":n===r}),children:c},c)}))}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left",children:[Object(j.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:c,onChange:function(e){u(F(d,Object(B.a)({},v.Query,e.target.value||null)))}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(j.jsx)("div",{className:"level-left",children:Array.from({length:5},(function(e,t){var c=String(t+16);return Object(j.jsx)(E,{"data-cy":"century",className:l()("button","mr-1",{"is-info":a.includes(c)}),params:Object(B.a)({},v.Centuries,b(c)),children:c},c)}))}),Object(j.jsx)("div",{className:"level-right ml-4",children:Object(j.jsx)(E,{"data-cy":"centuryALL",className:l()("button","is-success",{"is-outlined":a.length}),params:Object(B.a)({},v.Centuries,[]),children:"All"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)(E,{className:"button is-link is-outlined is-fullwidth",params:(t={},Object(B.a)(t,v.Sex,null),Object(B.a)(t,v.Query,null),Object(B.a)(t,v.Centuries,[]),t),children:"Reset all filters"})})]})},R=function(){var e=Object(O.a)(Object(h.a)().mark((function e(t,c,r){var n;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,g();case 4:(n=e.sent).length||r(S),t(C(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r(y);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t,c,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(x.useState)(!1),i=Object(s.a)(a,2),o=i[0],d=i[1],u=Object(x.useState)(""),b=Object(s.a)(u,2),h=b[0],O=b[1],f=Object(n.d)(),N=Object(s.a)(f,1)[0],g=N.get(v.Query)||"",k=N.get(v.Sex)||"",C=N.getAll(v.Centuries)||[],L=N.get(v.Sort)||"",A=N.get(v.Order)||"",F=Object(x.useRef)(!0);Object(x.useEffect)((function(){R(r,d,O)}),[]);var P=function(e,t,c,r,n,a){var s=a.filter((function(r){var n=r.sex,a=r.name,s=r.born,i=r.motherName,l=r.fatherName,j=!0;if(e&&(j=n===e),t){var o=t.toLowerCase();j=j&&(a.toLowerCase().includes(o)||(null===i||void 0===i?void 0:i.toLowerCase().includes(o))||(null===l||void 0===l?void 0:l.toLowerCase().includes(o))||!1)}return c.length&&(j=j&&c.includes("".concat(Math.ceil(s/100)))),j}));return r&&s.sort((function(e,t){switch(r){case p.Name:return e.name.localeCompare(t.name);case p.Sex:return e.sex.localeCompare(t.sex);case p.Born:return e.born-t.born;case p.Died:return e.died-t.died;default:return 0}})),n&&s.reverse(),s}(k,g,C,L,A,c);Object(x.useEffect)((function(){F.current?F.current=!1:P.length?O(""):O(w)}),[P.length]);var E=!h&&!!c.length,B=h===y?"peopleLoadingError":h===S&&"noPeopleMessage";return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[E&&Object(j.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(j.jsx)(Q,{query:g,filterBySex:k,centuries:C})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"box table-container",children:[o&&Object(j.jsx)(m,{}),h&&Object(j.jsx)("p",{"data-cy":B,className:l()({"has-text-danger":h===y}),children:h}),E&&Object(j.jsx)(_,{people:P,sort:L,order:A})]})})]})})]})},q=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},D=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)(a.e,{children:Object(j.jsxs)(a.c,{path:"/",element:Object(j.jsx)(u,{}),children:[Object(j.jsx)(a.c,{index:!0,element:Object(j.jsx)(b,{})}),Object(j.jsx)(a.c,{path:"home",element:Object(j.jsx)(a.a,{to:"/",replace:!0})}),Object(j.jsx)(a.c,{path:"people",children:Object(j.jsx)(a.c,{path:":slug?",element:Object(j.jsx)(T,{})})}),Object(j.jsx)(a.c,{path:"*",element:Object(j.jsx)(q,{})})]})})})};Object(r.createRoot)(document.getElementById("root")).render(Object(j.jsx)(D,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.334e9e4f.chunk.js.map