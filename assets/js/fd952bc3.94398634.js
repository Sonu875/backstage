/*! For license information please see fd952bc3.94398634.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[883803],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(r),d=o,v=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(v,u(u({ref:t},s),{},{components:r})):n.createElement(v,u({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},393867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>s});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"plugin-events-backend-module-azure.azuredevopseventrouter",title:"AzureDevOpsEventRouter",description:"API reference for AzureDevOpsEventRouter"},c=void 0,l={unversionedId:"reference/plugin-events-backend-module-azure.azuredevopseventrouter",id:"reference/plugin-events-backend-module-azure.azuredevopseventrouter",title:"AzureDevOpsEventRouter",description:"API reference for AzureDevOpsEventRouter",source:"@site/../docs/reference/plugin-events-backend-module-azure.azuredevopseventrouter.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-azure.azuredevopseventrouter",permalink:"/docs/reference/plugin-events-backend-module-azure.azuredevopseventrouter",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-azure.azuredevopseventrouter.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-azure.azuredevopseventrouter",title:"AzureDevOpsEventRouter",description:"API reference for AzureDevOpsEventRouter"}},i={},s=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],p={toc:s};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-events-backend-module-azure"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-events-backend-module-azure"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-events-backend-module-azure.azuredevopseventrouter"}),(0,n.kt)("inlineCode",{parentName:"a"},"AzureDevOpsEventRouter"))),(0,n.kt)("p",null,"Subscribes to the generic ",(0,n.kt)("inlineCode",{parentName:"p"},"azureDevOps")," topic and publishes the events under the more concrete sub-topic depending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"$.eventType")," provided."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class AzureDevOpsEventRouter extends SubTopicEventRouter \n")),(0,n.kt)("b",null,"Extends:")," [SubTopicEventRouter](/docs/reference/plugin-events-node.subtopiceventrouter)",(0,n.kt)("h2",o({},{id:"constructors"}),"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Constructor"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-events-backend-module-azure.azuredevopseventrouter._constructor_"}),"(constructor)()")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,n.kt)("code",null,"AzureDevOpsEventRouter")," class")))),(0,n.kt)("h2",o({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/plugin-events-backend-module-azure.azuredevopseventrouter.determinesubtopic"}),"determineSubTopic(params)")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"protected")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var u,c,l=o(e),i=1;i<arguments.length;i++){for(var s in u=Object(arguments[i]))r.call(u,s)&&(l[s]=u[s]);if(t){c=t(u);for(var p=0;p<c.length;p++)n.call(u,c[p])&&(l[c[p]]=u[c[p]])}}return l}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var u=60109,c=60110,l=60112;var i=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),u=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),i=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||v}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||v}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var g=h.prototype=new b;g.constructor=h,n(g,y.prototype),g.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},u=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var z=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return u=u(l=e),e=""===n?"."+E(l,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(z,"$&/")+"/"),P(u,t,r,"",(function(e){return e}))):null!=u&&(N(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(z,"$&/")+"/")+e)),t.push(u)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=n+E(c=e[i],i);l+=P(c,t,r,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(c=e.next()).done;)l+=P(c=c.value,t,r,s=n+E(c,i++),u);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function D(){var e=C.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);