/*! For license information please see 49fb448a.28f3e770.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[881711],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),g=a,d=f["".concat(c,".").concat(g)]||f[g]||s[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},890582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"plugin-catalog.defaultcatalogpageprops.initialkind",title:"DefaultCatalogPageProps.initialKind",description:"API reference for DefaultCatalogPageProps.initialKind"},l=void 0,c={unversionedId:"reference/plugin-catalog.defaultcatalogpageprops.initialkind",id:"reference/plugin-catalog.defaultcatalogpageprops.initialkind",title:"DefaultCatalogPageProps.initialKind",description:"API reference for DefaultCatalogPageProps.initialKind",source:"@site/../docs/reference/plugin-catalog.defaultcatalogpageprops.initialkind.md",sourceDirName:"reference",slug:"/reference/plugin-catalog.defaultcatalogpageprops.initialkind",permalink:"/docs/reference/plugin-catalog.defaultcatalogpageprops.initialkind",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog.defaultcatalogpageprops.initialkind.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog.defaultcatalogpageprops.initialkind",title:"DefaultCatalogPageProps.initialKind",description:"API reference for DefaultCatalogPageProps.initialKind"}},u={},p=[],f={toc:p};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-catalog"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-catalog"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-catalog.defaultcatalogpageprops"}),(0,n.kt)("inlineCode",{parentName:"a"},"DefaultCatalogPageProps"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-catalog.defaultcatalogpageprops.initialkind"}),(0,n.kt)("inlineCode",{parentName:"a"},"initialKind"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"initialKind?: string;\n")))}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,c=a(e),u=1;u<arguments.length;u++){for(var p in i=Object(arguments[u]))r.call(i,p)&&(c[p]=i[p]);if(t){l=t(i);for(var f=0;f<l.length;f++)n.call(i,l[f])&&(c[l[f]]=i[l[f]])}}return c}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,c=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;a=f("react.element"),o=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),i=f("react.provider"),l=f("react.context"),c=f("react.forward_ref"),f("react.suspense"),u=f("react.memo"),p=f("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var h=v.prototype=new m;h.constructor=v,n(h,b.prototype),h.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+S(l=e[u],u);c+=C(l,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(l=e.next()).done;)c+=C(l=l.value,t,r,p=n+S(l,u++),i);else if("object"===l)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],a=0;return C(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function N(){var e=D.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,r)=>{r(541535)}}]);