(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a3ac688"],{"36e8":function(t,e,i){"use strict";i("9c78")},"3dce":function(t,e,i){"use strict";i("472d")},"472d":function(t,e,i){},"6cb3":function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"CircularNavigationMenu",(function(){return b})),i.d(n,"Clock",(function(){return w})),i.d(n,"NavigationMenu",(function(){return x})),i.d(n,"RippleButton",(function(){return $})),i.d(n,"CustomTab",(function(){return N["a"]}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-card"},[i("div",{staticClass:"flex-row",staticStyle:{gap:"8px",height:"100%"}},[i("div",{staticClass:"left-side"},[i("div",{staticClass:"item-wrapper"},t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"item",class:{active:t.activeItem.id===e.id},on:{click:function(i){return t.toggleItem(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0)]),i("div",{staticClass:"right-side",class:{active:null!==t.activeItem.id}},[t.activeItem.id?i("div",{staticClass:"flex-column h-100"},[i("div",{staticClass:"flex-row content-between u-mb-lg"},[i("label",{staticClass:"title"},[t._v(t._s(t.activeItem.name))]),i("button",{staticClass:"cls-btn",on:{click:function(e){return t.toggleItem()}}},[t._v("×")])]),i(t.activeItem.id,{tag:"component"})],1):t._e()])])])},c=[];i("b64b"),i("a4d3"),i("4de4"),i("e439"),i("159b"),i("dbb4");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i("b0c0");var l=[{id:"navigation-menu",name:"Navigation Menu"},{id:"circular-navigation-menu",name:"Circular Navigation Menu"},{id:"clock",name:"Clock"},{id:"tab",name:"Tab"},{id:"ripple-button",name:"Ripple Button"},{id:"vertical-slide-show",name:"Vertical Slide Show"}],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simple-wrapper"},[i("ul",{staticClass:"menu",class:{active:t.isToggle}},[i("div",{staticClass:"toggle",class:{active:t.isToggle},on:{click:function(e){return t.toggleMenu()}}},[i("ion-icon",{attrs:{name:"add-outline"}})],1),t._l(t.list,(function(e,n){return i("li",{key:n,staticClass:"item",class:{active:t.activeId===e.id},style:"--i:"+n,on:{click:function(i){t.activeId=e.id}}},[i("a",{staticClass:"link"},[i("ion-icon",{attrs:{name:e.icon}})],1)])})),i("div",{staticClass:"indicator"})],2)])},d=[],f={data:function(){return{isToggle:!1,activeId:1,list:[{id:1,name:"Home",icon:"home-outline"},{id:2,name:"Person",icon:"person-outline"},{id:3,name:"Settings",icon:"settings-outline"},{id:4,name:"Mail",icon:"mail-outline"},{id:5,name:"Videocam",icon:"videocam-outline"},{id:6,name:"Key",icon:"key-outline"},{id:7,name:"Game",icon:"game-controller-outline"},{id:8,name:"Camera",icon:"camera-outline"}]}},methods:{toggleMenu:function(){this.isToggle=!this.isToggle}}},m=f,v=(i("dc03"),i("2877")),p=Object(v["a"])(m,u,d,!1,null,"5b83f671",null),b=p.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simple-wapper"},[i("div",{staticClass:"container"},[i("div",{staticClass:"box"},[i("div",{staticClass:"clock"},[i("div",{staticClass:"hour"},[i("div",{staticClass:"hr",attrs:{id:"hr"}})]),i("div",{staticClass:"min"},[i("div",{staticClass:"mn",attrs:{id:"mn"}})]),i("div",{staticClass:"sec"},[i("div",{staticClass:"sc",attrs:{id:"sc"}})])])])])])}],C={data:function(){return{}},mounted:function(){var t=document.querySelector("#hr"),e=document.querySelector("#mn"),i=document.querySelector("#sc");setInterval((function(){var n=6,a=new Date,c=30*a.getHours(),s=a.getMinutes()*n,o=a.getSeconds()*n;t.style.transform="rotateZ(".concat(c+s/12,"deg)"),e.style.transform="rotateZ(".concat(s,"deg)"),i.style.transform="rotateZ(".concat(o,"deg)")}),1e3)}},y=C,O=(i("a20b"),Object(v["a"])(y,g,h,!1,null,"b5465650",null)),w=O.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simple-wrapper"},[i("div",{staticClass:"navigation"},[i("ul",{staticClass:"list-wrapper"},[t._l(t.list,(function(e,n){return i("li",{key:n,staticClass:"list",class:{active:t.activeId===e.id},on:{click:function(i){i.stopPropagation(),t.activeId=e.id}}},[i("a",{staticClass:"list-item"},[i("span",{staticClass:"icon"},[i("ion-icon",{attrs:{name:e.icon}})],1),i("span",{staticClass:"text"},[t._v(t._s(e.name))])])])})),i("div",{staticClass:"indicator"})],2)])])},I=[],j={data:function(){return{activeId:1,list:[{id:1,name:"Home",icon:"home-outline"},{id:2,name:"Settings",icon:"settings-outline"},{id:3,name:"Profile",icon:"person-outline"},{id:4,name:"Message",icon:"chatbubble-ellipses-outline"},{id:5,name:"Photo",icon:"camera-outline"}]}}},k=j,P=(i("fab2"),Object(v["a"])(k,_,I,!1,null,"2f7c0c24",null)),x=P.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{ref:"btn",staticClass:"btn",on:{mousemove:t.onMouseMove}},[i("span",{staticClass:"btn-text"},[t._v("BUTTON")])])},S=[],T={data:function(){return{}},methods:{onMouseMove:function(t){var e=this.$refs.btn,i=t.pageX-e.offsetLeft,n=t.pageY-e.offsetTop;e.style.setProperty("--rippleX","".concat(i,"px")),e.style.setProperty("--rippleY","".concat(n,"px"))}}},E=T,D=(i("36e8"),Object(v["a"])(E,M,S,!1,null,"2a6d909a",null)),$=D.exports,N=i("a044"),q={components:r({},n),data:function(){return{list:l,activeItem:{id:null,name:null}}},methods:{toggleItem:function(t){return t?this.activeItem.id===t.id?(this.activeItem.id=null,void(this.activeItem.name=null)):(this.activeItem.id=t.id,void(this.activeItem.name=t.name)):(this.activeItem.id=null,void(this.activeItem.name=null))}}},B=q,H=(i("3dce"),Object(v["a"])(B,a,c,!1,null,"43b68a96",null));e["default"]=H.exports},"7fca":function(t,e,i){},"9c78":function(t,e,i){},a20b:function(t,e,i){"use strict";i("c7b8")},b64b:function(t,e,i){var n=i("23e7"),a=i("7b0b"),c=i("df75"),s=i("d039"),o=s((function(){c(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return c(a(t))}})},c7b8:function(t,e,i){},dbb4:function(t,e,i){var n=i("23e7"),a=i("83ab"),c=i("56ef"),s=i("fc6a"),o=i("06cf"),r=i("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,i,n=s(t),a=o.f,l=c(n),u={},d=0;while(l.length>d)i=a(n,e=l[d++]),void 0!==i&&r(u,e,i);return u}})},dc03:function(t,e,i){"use strict";i("7fca")},e439:function(t,e,i){var n=i("23e7"),a=i("d039"),c=i("fc6a"),s=i("06cf").f,o=i("83ab"),r=a((function(){s(1)})),l=!o||r;n({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(c(t),e)}})},f9ce:function(t,e,i){},fab2:function(t,e,i){"use strict";i("f9ce")}}]);
//# sourceMappingURL=chunk-6a3ac688.bb761d0c.js.map