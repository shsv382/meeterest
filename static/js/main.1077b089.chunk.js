(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(56)},32:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),s=n.n(i),o=(n(32),n(5)),c=n(6),l=n(8),u=n(7),m=n(9),d=(n(34),n(13)),f=n(17),h=n.n(f),p=n(23),g=function(){var e=Object(p.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_PENDING"}),e.next=3,fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()});case 3:n=e.sent,t({type:"REQUEST_SUCCESS",payload:n});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),v=(n(43),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"loader"}),r.a.createElement("div",{className:"loader"}),r.a.createElement("div",{className:"loader"}))}),E=(n(45),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"menuExpand",value:function(e){document.querySelectorAll(".hamburger-line").forEach(function(e){e.style.animationPlayState="running",e.onanimationend=function(){e.style.animationPlayState="paused"}});var t=document.querySelector("nav");t.style.animationPlayState="running",t.onanimationend=function(){t.style.animationPlayState="paused"}}},{key:"animationIterationHandler",value:function(e){e.target.style.animationPlayState="paused"}},{key:"render",value:function(){return r.a.createElement("header",{className:"head"},r.a.createElement("div",{className:"logo"},"Meeterest"),r.a.createElement("div",{className:"open-menu",onClick:this.menuExpand.bind(this)},r.a.createElement("div",{className:"hamburger"},r.a.createElement("div",{className:"hamburger-line forward-animation",onAnimationIteration:this.animationIterationHandler.bind(this)}),r.a.createElement("div",{className:"hamburger-line forward-animation",onAnimationIteration:this.animationIterationHandler.bind(this)}),r.a.createElement("div",{className:"hamburger-line forward-animation",onAnimationIteration:this.animationIterationHandler.bind(this)}))),r.a.createElement("nav",{onAnimationIteration:this.animationIterationHandler.bind(this)},r.a.createElement("div",{class:"nav-button"},"Home"),r.a.createElement("div",{class:"nav-button"},"Help"),r.a.createElement("div",{class:"nav-button"},"About"),r.a.createElement("div",{class:"nav-button"},"Lang")))}}]),t}(r.a.Component)),b=n(24),y=n(10),j=(n(47),n(49),n(57)),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(this.props.main){var e=this.refs.Main;e.classList.remove("carousel-main-item");setTimeout(function(){e.classList.add("carousel-main-item")},4)}else{var t=this.refs.Sibling;t.classList.remove("carousel-sibling-item");setTimeout(function(){t.classList.add("carousel-sibling-item")},4)}}},{key:"componentDidUpdate",value:function(){if(this.props.main){var e=this.refs.Main;e.classList.remove("carousel-main-item");setTimeout(function(){e.classList.add("carousel-main-item")},4)}else{var t=this.refs.Sibling;t.classList.remove("carousel-sibling-item");setTimeout(function(){t.classList.add("carousel-sibling-item")},4)}}},{key:"render",value:function(){return r.a.createElement("li",{ref:this.props.main?"Main":"Sibling"},r.a.createElement(j.a,{to:"/users"},this.props.item.title))}}]),t}(r.a.Component),S=(n(51),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currentMainItem:0,items:[{title:"\u041d\u0430\u0443\u043a\u0430",href:"/meeterest/users"},{title:"\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u0430",href:"/meeterest/users"},{title:"\u0421\u043f\u043e\u0440\u0442",href:"/meeterest/users"},{title:"\u0422\u0443\u0440\u0438\u0437\u043c",href:"/meeterest/users"},{title:"\u041a\u0438\u043d\u043e",href:"/meeterest/users"},{title:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",href:"/meeterest/users"},{title:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",href:"/meeterest/users"},{title:"\u041a\u0430\u0444\u0435",href:"/meeterest/users"}]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"changeMain",value:function(e){return e.preventDefault(),e.stopPropagation(),"wheel"===e.type.toLowerCase()&&(e.deltaY=e.deltaY/25),"wheel"!==e.type.toLowerCase()&&"touchmove"!==e.type.toLowerCase()||this.setState({currentMainItem:(this.state.currentMainItem+(e.deltaY<0?-1:1)+this.state.items.length)%this.state.items.length}),!1}},{key:"render",value:function(){var e=[this.state.items[(this.state.currentMainItem-2+this.state.items.length)%this.state.items.length],this.state.items[(this.state.currentMainItem-1+this.state.items.length)%this.state.items.length],this.state.items[this.state.currentMainItem],this.state.items[(this.state.currentMainItem+1)%this.state.items.length],this.state.items[(this.state.currentMainItem+2)%this.state.items.length]].map(function(e,t){return r.a.createElement(O,{item:e,main:2===t})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"category-carousel form-primary",onTouchMove:this.changeMain.bind(this),onWheel:this.changeMain.bind(this)},e))}}]),t}(r.a.Component)),w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).findCoupleClick=n.findCoupleClick.bind(Object(y.a)(Object(y.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"findCoupleClick",value:function(e){var t=document.querySelector(".find-couple"),n=document.querySelector(".set-gender");t.classList.toggle("form-secondary"),t.classList.toggle("form-primary"),t.style.animationDirection="reverse",t.style.animationPlayState="running",n.classList.toggle("form-primary"),n.classList.toggle("form-secondary")}},{key:"shouldComponentUpdate",value:function(e,t){return this.props!==e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"find-couple-form"},r.a.createElement(S,null),r.a.createElement("div",{className:"form-secondary find-couple"},r.a.createElement("h3",null,"I'd be glad to..."),r.a.createElement("input",{type:"text",placeholder:"go to the cinema"}),r.a.createElement("a",{href:"#",className:"action-anchor",onClick:this.findCoupleClick},"Find a couple")),r.a.createElement("div",{className:"form-secondary set-gender"},r.a.createElement("div",{className:"set-gender-description"},"I'm ",this.props.selfGender),r.a.createElement("div",{className:"set-gender-icon","data-gender":"male",onClick:this.props.setSelfGender},r.a.createElement("span",null)),r.a.createElement("div",{className:"set-gender-icon","data-gender":"female",onClick:this.props.setSelfGender},r.a.createElement("span",null)),r.a.createElement("div",{className:"set-gender-description"},"find ",this.props.findingGender),r.a.createElement("div",{className:"set-gender-icon"},r.a.createElement("span",null)),r.a.createElement("div",{className:"set-gender-icon"},r.a.createElement("span",null)),r.a.createElement("a",Object(b.a)({href:"#",className:"action-anchor"},"className","show-candidates"),"Show candidates"))))}}]),t}(r.a.Component),k=(n(53),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.isPending?r.a.createElement(v,null):this.props.users.map(function(e,t){return r.a.createElement("div",{className:"users"},r.a.createElement(N,{key:t,id:e.id,name:e.name,email:e.email}))})}}]),t}(r.a.Component)),N=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",null,r.a.createElement("img",{alt:"user",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},C=n(58),G=n(60),I=n(59),P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={selfGender:"male",findingGender:"female"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestUsers()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(C.a,null,r.a.createElement(G.a,null,r.a.createElement(I.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(w,{selfGender:e.props.selfGender,setSelfGender:e.props.onSetSelfGender})}}),r.a.createElement(I.a,{path:"/users",render:function(t){return r.a.createElement(k,{isPending:e.props.isPending,users:e.props.users})}}),r.a.createElement(I.a,{path:"/meeterest/",render:function(t){return r.a.createElement(w,{selfGender:e.props.selfGender,setSelfGender:e.props.onSetSelfGender})}}),r.a.createElement(I.a,{path:"/meeterest/users",render:function(t){return r.a.createElement(k,{isPending:e.props.isPending,users:e.props.users})}}))))}}]),t}(a.Component),L=Object(d.b)(function(e){return{selfGender:e.setSelfGender.selfGender,users:e.requestUsers.users,isPending:e.requestUsers.isPending,error:e.requestUsers.error}},function(e){return{onSetSelfGender:function(t){return e({type:"SET_GENDER",payload:t.target.dataset.gender})},onRequestUsers:function(){return g(e)}}})(P),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var R=n(11),T={selfGender:"male",findingGender:"female"},A={isPending:!1,users:[],error:""},q=Object(R.b)({setSelfGender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_GENDER":return Object.assign({},e,{selfGender:t.payload});default:return e}},requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SUCCESS":return Object.assign({},e,{users:t.payload,isPending:!1});case"REQUEST_ERROR":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),x=Object(R.c)(q);s.a.render(r.a.createElement(d.a,{store:x},r.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meeterest",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meeterest","/service-worker.js");M?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):U(t,e)})}}()}},[[27,2,1]]]);
//# sourceMappingURL=main.1077b089.chunk.js.map