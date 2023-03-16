/*! For license information please see ac0abc09.d3d4d37d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[749391],{603905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},i=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),f=s(t),y=o,d=f["".concat(l,".").concat(y)]||f[y]||u[y]||a;return t?n.createElement(d,c(c({ref:r},i),{},{components:t})):n.createElement(d,c({ref:r},i))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[f]="string"==typeof e?e:o,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},420203:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>i});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"core-components.dependencygraphprops.labeloffset",title:"DependencyGraphProps.labelOffset",description:"API reference for DependencyGraphProps.labelOffset"},p=void 0,l={unversionedId:"reference/core-components.dependencygraphprops.labeloffset",id:"reference/core-components.dependencygraphprops.labeloffset",title:"DependencyGraphProps.labelOffset",description:"API reference for DependencyGraphProps.labelOffset",source:"@site/../docs/reference/core-components.dependencygraphprops.labeloffset.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphprops.labeloffset",permalink:"/docs/reference/core-components.dependencygraphprops.labeloffset",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphprops.labeloffset.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphprops.labeloffset",title:"DependencyGraphProps.labelOffset",description:"API reference for DependencyGraphProps.labelOffset"}},s={},i=[{value:"Remarks",id:"remarks",level:2}],f={toc:i};function u(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-components"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-components"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-components.dependencygraphprops"}),(0,n.kt)("inlineCode",{parentName:"a"},"DependencyGraphProps"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-components.dependencygraphprops.labeloffset"}),(0,n.kt)("inlineCode",{parentName:"a"},"labelOffset"))),(0,n.kt)("p",null,"How much to move label away from edge"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"labelOffset?: number;\n")),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Applies only when ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-components.dependencygraphprops.labelposition"}),"DependencyGraphProps.labelPosition")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"DependencyGraphTypes.LabelPosition.LEFT")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"DependencyGraphTypes.LabelPosition.RIGHT")))}u.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,p,l=o(e),s=1;s<arguments.length;s++){for(var i in c=Object(arguments[s]))t.call(c,i)&&(l[i]=c[i]);if(r){p=r(c);for(var f=0;f<p.length;f++)n.call(c,p[f])&&(l[p[f]]=c[p[f]])}}return l}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var c=60109,p=60110,l=60112;var s=60115,i=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),c=f("react.provider"),p=f("react.context"),l=f("react.forward_ref"),f("react.suspense"),s=f("react.memo"),i=f("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}function h(){}function g(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var v=g.prototype=new h;v.constructor=g,n(v,m.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},c=null,p=null;if(null!=r)for(n in void 0!==r.ref&&(p=r.ref),void 0!==r.key&&(c=""+r.key),r)k.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){for(var s=Array(l),i=0;i<l;i++)s[i]=arguments[i+2];a.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:c,ref:p,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function D(e,r,t,n,c){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var l=!1;if(null===e)l=!0;else switch(p){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return c=c(l=e),e=""===n?"."+S(l,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),D(c,r,t,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(_,"$&/")+"/")+e)),r.push(c)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var i=n+S(p=e[s],s);l+=D(p,r,t,i,c)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(p=e.next()).done;)l+=D(p=p.value,r,t,i=n+S(p,s++),c);else if("object"===p)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function E(e,r,t){if(null==e)return e;var n=[],o=0;return D(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function N(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function x(){var e=C.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);