"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[992532],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,h=d["".concat(l,".").concat(p)]||d[p]||g[p]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},712510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"New Backstage feature: Kubernetes for Service owners",author:"Matthew Clarke, Spotify",authorURL:"https://github.com/mclarke47"},s=void 0,l={permalink:"/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners",source:"@site/blog/2021-01-12-new-backstage-feature-kubernetes-for-service-owners.md",title:"New Backstage feature: Kubernetes for Service owners",description:"Animation of Kubernetes and cloud provider icons becoming the Backstage logo",date:"2021-01-12T00:00:00.000Z",formattedDate:"January 12, 2021",tags:[],readingTime:3.59,hasTruncateMarker:!0,authors:[{name:"Matthew Clarke, Spotify",url:"https://github.com/mclarke47"}],frontMatter:{title:"New Backstage feature: Kubernetes for Service owners",author:"Matthew Clarke, Spotify",authorURL:"https://github.com/mclarke47"},prevItem:{title:"Where do you start when adopting Backstage?",permalink:"/blog/2021/05/20/adopting-backstage"},nextItem:{title:"Announcing the Backstage Stability Index",permalink:"/blog/2020/12/22/stability-index"}},c={authorsImageUrls:[void 0]},u=[{value:"The missing link between K8s and your service",id:"the-missing-link-between-k8s-and-your-service",level:2},{value:"No more context switching",id:"no-more-context-switching",level:2},{value:"Automatic error reporting",id:"automatic-error-reporting",level:2},{value:"Autoscaling limits at a glance",id:"autoscaling-limits-at-a-glance",level:2},{value:"Pick a cloud, any Cloud",id:"pick-a-cloud-any-cloud",level:2},{value:"Rethinking the developer experience",id:"rethinking-the-developer-experience",level:2},{value:"Future iterations",id:"future-iterations",level:2},{value:"Getting started",id:"getting-started",level:2}],d={toc:u};function g(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Animation of Kubernetes and cloud provider icons becoming the Backstage logo",src:r(507275).Z,width:"800",height:"450"})),(0,n.kt)("p",null,"TLDR; We\u2019re rethinking the Kubernetes developer experience with a new feature: a Kubernetes monitoring tool that\u2019s designed around the needs of service owners, not cluster admins. Now developers can easily check the health of their services no matter how or where those services are deployed \u2014 whether it\u2019s on a local host for testing or in production on dozens of clusters around the world."),(0,n.kt)("p",null,"And since Backstage uses the native Kubernetes API, the feature works with whichever cloud provider (AWS, Azure, GCP, etc.) or managed service (OpenShift, IBM Cloud, GKE, etc.) you already use."),(0,n.kt)("h2",o({},{id:"the-missing-link-between-k8s-and-your-service"}),"The missing link between K8s and your service"),(0,n.kt)("p",null,"A core feature of Backstage is its service catalog, which aggregates information about software systems together inside a single tool, with a consistent, familiar UI."),(0,n.kt)("p",null,"By navigating to a service\u2019s overview page in Backstage, you can see everything you need to know about the service: what it does, its APIs and technical documentation, CI/CD progress \u2014 and now detailed information about its presence on Kubernetes clusters."),(0,n.kt)("h2",o({},{id:"no-more-context-switching"}),"No more context switching"),(0,n.kt)("p",null,"Kubernetes in Backstage can be configured to search multiple clusters for your services. It will then aggregate them together into a single view. So if you deploy to multiple clusters you will no longer need to switch kubectl contexts to understand the current state of your service."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List of deployments in Backstage Kubernetes plugin",src:r(156251).Z,width:"1999",height:"1092"})),(0,n.kt)("h2",o({},{id:"automatic-error-reporting"}),"Automatic error reporting"),(0,n.kt)("p",null,"Instead of trying different kubectl commands to figure out where an error occurred, Backstage will automatically find and highlight errors in Kubernetes resources that are affecting your service. So you can spend time fixing errors, not hunting for them."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Error reporting screen in Backstage Kubernetes plugin",src:r(587099).Z,width:"1999",height:"1091"})),(0,n.kt)("h2",o({},{id:"autoscaling-limits-at-a-glance"}),"Autoscaling limits at a glance"),(0,n.kt)("p",null,"Backstage also shows you how close your service is to its autoscaling limit. Coming up to a period of high load? Now you will be able to see how your horizontal autoscaling is dealing with it across multiple clusters."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Autoscaling limits screen in Backstage Kubernetes plugin",src:r(790346).Z,width:"3360",height:"1124"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Autoscaling limits screen in Backstage Kubernetes plugin",src:r(15805).Z,width:"1999",height:"1090"})),(0,n.kt)("h2",o({},{id:"pick-a-cloud-any-cloud"}),"Pick a cloud, any Cloud"),(0,n.kt)("p",null,"Since Backstage communicates directly with the Kubernetes API, it\u2019s cloud agnostic \u2014 it doesn\u2019t matter how or where you\u2019re running Kubernetes. You\u2019ll always get the same familiar view of your deployments, whether you\u2019re:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deploying to clusters on AWS, Azure, GCP, or another cloud provider"),(0,n.kt)("li",{parentName:"ul"},"Using an unmanaged or managed Kubernetes service (like OpenShift, etc.)"),(0,n.kt)("li",{parentName:"ul"},"Migrating from one cloud provider or service to another"),(0,n.kt)("li",{parentName:"ul"},"Testing on a single local machine or deploying to a dozen clusters in production")),(0,n.kt)("p",null,"In short: local or global, single or multi-cloud, managed or unmanaged \u2014 Backstage always provides a seamless Kubernetes experience for your service owners\u2019 day-to-day development needs."),(0,n.kt)("h2",o({},{id:"rethinking-the-developer-experience"}),"Rethinking the developer experience"),(0,n.kt)("p",null,"The philosophy behind Backstage is simple: improve developer experience by reducing infrastructure complexity. As popular and widespread as Kubernetes has become, all of the tools to date have been geared toward the needs of cluster admins. These tools add unnecessary complexity to the workflows of the typical developer building, testing, and deploying services."),(0,n.kt)("p",null,"We believe Backstage Kubernetes gives developers back control of their services by providing a more focused and consistent experience. Backstage provides a single standard for developers to monitor their Kubernetes deployments, regardless of the underlying cloud infrastructure."),(0,n.kt)("h2",o({},{id:"future-iterations"}),"Future iterations"),(0,n.kt)("p",null,"The current focus of Kubernetes in Backstage is Deployments/ReplicaSets/Pods \u2014 but we know that not everyone utilizes these."),(0,n.kt)("p",null,"As we continue to grow and develop Kubernetes in Backstage with the community, we hope to offer support for Kubernetes resources beyond Deployments and Custom Resource Definitions. You can browse or add open issues for the plugin ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+kubernetes+label%3Ak8s-plugin"}),"here"),"."),(0,n.kt)("h2",o({},{id:"getting-started"}),"Getting started"),(0,n.kt)("p",null,"We made the Kubernetes plugin a core feature of Backstage. Like Software Templates (scaffolder) and TechDocs, the k8s-plugin is installed with the core app. When you update the app to the latest version and go to the Kubernetes tab of any service, you will be asked to provide your cloud provider credentials. To learn more, including details on configuration and surfacing your Kubernetes components as part of an entity, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://backstage.io/docs/features/kubernetes/overview"}),"read the docs"),"."),(0,n.kt)("p",null,"To contribute or get more information on Kubernetes in Backstage, ",(0,n.kt)("a",o({parentName:"p"},{href:"https://discord.gg/backstage-687207715902193673"}),"join the discussion on Discord"),"!"))}g.isMDXComponent=!0},507275:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-k8s-1-hero-85649533931182a78497138b2dc803c2.gif"},156251:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-k8s-2-deployments-36ca3f831747105e25f3e69e7e459032.png"},587099:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-k8s-3-error-reporting-3620b313e23820f8fb2425944483b0c6.png"},790346:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-k8s-4-autoscaling-limits-71b75d961b4eae3dbad2fd7b4f18174b.png"},15805:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-k8s-5-autoscaling-limits-0034663df8dcdd3e2e5b8ef6adf071d0.png"}}]);