/*! For license information please see 26debdad.0a7415c6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[583095],{247182:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=c(785893),i=c(511151);const o={id:"backend-plugin-api.lifecycleservice.addshutdownhook",title:"LifecycleService.addShutdownHook()",description:"API reference for LifecycleService.addShutdownHook()"},t=void 0,d={id:"reference/backend-plugin-api.lifecycleservice.addshutdownhook",title:"LifecycleService.addShutdownHook()",description:"API reference for LifecycleService.addShutdownHook()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.lifecycleservice.addshutdownhook.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.lifecycleservice.addshutdownhook",permalink:"/docs/reference/backend-plugin-api.lifecycleservice.addshutdownhook",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.lifecycleservice.addshutdownhook.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.lifecycleservice.addshutdownhook",title:"LifecycleService.addShutdownHook()",description:"API reference for LifecycleService.addShutdownHook()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleservice",children:(0,r.jsx)(n.code,{children:"LifecycleService"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleservice.addshutdownhook",children:(0,r.jsx)(n.code,{children:"addShutdownHook"})})]}),"\n",(0,r.jsx)(n.p,{children:"Register a function to be called when the backend is shutting down."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"addShutdownHook(hook: LifecycleServiceShutdownHook, options?: LifecycleServiceShutdownOptions): void;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"hook"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleserviceshutdownhook",children:"LifecycleServiceShutdownHook"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.lifecycleserviceshutdownoptions",children:"LifecycleServiceShutdownOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsx)(n.p,{children:"void"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},675251:(e,n,c)=>{var r=c(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,c){var r,o={},l=null,a=null;for(r in void 0!==c&&(l=""+c),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,r)&&!s.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},785893:(e,n,c)=>{e.exports=c(675251)},511151:(e,n,c)=>{c.d(n,{Z:()=>d,a:()=>t});var r=c(667294);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);