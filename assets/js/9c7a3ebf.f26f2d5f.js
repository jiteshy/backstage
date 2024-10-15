/*! For license information please see 9c7a3ebf.f26f2d5f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[114054],{507288:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var n=s(785893),t=s(511151);const o={id:"plugin-kubernetes-react.usepodlogs",title:"usePodLogs()",description:"API reference for usePodLogs()"},c=void 0,i={id:"reference/plugin-kubernetes-react.usepodlogs",title:"usePodLogs()",description:"API reference for usePodLogs()",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-react.usepodlogs.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-react.usepodlogs",permalink:"/docs/reference/plugin-kubernetes-react.usepodlogs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-react.usepodlogs.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-react.usepodlogs",title:"usePodLogs()",description:"API reference for usePodLogs()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.usepodlogs",children:(0,n.jsx)(r.code,{children:"usePodLogs"})})]}),"\n",(0,n.jsx)(r.p,{children:"Retrieves the logs for the given pod"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'usePodLogs: ({ containerScope, previous }: PodLogsOptions) => import("react-use/esm/useAsyncFn").AsyncState<{\n    text: string;\n}>\n'})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"{ containerScope, previous }"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podlogsoptions",children:"PodLogsOptions"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:'import("react-use/esm/useAsyncFn").AsyncState<{ text: string; }>'})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,r,s)=>{var n=s(667294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var n,o={},a=null,l=null;for(n in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!d.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:t,type:e,key:a,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},785893:(e,r,s)=>{e.exports=s(675251)},511151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>c});var n=s(667294);const t={},o=n.createContext(t);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);