(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{5158:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(2893)}])},2893:function(e,n,r){"use strict";r.r(n);var i=r(4051),t=r.n(i),o=r(5893),l=r(9008),s=r(1664),d=r(1163),c=r(7294),a=r(5170),u=r(2760),f=r(5948);function v(e,n,r,i,t,o,l){try{var s=e[o](l),d=s.value}catch(c){return void r(c)}s.done?n(d):Promise.resolve(d).then(i,t)}function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){h(e,n,r[n])}))}return e}n.default=function(){var e,n,r,i=(0,c.useState)(),h=i[0],g=i[1],x=(0,d.useRouter)(),m=((0,u.V5)({fetchPolicy:"no-cache",onCompleted:function(e){e.listLinks&&g(e.listLinks)}}),(0,u.Mp)({onCompleted:function(e){if(!(null===e||void 0===e?void 0:e.verify))return localStorage.setItem("jwt",""),x.push("/login");localStorage.setItem("jwt",null===e||void 0===e?void 0:e.verify)}}),(0,u.Kv)({onCompleted:function(e){if(console.log(e),e.reorderLink&&(g(e.reorderLink),document.getElementById("singlelink-preview"))){var n=document.getElementById("singlelink-preview");n.src=n.src}}})),b=function(){var e,n=(e=t().mark((function e(n){var r,i,o,l,s,d;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=Number.parseInt(null!==(i=n.draggableId)&&void 0!==i?i:""),s=null!==(l=null===(r=n.destination)||void 0===r?void 0:r.index)&&void 0!==l?l:-1,d=n.source.index,console.log("Dragging link ".concat(o," to ").concat(s," from ").concat(d)),console.log(n),o&&s>=0&&d>=0&&(console.log("Attempting reorder..."),m[0]({variables:{id:o,newIndex:s,oldIndex:d}}));case 9:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(i,t){var o=e.apply(n,r);function l(e){v(o,i,t,l,s,"next",e)}function s(e){v(o,i,t,l,s,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){localStorage.getItem("jwt")||x.push("/login")}),[]),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(l.default,{children:(0,o.jsx)("title",{children:"Dashboard - BRAND"})}),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-between w-full mb-8 h1-row",children:[(0,o.jsx)("h1",{className:"h1",children:"Links"}),(0,o.jsx)(s.default,{href:"/dashboard/link/create",passHref:!0,children:(0,o.jsxs)("button",{className:"flex flex-row items-center justify-center px-4 py-2 bg-indigo-600 text-sm font-semibold text-white rounded-lg hover:bg-indigo-700 cursor-pointer",children:[(0,o.jsx)("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"rgba(255,255,255,1)",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),"Add new"]})})]}),m[1].loading?(0,o.jsx)("p",{className:"text-gray-700 text-lg",children:"Loading links..."}):(0,o.jsx)(f.Z5,{onDragEnd:b,children:(0,o.jsx)(f.bK,{droppableId:"links",children:function(i){return(0,o.jsx)("ul",p({className:"links"},i.droppableProps,{ref:i.innerRef,style:{width:"100%"},children:(null!==h&&void 0!==h?h:[]).map((function(i,t){return(0,o.jsx)(f._l,{draggableId:(null!==(e=null===i||void 0===i?void 0:i.id)&&void 0!==e?e:0).toString(),index:t,children:function(e){var t;return(0,o.jsx)("li",p({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps,{onClick:function(){return x.push("/dashboard/link/".concat(null===i||void 0===i?void 0:i.id))},children:(0,o.jsxs)("div",{className:"w-full mb-4 p-6 bg-white shadow rounded-xl overflow-hidden max-w-4xl",style:{borderLeft:"solid 12px rgba(0,0,0,.15)"},children:[(null===i||void 0===i?void 0:i.label)&&(0,o.jsx)("div",{className:"text-xl font-medium mb-2",children:null===i||void 0===i?void 0:i.label}),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-4",children:[(0,o.jsx)("span",{className:"capitalize",children:null===i||void 0===i?void 0:i.type}),(0,o.jsx)("span",{children:"|"}),(0,o.jsx)("a",{className:"hover:underline hover:text-indigo-600",href:null!==(n=null===i||void 0===i?void 0:i.content)&&void 0!==n?n:"#",children:null!==(r=(null===i||void 0===i||null===(t=i.content)||void 0===t?void 0:t.substring(0,32))+"...")&&void 0!==r?r:"N/A"})]})]})}))}},null===i||void 0===i?void 0:i.id)}))}))}})})]})}}},function(e){e.O(0,[630,653,972,376,774,888,179],(function(){return n=5158,e(e.s=n);var n}));var n=e.O();_N_E=n}]);