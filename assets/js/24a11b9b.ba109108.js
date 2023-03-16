/*! For license information please see 24a11b9b.ba109108.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[64672],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},780421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"configuration",title:"Software Template Configuration",sidebar_label:"Configuration",description:"Configuration options for Backstage Software Templates"},l=void 0,s={unversionedId:"features/software-templates/configuration",id:"features/software-templates/configuration",title:"Software Template Configuration",description:"Configuration options for Backstage Software Templates",source:"@site/../docs/features/software-templates/configuration.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/configuration",permalink:"/docs/features/software-templates/configuration",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Software Template Configuration",sidebar_label:"Configuration",description:"Configuration options for Backstage Software Templates"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/software-templates/"},next:{title:"Adding your own Templates",permalink:"/docs/features/software-templates/adding-templates"}},c={},u=[{value:"Publishing defaults",id:"publishing-defaults",level:2},{value:"Disabling Docker in Docker situation (Optional)",id:"disabling-docker-in-docker-situation-optional",level:2},{value:"Customizing the ScaffolderPage with Grouping and Filtering",id:"customizing-the-scaffolderpage-with-grouping-and-filtering",level:2}],p={toc:u};function f(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Backstage software templates create source code, so your Backstage application\nneeds to be set up to allow repository creation."),(0,n.kt)("p",null,"This is done in your ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," by adding\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://backstage.io/docs/integrations/"}),"Backstage integrations")," for the\nappropriate source code repository for your organization."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Integrations may already be set up as part of your ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),".")),(0,n.kt)("p",null,"The next step is to ",(0,n.kt)("a",o({parentName:"p"},{href:"http://backstage.io/docs/features/software-templates/adding-templates"}),"add templates"),"\nto your Backstage app."),(0,n.kt)("h2",o({},{id:"publishing-defaults"}),"Publishing defaults"),(0,n.kt)("p",null,"Software templates can define ",(0,n.kt)("em",{parentName:"p"},"publish")," actions, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"publish:github"),", to\ncreate new repositories or submit pull / merge requests to existing\nrepositories. You can configure the author and commit message through the\n",(0,n.kt)("inlineCode",{parentName:"p"},"scaffolder")," configuration in ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"scaffolder:\n  defaultAuthor:\n    name: M.C. Hammer # Defaults to `Scaffolder`\n    email: hammer@donthurtem.com # Defaults to `scaffolder@backstage.io`\n  defaultCommitMessage: \"U can't touch this\" # Defaults to 'Initial commit'\n")),(0,n.kt)("p",null,"To configure who can see the new repositories created from software templates,\nadd the ",(0,n.kt)("inlineCode",{parentName:"p"},"repoVisibility")," key within a software template:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"- id: publish\n  name: Publish\n  action: publish:github\n  input:\n    repoUrl: '{{ parameters.repoUrl }}'\n    repoVisibility: public # or 'internal' or 'private'\n")),(0,n.kt)("h2",o({},{id:"disabling-docker-in-docker-situation-optional"}),"Disabling Docker in Docker situation (Optional)"),(0,n.kt)("p",null,"Software templates use the ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch:template")," action by default, which requires no\nexternal dependencies and offers a\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://backstage.io/docs/features/software-templates/builtin-actions#using-cookiecuttercompat-mode"}),"Cookiecutter-compatible mode"),".\nThere is also a ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch:cookiecutter")," action, which uses\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/cookiecutter/cookiecutter"}),"Cookiecutter")," directly for\ntemplating. By default, the ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch:cookiecutter")," action will use the\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/scripts/Cookiecutter.dockerfile"}),"scaffolder-backend/Cookiecutter"),"\ndocker image."),(0,n.kt)("p",null,"If you are running Backstage from a Docker container and you want to avoid\ncalling a container inside a container, you can set up Cookiecutter in your own\nimage, this will use the local installation instead."),(0,n.kt)("p",null,"You can do so by including the following lines in the last step of your\n",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-Dockerfile"}),"RUN apt-get update && apt-get install -y python3 python3-pip\nRUN pip3 install cookiecutter\n")),(0,n.kt)("h2",o({},{id:"customizing-the-scaffolderpage-with-grouping-and-filtering"}),"Customizing the ScaffolderPage with Grouping and Filtering"),(0,n.kt)("p",null,"Once you have more than a few software templates you may want to customize your\n",(0,n.kt)("inlineCode",{parentName:"p"},"ScaffolderPage")," by grouping and surfacing certain templates together. You can\naccomplish this by creating ",(0,n.kt)("inlineCode",{parentName:"p"},"groups")," and passing them to your ",(0,n.kt)("inlineCode",{parentName:"p"},"ScaffolderPage"),"\nlike below"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"<ScaffolderPage\n  groups={[\n    {\n      title: \"Recommended\",\n      filter: entity =>\n        entity?.metadata?.tags?.includes('recommended') ?? false,\n    },\n  ]}\n/>\n")),(0,n.kt)("p",null,"This code will group all templates with the 'recommended' tag together at the\ntop of the page above any other templates not filtered by this group or others."),(0,n.kt)("p",null,"You can also further customize groups by passing in a ",(0,n.kt)("inlineCode",{parentName:"p"},"titleComponent")," instead\nof a ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," which will be a component to use as the header instead of just the\ndefault ",(0,n.kt)("inlineCode",{parentName:"p"},"ContentHeader")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," set as it's value.\n",(0,n.kt)("img",{alt:"Grouped Templates",src:r(341964).Z,width:"3570",height:"2034"})))}f.isMDXComponent=!0},341964:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grouped-templates-4be3346a6689c891dd384684ad8fd59e.png"},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)n.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function y(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var k=b.prototype=new y;k.constructor=b,n(k,h.prototype),k.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+S(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),P(i,t,r,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+S(l=e[c],c);s+=P(l,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,r,u=n+S(l,c++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function _(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function D(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);