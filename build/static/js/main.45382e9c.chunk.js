(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},21:function(e,t,a){},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),s=(a(21),a(22),a(3)),o=a.n(s),m=a(4),i=a(2),u=a(5),d=a.n(u),h=Object(n.createContext)(),E=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://covidnigeria.herokuapp.com/api");case 2:return t=e.sent,e.next=5,t.data.data.states;case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(h.Provider,{value:{States:l}},e.children)},f=function(){var e=Object(n.useContext)(h).States.map((function(e){return e&&c.a.createElement("tbody",null,c.a.createElement("tr",{className:""},c.a.createElement("th",{key:e.state},e.state),c.a.createElement("td",{key:e.confirmedCases},e.confirmedCases),c.a.createElement("td",{key:e.casesOnAdmission},e.casesOnAdmission),c.a.createElement("td",{key:e.discharged},e.discharged),c.a.createElement("td",{key:e.death},e.death)))}));return c.a.createElement("div",{className:"text-center table-responsive shadow"},c.a.createElement("table",{className:"table shadow table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",{className:""},c.a.createElement("th",null,"State"),c.a.createElement("th",null,"Confirmed Cases"),c.a.createElement("th",null,"In Recovery"),c.a.createElement("th",null,"Discharged"),c.a.createElement("th",null,"Deaths"))),e))},v=Object(n.createContext)(),g=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)([]),u=Object(i.a)(s,2),h=u[0],E=u[1],f=Object(n.useState)([]),g=Object(i.a)(f,2),b=g[0],p=g[1],N=Object(n.useState)(!1),x=Object(i.a)(N,2),O=x[0],j=x[1],w=Object(n.useState)(1),y=Object(i.a)(w,2),k=y[0],C=y[1],M=Object(n.useState)(10),S=Object(i.a)(M,2),A=S[0];S[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){var t,a,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,d.a.get("http://newsapi.org/v2/top-headlines?q=ncdc&country=ng&category=health&apiKey=eebab879f28a4bde815c864b57716b34");case 3:return t=e.sent,e.next=6,t.data.status;case 6:return a=e.sent,e.next=9,t.data.totalResults;case 9:return n=e.sent,e.next=12,t.data.articles;case 12:c=e.sent,E(a),p(n),r(c),j(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=l.length,I=k*A,P=I-A,R=l.slice(P,I);return c.a.createElement(v.Provider,{value:{currentArticle:R,Status:h,TotalResults:b,loading:O,ArticlePerPage:A,TotalArticle:T,handleChange:function(e){C(e)}}},e.children)},b=function(){var e=Object(n.useContext)(v).currentArticle,t=Object(n.useContext)(v).loading,a=e.map((function(e){return e.urlToImage||"null"===e.content?c.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-12 col-xl-12 mb-4",key:e.id},c.a.createElement("div",{className:"card h-100 shadow"},c.a.createElement("img",{src:e.urlToImage,className:"card-img-top h-60",alt:"..."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("a",{href:e.url},c.a.createElement("h6",{className:"card-title"},e.title))))):null}));return t?c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",null,"Loading...")):c.a.createElement("div",{className:"row mt-4"},a)},p=function(){for(var e=Object(n.useContext)(v),t=e.ArticlePerPage,a=e.TotalArticle,l=e.handleChange,r=[],s=1;s<=Math.ceil(a/t);s++)r.push(s);return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},r.map((function(e){return c.a.createElement("li",{key:e,className:"page-item"},c.a.createElement("a",{onClick:function(){return l(e)},href:"!#",className:"page-link"},e))})))))},N=function(){var e=Object(n.useContext)(v),t=e.currentArticle,a=e.loading,l=t.map((function(e){return e.urlToImage||"null"===e.content?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-mg-6 col-lg-6 col-xl-6"},c.a.createElement("img",{src:e.urlToImage,className:"d-block w-100 card-img",alt:"..."})),c.a.createElement("div",{className:"col-sm-12 col-mg-6 col-lg-6 col-xl-6 text-primary"},c.a.createElement("div",{className:"carousel-caption d-none d-md-block"},c.a.createElement("a",{href:e.url},c.a.createElement("h1",{className:"text-left"},e.title))))):null}));return a?c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",null,"Loading...")):c.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide shadow mb-5","data-ride":"carousel"},c.a.createElement("div",{className:"carousel-inner"},c.a.createElement("div",{className:"carousel-item active"},l[Math.floor(Math.random()*l.length)]),c.a.createElement("div",{className:"carousel-item"},l[Math.floor(Math.random()*l.length)]),c.a.createElement("div",{className:"carousel-item"},l[Math.floor(Math.random()*l.length)]),c.a.createElement("div",{className:"carousel-item"},l[Math.floor(Math.random()*l.length)]),c.a.createElement("div",{className:"carousel-item"},l[Math.floor(Math.random()*l.length)]),c.a.createElement("div",{className:"carousel-item"},l[Math.floor(Math.random()*l.length)])))},x=function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement(N,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-9 col-xl-9 overflow-auto"},c.a.createElement(f,null)),c.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-3 col-xl-3"},c.a.createElement(b,null),c.a.createElement(p,null))))},O=function(){return c.a.createElement("div",{className:""},c.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null,c.a.createElement(g,null,c.a.createElement(O,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.45382e9c.chunk.js.map