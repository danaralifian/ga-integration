(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{O40h:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("eVuF"),o=t.n(r);function s(n,e,t,r,s,u,a){try{var c=n[u](a),i=c.value}catch(l){return void t(l)}c.done?e(i):o.a.resolve(i).then(r,s)}function u(n){return function(){var e=this,t=arguments;return new o.a(function(r,o){var u=n.apply(e,t);function a(n){s(u,r,o,a,c,"next",n)}function c(n){s(u,r,o,a,c,"throw",n)}a(void 0)})}}},RXBc:function(n,e,t){"use strict";t.r(e);var r=t("ln6h"),o=t.n(r),s=t("O40h"),u=t("q1tI"),a=t.n(u),c=t("djf4"),i=t("YFqc"),l=t.n(i),f=t("zgjP"),d=t.n(f),h=a.a.createElement,p=function(n){return h(c.a,null,h("h1",null,"Batman TV Shows"),h("ul",null,n.shows.map(function(n){return h("li",{key:n.id},h(l.a,{href:"/p/[id]",as:"/p/".concat(n.id)},h("a",null,n.name)))})))};p.getInitialProps=Object(s.a)(o.a.mark(function n(){var e,t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d()("https://api.tvmaze.com/search/shows?q=batman");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,console.log("Show data fetched. Count: ".concat(t.length)),n.abrupt("return",{shows:t.map(function(n){return n.show})});case 8:case"end":return n.stop()}},n)})),e.default=p},"m/Gl":function(n,e,t){"use strict";t.r(e),e.default=function(n,e){return e=e||{},new Promise(function(t,r){var o=new XMLHttpRequest,s=[],u=[],a={},c=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:c,headers:{keys:function(){return s},entries:function(){return u},get:function(n){return a[n.toLowerCase()]},has:function(n){return n.toLowerCase()in a}}}};for(var i in o.open(e.method||"get",n,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(n,e,t){s.push(e=e.toLowerCase()),u.push([e,t]),a[e]=a[e]?a[e]+","+t:t}),t(c())},o.onerror=r,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(i,e.headers[i]);o.send(e.body||null)})}},vlRD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RXBc")}])},zgjP:function(n,e,t){n.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["vlRD",1,0]]]);