(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[149],{4412:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/link/create",function(){return n(7307)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),u=n(387),c=n(7190);var s={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=l.default.createElement("a",null,v));var m=(t=l.default.Children.only(v))&&"object"===typeof t&&t.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],C=l.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);l.default.useEffect((function(){var e=j&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,j,b,n,r]);var N={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:l}))}(e,r,d,p,h,y,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:r&&r.locale,E=r&&r.isLocaleDomain&&i.getDomainLocale(p,k,r&&r.locales,r&&r.domainLocales);N.href=E||i.addBasePath(i.addLocale(p,k,r&&r.defaultLocale))}return l.default.cloneElement(t,N)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,c=a.useRef(),s=o(a.useState(!1),2),f=s[0],d=s[1],p=o(a.useState(t?t.current:null),2),v=p[0],h=p[1],y=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:n}))}),[r,v,n,f]);return a.useEffect((function(){if(!i&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&h(t.current)}),[t]),[y,f]};var a=n(7294),l=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},7307:function(e,t,n){"use strict";n.r(t);var r=n(4051),o=n.n(r),a=n(5893),l=n(9008),i=n(1163),u=n(7294),c=n(5170),s=n(2760);function f(e,t,n,r,o,a,l){try{var i=e[a](l),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(r,o)}t.default=function(){var e=(0,i.useRouter)(),t=(0,u.useState)(),n=t[0],r=t[1],d=(0,u.useState)(),p=d[0],v=d[1],h=(0,u.useState)(),y=h[0],g=h[1],b=(0,u.useState)(!1),m=b[0],x=b[1],w=(0,s.aN)({onCompleted:function(t){e.push("/dashboard/")}}),j=function(){var e,t=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0),w[0]({variables:{label:n,content:p,type:null!==y&&void 0!==y?y:"vanilla"}});case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function l(e){f(a,r,o,l,i,"next",e)}function i(e){f(a,r,o,l,i,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(l.default,{children:(0,a.jsx)("title",{children:"Create link | BRAND"})}),(0,a.jsx)("h1",{className:"h1",children:"Create new link"}),m?(0,a.jsx)("div",{className:"p-3 text-gray-600",children:"Creating link, please wait..."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col space-y-2 mb-6",children:[(0,a.jsx)("label",{className:"font-semibold text-lg text-gray-800",children:"Label"}),(0,a.jsx)("input",{onChange:function(e){return r(e.target.value)},value:null!==n&&void 0!==n?n:"",className:"px-5 py-3 rounded-lg border border-gray-200 w-full bg-white focus:ring-4 focus:ring-opacity-50 focus:ring-indigo-600 outline-0 ring-offset-2 focus:border-gray-1",type:"text",placeholder:"e.g. My Instagram profile"})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2 mb-6",children:[(0,a.jsx)("label",{className:"font-semibold text-lg text-gray-800",children:"Type"}),(0,a.jsxs)("select",{onChange:function(e){return g(e.target.value)},value:y,className:"px-5 py-3 rounded-lg border border-gray-200 w-full bg-white focus:ring-4 focus:ring-opacity-50 focus:ring-indigo-600 outline-0 ring-offset-2 focus:border-gray-1",children:[(0,a.jsx)("option",{value:"vanilla",children:"Vanilla"}),(0,a.jsx)("option",{value:"image",children:"Image"}),(0,a.jsx)("option",{value:"youtube",children:"Youtube"}),(0,a.jsx)("option",{value:"text",children:"Text"}),(0,a.jsx)("option",{value:"avatar",children:"Avatar"}),(0,a.jsx)("option",{value:"html",children:"HTML/Code embed"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2 mb-6",children:[(0,a.jsx)("label",{className:"font-semibold text-lg text-gray-800",children:"Content URL"}),(0,a.jsx)("input",{onChange:function(e){return v(e.target.value)},value:null!==p&&void 0!==p?p:"",className:"px-5 py-3 rounded-lg border border-gray-200 w-full bg-white focus:ring-4 focus:ring-opacity-50 focus:ring-indigo-600 outline-0 ring-offset-2 focus:border-gray-1",type:"text",placeholder:"e.g. https://instagram.com/neutroncreative"})]}),(0,a.jsx)("button",{onClick:function(){return j()},className:"px-8 py-4 bg-indigo-600 w-full text-white font-semibold rounded-xl hover:bg-indigo-700 mb-4",children:"Create link"})]})]})}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[653,376,774,888,179],(function(){return t=4412,e(e.s=t);var t}));var t=e.O();_N_E=t}]);