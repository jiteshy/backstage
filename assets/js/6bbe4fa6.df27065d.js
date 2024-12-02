/*! For license information please see 6bbe4fa6.df27065d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[65239],{264827:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(474848),n=t(28453);const o={id:"discovery",title:"Discovery Service",sidebar_label:"Discovery",description:"Documentation for the Discovery service"},c=void 0,i={id:"backend-system/core-services/discovery",title:"Discovery Service",description:"Documentation for the Discovery service",source:"@site/../docs/backend-system/core-services/discovery.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/discovery",permalink:"/docs/next/backend-system/core-services/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/backend-system/core-services/discovery.md",tags:[],version:"current",frontMatter:{id:"discovery",title:"Discovery Service",sidebar_label:"Discovery",description:"Documentation for the Discovery service"},sidebar:"docs",previous:{title:"Database",permalink:"/docs/next/backend-system/core-services/database"},next:{title:"Http Auth",permalink:"/docs/next/backend-system/core-services/http-auth"}},a={},d=[{value:"Using the service",id:"using-the-service",level:2}];function l(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["When building plugins, you might find that you will need to look up another plugin's base URL to be able to communicate with it. This could be for example an HTTP route or some ",(0,s.jsx)(r.code,{children:"ws"})," protocol URL. For this we have a discovery service which can provide both internal and external base URLs for a given a plugin ID."]}),"\n",(0,s.jsx)(r.h2,{id:"using-the-service",children:"Using the service"}),"\n",(0,s.jsxs)(r.p,{children:["The following example shows how to get the discovery service in your ",(0,s.jsx)(r.code,{children:"example"})," backend plugin and making a request to both the internal and external base URLs for the ",(0,s.jsx)(r.code,{children:"derp"})," plugin."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        discovery: coreServices.discovery,\n      },\n      async init({ discovery }) {\n        const url = await discovery.getBaseUrl('derp'); // can also use discovery.getExternalBaseUrl to retrieve external URL\n        const response = await fetch(`${url}/hello`);\n      },\n    });\n  },\n});\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var s=t(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,o={},d=null,l=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,s)&&!a.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var s=t(296540);const n={},o=s.createContext(n);function c(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);