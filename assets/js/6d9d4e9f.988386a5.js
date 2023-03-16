/*! For license information please see 6d9d4e9f.988386a5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[336990],{603905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,d=p["".concat(u,".").concat(g)]||p[g]||c[g]||o;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},893629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>f});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"feature-flags",title:"Feature Flags",description:"Details the process of defining setting and reading a feature flag."},l=void 0,u={unversionedId:"plugins/feature-flags",id:"plugins/feature-flags",title:"Feature Flags",description:"Details the process of defining setting and reading a feature flag.",source:"@site/../docs/plugins/feature-flags.md",sourceDirName:"plugins",slug:"/plugins/feature-flags",permalink:"/docs/plugins/feature-flags",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/feature-flags.md",tags:[],version:"current",frontMatter:{id:"feature-flags",title:"Feature Flags",description:"Details the process of defining setting and reading a feature flag."},sidebar:"docs",previous:{title:"Plugin Analytics",permalink:"/docs/plugins/analytics"},next:{title:"Proxying",permalink:"/docs/plugins/proxying"}},s={},f=[{value:"Defining a Feature Flag",id:"defining-a-feature-flag",level:2},{value:"In a plugin",id:"in-a-plugin",level:3},{value:"In the application",id:"in-the-application",level:3},{value:"Enabling Feature Flags",id:"enabling-feature-flags",level:2},{value:"FeatureFlagged Component",id:"featureflagged-component",level:2},{value:"Evaluating Feature Flag State",id:"evaluating-feature-flag-state",level:2}],p={toc:f};function c(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Backstage offers the ability to define feature flags inside a plugin or during application creation. This allows you to restrict parts of your plugin to those individual users who have toggled the feature flag to on."),(0,n.kt)("p",null,"This page describes the process of defining setting and reading a feature flag. If you are looking for using feature flags with software templates that can be found under ",(0,n.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/features/software-templates/writing-templates#remove-sections-or-fields-based-on-feature-flags"}),"Writing Templates"),"."),(0,n.kt)("h2",a({},{id:"defining-a-feature-flag"}),"Defining a Feature Flag"),(0,n.kt)("h3",a({},{id:"in-a-plugin"}),"In a plugin"),(0,n.kt)("p",null,"Defining feature flag in a plugin is done by passing the name of the feature flag into the ",(0,n.kt)("inlineCode",{parentName:"p"},"featureFlags")," array:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"/* src/plugin.ts */\nimport { createPlugin, createRouteRef } from '@backstage/core-plugin-api';\nimport ExampleComponent from './components/ExampleComponent';\n\nexport const examplePlugin = createPlugin({\n  id: 'example',\n  routes: {\n    root: rootRouteRef,\n  },\n  featureFlags: [{ name: 'show-example-feature' }],\n});\n")),(0,n.kt)("h3",a({},{id:"in-the-application"}),"In the application"),(0,n.kt)("p",null,"Defining feature flag in the application is done by adding feature flags in",(0,n.kt)("inlineCode",{parentName:"p"},"featureFlags")," array in\n",(0,n.kt)("inlineCode",{parentName:"p"},"createApp()")," function call:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const app = createApp({\n  // ...\n  featureFlags: [\n    {\n      pluginId: '', // pluginId is required for feature flags in plugins. It can be left blank for a feature flag leveraged in the application.\n      name: 'tech-radar',\n      description: 'Enables the tech radar plugin',\n    },\n  ],\n  // ...\n});\n")),(0,n.kt)("h2",a({},{id:"enabling-feature-flags"}),"Enabling Feature Flags"),(0,n.kt)("p",null,"Feature flags are defaulted to off and can be updated by individual users in the backstage interface."),(0,n.kt)("p",null,"These are set by navigating to the page under ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Feature Flags"),"."),(0,n.kt)("p",null,"The users selection is saved in the users browsers local storage. Once toggled it may be required for a user to refresh the page to see any new changes."),(0,n.kt)("h2",a({},{id:"featureflagged-component"}),"FeatureFlagged Component"),(0,n.kt)("p",null,"The easiest way to control content based on the state of a feature flag is to use the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/reference/core-app-api.featureflagged"}),"FeatureFlagged")," component."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),'import { FeatureFlagged } from \'@backstage/core-app-api\';\n\n...\n\n<FeatureFlagged with="show-example-feature">\n  <NewFeatureComponent />\n</FeatureFlagged>\n\n<FeatureFlagged without="show-example-feature">\n  <PreviousFeatureComponent />\n</FeatureFlagged>\n')),(0,n.kt)("h2",a({},{id:"evaluating-feature-flag-state"}),"Evaluating Feature Flag State"),(0,n.kt)("p",null,"It is also possible to test the feature flag state using the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/reference/core-plugin-api.featureflagsapi"}),"FeatureFlags Api"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import { useApi, featureFlagsApiRef } from '@backstage/core-plugin-api';\n\nconst featureFlagsApi = useApi(featureFlagsApiRef);\nconst isOn = featureFlagsApi.isActive('show-example-feature');\n")))}c.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,u=a(e),s=1;s<arguments.length;s++){for(var f in i=Object(arguments[s]))r.call(i,f)&&(u[f]=i[f]);if(t){l=t(i);for(var p=0;p<l.length;p++)n.call(i,l[p])&&(u[l[p]]=i[l[p]])}}return u}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,u=60112;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),f=p("react.lazy")}var c="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var v=b.prototype=new h;v.constructor=b,n(v,m.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:k.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return i=i(u=e),e=""===n?"."+x(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+x(l=e[s],s);u+=S(l,t,r,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=c&&e[c]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(l=e.next()).done;)u+=S(l=l.value,t,r,f=n+x(l,s++),i);else if("object"===l)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function _(e,t,r){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function N(){var e=C.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,r)=>{r(541535)}}]);