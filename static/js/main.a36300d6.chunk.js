(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(54)},30:function(e,t,n){},32:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),i=n.n(s),l=(n(30),n(5)),c=n(6),o=n(8),u=n(7),m=n(9),d=(n(32),n(13)),h=n(16),f=n.n(h),p=n(22),E=function(){var e=Object(p.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_PENDING"}),e.next=3,fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()});case 3:n=e.sent,t({type:"REQUEST_SUCCESS",payload:n});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),g=(n(41),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"loader"}),r.a.createElement("div",{className:"loader"}),r.a.createElement("div",{className:"loader"}))}),v=(n(43),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"menuExpand",value:function(e){document.querySelectorAll(".hamburger-line").forEach(function(e){e.style.animationPlayState="running",e.onanimationend=function(){e.style.animationPlayState="paused"}});var t=document.querySelector("nav");t.style.animationPlayState="running",t.onanimationend=function(){t.style.animationPlayState="paused"}}},{key:"animationIterationHandler",value:function(e){e.target.style.animationPlayState="paused"}},{key:"render",value:function(){return r.a.createElement("header",{className:"head"},r.a.createElement("div",{className:"logo"},"Meeterest"),r.a.createElement("div",{className:"open-menu",onClick:this.menuExpand.bind(this)},r.a.createElement("div",{className:"hamburger"},r.a.createElement("div",{className:"hamburger-line forward-animation",onAnimationIteration:this.animationIterationHandler.bind(this)}),r.a.createElement("div",{className:"hamburger-line forward-animation",onAnimationIteration:this.animationIterationHandler.bind(this)}),r.a.createElement("div",{className:"hamburger-line forward-animation",onAnimationIteration:this.animationIterationHandler.bind(this)}))),r.a.createElement("nav",{onAnimationIteration:this.animationIterationHandler.bind(this)},r.a.createElement("div",{class:"nav-button"},"Home"),r.a.createElement("div",{class:"nav-button"},"Help"),r.a.createElement("div",{class:"nav-button"},"About"),r.a.createElement("div",{class:"nav-button"},"Lang")))}}]),t}(r.a.Component)),b=n(23),y=n(10),j=(n(45),n(47),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(this.props.main){var e=this.refs.Main;e.classList.remove("carousel-main-item");setTimeout(function(){e.classList.add("carousel-main-item")},4)}else{var t=this.refs.Sibling;t.classList.remove("carousel-sibling-item");setTimeout(function(){t.classList.add("carousel-sibling-item")},4)}}},{key:"componentDidUpdate",value:function(){if(this.props.main){var e=this.refs.Main;e.classList.remove("carousel-main-item");setTimeout(function(){e.classList.add("carousel-main-item")},4)}else{var t=this.refs.Sibling;t.classList.remove("carousel-sibling-item");setTimeout(function(){t.classList.add("carousel-sibling-item")},4)}}},{key:"render",value:function(){return r.a.createElement("li",{ref:this.props.main?"Main":"Sibling"},r.a.createElement("a",{href:this.props.item.href},this.props.item.title))}}]),t}(r.a.Component)),O=(n(49),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={currentMainItem:0,items:[{title:"\u041d\u0430\u0443\u043a\u0430",href:"/meeterest/users"},{title:"\u041a\u0443\u043b\u044c\u0442\u0443\u0440\u0430",href:"/meeterest/users"},{title:"\u0421\u043f\u043e\u0440\u0442",href:"/meeterest/users"},{title:"\u0422\u0443\u0440\u0438\u0437\u043c",href:"/meeterest/users"},{title:"\u041a\u0438\u043d\u043e",href:"/meeterest/users"},{title:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",href:"/meeterest/users"},{title:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",href:"/meeterest/users"},{title:"\u041a\u0430\u0444\u0435",href:"/meeterest/users"}]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"changeMain",value:function(e){return e.preventDefault(),e.stopPropagation(),"wheel"===e.type.toLowerCase()&&(e.deltaY=e.deltaY/25),"wheel"!==e.type.toLowerCase()&&"touchmove"!==e.type.toLowerCase()||this.setState({currentMainItem:(this.state.currentMainItem+(e.deltaY<0?-1:1)+this.state.items.length)%this.state.items.length}),!1}},{key:"render",value:function(){var e=[this.state.items[(this.state.currentMainItem-2+this.state.items.length)%this.state.items.length],this.state.items[(this.state.currentMainItem-1+this.state.items.length)%this.state.items.length],this.state.items[this.state.currentMainItem],this.state.items[(this.state.currentMainItem+1)%this.state.items.length],this.state.items[(this.state.currentMainItem+2)%this.state.items.length]].map(function(e,t){return r.a.createElement(j,{item:e,main:2===t})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"category-carousel form-primary",onTouchMove:this.changeMain.bind(this),onWheel:this.changeMain.bind(this)},e))}}]),t}(r.a.Component)),S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).findCoupleClick=n.findCoupleClick.bind(Object(y.a)(Object(y.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"findCoupleClick",value:function(e){var t=document.querySelector(".find-couple"),n=document.querySelector(".set-gender");t.classList.toggle("form-secondary"),t.classList.toggle("form-primary"),t.style.animationDirection="reverse",t.style.animationPlayState="running",n.classList.toggle("form-primary"),n.classList.toggle("form-secondary")}},{key:"shouldComponentUpdate",value:function(e,t){return this.props!==e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"find-couple-form"},r.a.createElement(O,null),r.a.createElement("div",{className:"form-secondary find-couple"},r.a.createElement("h3",null,"I'd be glad to..."),r.a.createElement("input",{type:"text",placeholder:"go to the cinema"}),r.a.createElement("a",{href:"#",className:"action-anchor",onClick:this.findCoupleClick},"Find a couple")),r.a.createElement("div",{className:"form-secondary set-gender"},r.a.createElement("div",{className:"set-gender-description"},"I'm ",this.props.selfGender),r.a.createElement("div",{className:"set-gender-icon","data-gender":"male",onClick:this.props.setSelfGender},r.a.createElement("span",null)),r.a.createElement("div",{className:"set-gender-icon","data-gender":"female",onClick:this.props.setSelfGender},r.a.createElement("span",null)),r.a.createElement("div",{className:"set-gender-description"},"find ",this.props.findingGender),r.a.createElement("div",{className:"set-gender-icon"},r.a.createElement("span",null)),r.a.createElement("div",{className:"set-gender-icon"},r.a.createElement("span",null)),r.a.createElement("a",Object(b.a)({href:"#",className:"action-anchor"},"className","show-candidates"),"Show candidates"))))}}]),t}(r.a.Component),N=(n(51),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.isPending?r.a.createElement(g,null):this.props.users.map(function(e,t){return r.a.createElement("div",{className:"users"},r.a.createElement(k,{key:t,id:e.id,name:e.name,email:e.email}))})}}]),t}(r.a.Component)),k=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",null,r.a.createElement("img",{alt:"user",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},w=n(56),C=n(58),G=n(57),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={selfGender:"male",findingGender:"female"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestUsers()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement(G.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(S,{selfGender:e.props.selfGender,setSelfGender:e.props.onSetSelfGender})}}),r.a.createElement(G.a,{path:"/users",render:function(t){return r.a.createElement(N,{isPending:e.props.isPending,users:e.props.users})}}),r.a.createElement(G.a,{exact:!0,path:"/meeterest",render:function(t){return r.a.createElement(S,{selfGender:e.props.selfGender,setSelfGender:e.props.onSetSelfGender})}}),r.a.createElement(G.a,{path:"/meeterest/users",render:function(t){return r.a.createElement(N,{isPending:e.props.isPending,users:e.props.users})}}))))}}]),t}(a.Component),P=Object(d.b)(function(e){return{selfGender:e.setSelfGender.selfGender,users:e.requestUsers.users,isPending:e.requestUsers.isPending,error:e.requestUsers.error}},function(e){return{onSetSelfGender:function(t){return e({type:"SET_GENDER",payload:t.target.dataset.gender})},onRequestUsers:function(){return E(e)}}})(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(11),L={selfGender:"male",findingGender:"female"},U={isPending:!1,users:[],error:""},R=Object(M.b)({setSelfGender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_GENDER":return Object.assign({},e,{selfGender:t.payload});default:return e}},requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SUCCESS":return Object.assign({},e,{users:t.payload,isPending:!1});case"REQUEST_ERROR":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(M.c)(R);i.a.render(r.a.createElement(d.a,{store:T},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.a36300d6.chunk.js.map