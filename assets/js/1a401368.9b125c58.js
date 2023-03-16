"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[760947],{603905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(667294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(o),h=a,f=l["".concat(c,".").concat(h)]||l[h]||p[h]||r;return o?n.createElement(f,s(s({ref:t},u),{},{components:o})):n.createElement(f,s({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},617076:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});o(667294);var n=o(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={title:"Introducing the TechDocs Addon Framework",author:"Gary Niemen, Spotify",authorURL:"https://github.com/garyniemen/",authorImageURL:"https://avatars.githubusercontent.com/u/65337273?v=4"},i=void 0,c={permalink:"/blog/2022/05/13/techdocs-addon-framework",source:"@site/blog/2022-05-13-techdocs-addon-framework.md",title:"Introducing the TechDocs Addon Framework",description:"This blog post is co-authored by Eric Peterson (@iamEAP), Spotify.",date:"2022-05-13T00:00:00.000Z",formattedDate:"May 13, 2022",tags:[],readingTime:2.325,hasTruncateMarker:!0,authors:[{name:"Gary Niemen, Spotify",url:"https://github.com/garyniemen/",imageURL:"https://avatars.githubusercontent.com/u/65337273?v=4"}],frontMatter:{title:"Introducing the TechDocs Addon Framework",author:"Gary Niemen, Spotify",authorURL:"https://github.com/garyniemen/",authorImageURL:"https://avatars.githubusercontent.com/u/65337273?v=4"},prevItem:{title:"Releasing Backstage Search 1.0",permalink:"/blog/2022/07/19/releasing-backstage-search-1.0"},nextItem:{title:"New release: Backstage 1.0",permalink:"/blog/2022/03/17/backstage-1.0"}},d={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){var{components:t}=e,s=r(e,["components"]);return(0,n.kt)("wrapper",a({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This blog post is co-authored by Eric Peterson (",(0,n.kt)("a",a({parentName:"em"},{href:"https://github.com/iamEAP"}),"@iamEAP"),"), Spotify.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"backstage header",src:o(105624).Z,width:"960",height:"540"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"TL;DR:")," Introducing the TechDocs Addon Framework \u2014 a way for us all to contribute and share additional features, TechDocs Addons, on top of the base docs-like-code experience."),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/features/techdocs/"}),"TechDocs")," is a centralized platform for publishing, viewing, and discovering technical documentation across an entire organization. It's a solid foundation! But TechDocs doesn't solve higher order documentation needs on its own such as: How do you create and reinforce a culture of documentation? How do you build trust in the quality of technical documentation?"),(0,n.kt)("p",null,"To address this need, we\u2019re proud to introduce the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/9636"}),"TechDocs Addon Framework")," \u2014 a way for us all to contribute and share additional features, TechDocs Addons, on top of the base docs-like-code experience. Using TechDocs Addons, you can customize the TechDocs experience to address some of these higher order needs."),(0,n.kt)("h1",a({},{id:"open-source-addons-from-spotify"}),"Open source Addons from Spotify"),(0,n.kt)("p",null,"We plan to open source many of the TechDocs Addons that we use at Spotify. The first Addon we open sourced is ReportIssue, which you can start using today. ReportIssue enables you to highlight text on a page and quickly raise a templated issue for that text, in your version control system (currently supports GitHub and GitLab). The following images depict this Addon in practice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"techdocs-addon1",src:o(756928).Z,width:"512",height:"192"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"techdocs-addon2",src:o(269312).Z,width:"512",height:"268"})),(0,n.kt)("p",null,"Other Addons coming soon include a Stack Overflow card to surface relevant questions and answers and an Issue Counter."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"techdocs-addon3",src:o(560744).Z,width:"248",height:"321"})),(0,n.kt)("p",null,"We encourage you to use Addons that we open source and contribute Addons of your own as you solve technical documentation problems arising in your company. We can\u2019t wait to see what you come up with!"),(0,n.kt)("p",null,"Here are some resources to help you get started with new TechDocs Addons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"https://backstage.io/docs/features/techdocs/addons#installing-and-using-addons"}),"Installing and using Addons"),": add an existing TechDocs Addon to your Backstage App"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"https://backstage.io/docs/features/techdocs/addons#creating-an-addon"}),"Creating an Addon"),": contribute a new Addon for others to use"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"https://backstage.io/docs/features/techdocs/addons"}),"TechDocs Addon page"),": read everything you need to know about TechDocs Addons")),(0,n.kt)("h1",a({},{id:"next-steps"}),"Next steps"),(0,n.kt)("p",null,"At present, the TechDocs Addon Framework is focused on frontend experiences only. We know what\u2019s available now is a solid foundation, but based on our experience developing and maintaining Addons over several years, we know there\u2019s more to be done."),(0,n.kt)("p",null,"One such pattern is the occasional need for Addons to retrieve or compute data that is not easily accessible. Examples of these at Spotify are Last Updated and Top Contributors. Seemingly simple, these Addons require the ability to run non-trivial git commands to determine when documentation itself was last updated, and by whom."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"techdocs-addon5",src:o(248361).Z,width:"298",height:"74"})),(0,n.kt)("p",null,"This next step is a bit more tricky and we would like to work with you all to make it happen. Take a look at ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/11110"}),"this issue")," in the GitHub repo, let us know what you think, and feel free to get involved."))}p.isMDXComponent=!0},105624:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/techdocs-addon-header-bd1f1bfe1225c1b1b749839deb82ad7f.gif"},756928:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/techdocs-addon1-c2d6e00eda588dca1c65d5b6fc40893f.png"},269312:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/techdocs-addon2-d49f246c8e9e5dc286c32a904a1264c9.png"},560744:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/techdocs-addon3-8bf8754967732f4d6b8b602afa6acd48.png"},248361:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/techdocs-addon5-f2ff977f962f132fdff42f813079bf03.png"}}]);