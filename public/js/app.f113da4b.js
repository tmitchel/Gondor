(function(t){function e(e){for(var a,n,i=e[0],l=e[1],u=e[2],c=0,d=[];c<i.length;c++)n=i[c],o[n]&&d.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},n={app:0},o={app:0},s=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4e71e91b"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise(function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"6ecd5319"}[t]+".css",o=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],c=u.getAttribute("data-href");if(c===a||c===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],f.parentNode.removeChild(f),r(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){n[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,r){a=o[t]=[e,r]});e.push(a[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(t),u=function(e){c.onerror=c.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");s.type=a,s.request=n,r[1](s)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{attrs:{id:"nav"}}),r("router-view")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary nav"},[r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Gondor")]),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})]),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[r("ul",{staticClass:"navbar-nav mr-auto"}),r("form",{staticClass:"form-inline my-2 my-lg-0"},[r("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search"}}),r("button",{staticClass:"btn btn-secondary my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])])}],s=(r("034f"),r("2877")),i={},l=Object(s["a"])(i,n,o,!1,null,null,null),u=l.exports,c=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("HomePage")],1)},f=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"jumbotron"},[r("h1",[t._v("All Jobs for user: "+t._s(t.username))]),t._l(t.jobs,function(e){return r("div",{key:e._DAG,staticClass:"card-deck"},t._l(e,function(e){return r("div",{key:e.DAG,staticClass:"card mb-3 w-25"},[r("h3",{staticClass:"card-header"},[t._v("Job ID "+t._s(e.DAG))]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.Total)+" Total Jobs")]),r("h6",{staticClass:"card-subtitle text-muted"},[t._v("Started at "+t._s(e.Time)+" on "+t._s(e.Date))]),r("router-link",{staticClass:"stretched-link",attrs:{to:e.DAG}})],1),r("div",{staticClass:"card-footer text-muted bg-light align-middle"},[r("div",{staticClass:"progress",staticStyle:{height:"120%"}},[r("div",{staticClass:"progress-bar",style:"width: "+e.percent+"%; font-size: 150%;",attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(e.percent)+"% Completed")])])])])}),0)})],2)},b=[],m=(r("a481"),r("cebc")),v=(r("55dd"),r("96cf"),r("3b8d")),h="http://localhost:8000/api",g={name:"HomePage",data:function(){return{jobs:[[]],username:""}},mounted:function(){this.load()},methods:{load:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e,r,a,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(h);case 2:if(e=t.sent,200!==e.status){t.next=13;break}return t.next=6,e.json();case 6:for(r=t.sent,a=[],n=[],r.jobs.sort(function(t,e){return 100*e.Done/e.Total-100*t.Done/t.Total}),o=0;o<r.jobs.length;o++)n.push(Object(m["a"])({},r.jobs[o],{DAG:r.jobs[o].DAG.replace("dag+",""),percent:Math.floor(100*r.jobs[o].Done/r.jobs[o].Total)})),(o+1)%4===0&&(a.push(n),n=[]);this.jobs=a,this.username=a[0][0].Username;case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},y=g,_=Object(s["a"])(y,p,b,!1,null,null,null),C=_.exports,j={name:"home",components:{HomePage:C}},w=j,x=Object(s["a"])(w,d,f,!1,null,null,null),k=x.exports;a["default"].use(c["a"]);var O=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/:id",name:"jobPage",component:function(){return r.e("about").then(r.bind(null,"e658"))}}]}),T=r("9f7b"),A=r.n(T);a["default"].config.productionTip=!1,a["default"].use(A.a),new a["default"]({router:O,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,r){}});
//# sourceMappingURL=app.f113da4b.js.map