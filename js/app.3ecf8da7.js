(function(e){function t(t){for(var a,o,r=t[0],u=t[1],l=t[2],s=0,f=[];s<r.length;s++)o=r[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},c={app:0},i=[];function r(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"078209d1","chunk-0509d5ae":"9e73f689","chunk-37632b52":"69ae3d69","chunk-6a3ac688":"bb761d0c","chunk-1018a558":"58aef580","chunk-2d22bcc1":"99c4c19e","chunk-54abbb65":"1ae45c12"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-0509d5ae":1,"chunk-37632b52":1,"chunk-6a3ac688":1,"chunk-1018a558":1,"chunk-54abbb65":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"046f3edf","chunk-0509d5ae":"f21c4eb7","chunk-37632b52":"605dc6c6","chunk-6a3ac688":"419c2e82","chunk-1018a558":"827f9c18","chunk-2d22bcc1":"31d6cfe0","chunk-54abbb65":"fb4c7c3f"}[e]+".css",c=u.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var l=i[r],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===c))return t()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){l=f[r],s=l.getAttribute("data-href");if(s===a||s===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=r(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}c[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/peko/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root-wrapper"},[n("nav-menu"),n("div",{staticClass:"board"},[n("nav-bar",{on:{"open-menu":function(t){return e.toggleSubMenu(!e.isSubMenuOpen)}}}),n("div",{staticClass:"sub-menu",class:{active:e.isSubMenuOpen}},e._l(e.routes,(function(t,a){return n("router-link",{key:a,staticClass:"sub-menu-item",attrs:{to:t.path,custom:""},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.navigate,c=a.isActive,i=a.isExactActive;return[n("div",{class:[c&&"router-link-active",i&&"router-link-exact-active"],on:{click:function(e){return e.stopPropagation(),o.apply(null,arguments)}}},[e._v(" "+e._s(t.name)+" ")])]}}],null,!0)})})),1),n("div",{staticClass:"page-wrapper"},[n("router-view")],1)],1)],1)},c=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),[{active:!0,path:"/",name:"首頁",meta:{id:"home",icon:"home-outline",iconType:"ion"},component:function(){return n.e("chunk-1018a558").then(n.bind(null,"2a0a"))}},{active:!1,path:"/about",name:"關於這個地方",meta:{id:"about",icon:"egg-outline",iconType:"ion"},component:function(){return n.e("about").then(n.bind(null,"d530"))}},{active:!1,path:"/component-library",name:"元件館",meta:{id:"component-library",icon:"library-outline",iconType:"ion"},component:function(){return Promise.all([n.e("chunk-0509d5ae"),n.e("chunk-6a3ac688")]).then(n.bind(null,"6cb3"))}},{active:!1,path:"/calculator",name:"計算機",meta:{id:"calculator",icon:["fas","calculator"],iconType:"fa"},component:function(){return n.e("chunk-54abbb65").then(n.bind(null,"d873"))}},{active:!1,path:"/lab",name:"實驗室",meta:{id:"lab",icon:["fas","flask"],iconType:"fa"},component:function(){return n.e("chunk-2d22bcc1").then(n.bind(null,"f100"))}},{active:!0,path:"/pokedex",name:"寶可夢-洗翠圖鑑",meta:{id:"lab",icon:["fas","book"],iconType:"fa"},component:function(){return Promise.all([n.e("chunk-0509d5ae"),n.e("chunk-37632b52")]).then(n.bind(null,"e176"))}}]),r=i.filter((function(e){var t=e.active;return t})),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"nav-bar-title"},["fa"===e.$route.meta.iconType?n("font-awesome-icon",{staticStyle:{"font-size":"14px"},attrs:{icon:e.$route.meta.icon}}):e._e(),"ion"===e.$route.meta.iconType?n("ion-icon",{attrs:{name:e.$route.meta.icon}}):e._e(),n("span",[e._v(e._s(e.$route.name))])],1),n("div",{staticClass:"sub-menu-toggle"},[n("div",{on:{click:function(t){return e.$emit("open-menu")}}},[n("ion-icon",{attrs:{name:"finger-print-outline"}})],1)])])},l=[],s={data:function(){return{}}},f=s,p=(n("f6c3"),n("2877")),d=Object(p["a"])(f,u,l,!1,null,"b19e986e",null),m=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-menu",class:{active:e.isToggle}},[n("div",{staticClass:"nav-menu-toggle",class:{active:e.isToggle},on:{click:e.toggleMenu}},[n("div",{staticClass:"nav-menu-toggle-icon"},[n("ion-icon",{attrs:{name:"finger-print-outline"}})],1),e._m(0)]),n("ul",{staticClass:"nav-menu-list",on:{click:function(t){return t.stopPropagation(),e.toggleMenu.apply(null,arguments)}}},e._l(e.routes,(function(t,a){return n("router-link",{key:a,attrs:{to:t.path,custom:""},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.navigate,c=a.isActive,i=a.isExactActive;return[n("li",{staticClass:"nav-menu-list-item-container",class:[c&&"router-link-active",i&&"router-link-exact-active"],on:{click:function(e){return e.stopPropagation(),o.apply(null,arguments)}}},[n("a",{staticClass:"nav-menu-list-item"},[n("span",{staticClass:"nav-menu-list-item-icon"},["fa"===t.meta.iconType?n("font-awesome-icon",{staticStyle:{"font-size":"14px"},attrs:{icon:t.meta.icon}}):e._e(),"ion"===t.meta.iconType?n("ion-icon",{attrs:{name:t.meta.icon}}):e._e()],1),n("span",{staticClass:"nav-menu-list-item-title",class:{active:e.isToggle}},[e._v(" "+e._s(t.name)+" ")])])])]}}],null,!0)})})),1)])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-menu-toggle-title"},[n("label",[e._v("選單")])])}],b={data:function(){return{routes:r,isToggle:!1}},methods:{toggleMenu:function(){this.isToggle=!this.isToggle}}},g=b,y=(n("a73f"),Object(p["a"])(g,h,v,!1,null,"4161dbaa",null)),k=y.exports,x={components:{NavMenu:k,NavBar:m},data:function(){return{routes:r,isSubMenuOpen:!1}},watch:{$route:function(){this.toggleSubMenu(!1)}},methods:{toggleSubMenu:function(e){this.isSubMenuOpen=e}}},C=x,T=(n("5c0b"),Object(p["a"])(C,o,c,!1,null,null,null)),_=T.exports,w=n("8c4f");a["a"].use(w["a"]);var S=new w["a"]({routes:r}),E=S,O=n("2f62");a["a"].use(O["a"]);var j=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=n("130e"),P=n("bc3a"),$=n.n(P),A=$.a.create({baseURL:"",headers:{"Content-Type":"application/json"}});a["a"].use(M["a"],A);var L=A,B={methods:{scrollToEl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:"left",y:"top"},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smooth";if(null!==e){t={x:t.x||0,y:t.y||0},n={x:n.x||"left",y:n.y||"top"};var o=e.getBoundingClientRect();if(e.horizontalScrollElement){var c=e.horizontalScrollElement,i=c.getBoundingClientRect();switch(n.x){case"left":c.scrollTo({left:c.scrollLeft-i.x+o.x+t.x,behavior:a});break;case"center":var r=c.scrollLeft-i.x,u=r-i.width/2,l=o.x+o.width/2;c.scrollTo({left:u+l,behavior:a});break}}if(e.verticalScrollElement){var s=e.verticalScrollElement,f=s.getBoundingClientRect();switch(n.y){case"top":s.scrollTo({top:s.scrollTop-f.y+o.y+t.y,behavior:a});break;case"center":var p=s.scrollTop-f.y,d=p-f.height/2,m=o.y+o.height/2;s.scrollTo({top:d+m,behavior:a});break}}}},onCopySuccess:function(e){alert("已複製：".concat(e.text))},onCopyError:function(e){alert("copy error",e)},doCopy:function(e){var t=this;this.$copyText(e).then((function(e){t.onCopySuccess(e)})).catch((function(e){t.onCopyError(e)}))}}},N={install:function(e){e.mixin(B)}},z={install:function(e){e.use(N)}},R=z,q=(n("b751"),n("ecee")),D=n("ad3d"),J=n("c074"),U=n("b702");q["c"].add(J["a"],U["a"]);var F={install:function(e){e.component("font-awesome-icon",D["a"])}},H=F;a["a"].config.ignoredElements=[/^ion-/],a["a"].config.productionTip=!1,a["a"].use(R),a["a"].use(H),new a["a"]({router:E,store:j,axios:L,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},7805:function(e,t,n){},"9c0c":function(e,t,n){},a73f:function(e,t,n){"use strict";n("e5aa")},b751:function(e,t,n){},e5aa:function(e,t,n){},f6c3:function(e,t,n){"use strict";n("7805")}});
//# sourceMappingURL=app.3ecf8da7.js.map