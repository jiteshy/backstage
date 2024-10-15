/*! For license information please see 72fb37c3.779e088e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[113623],{450175:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=s(785893),n=s(511151);const o={id:"test-utils.setuprequestmockhandlers",title:"setupRequestMockHandlers()",description:"API reference for setupRequestMockHandlers()"},c=void 0,d={id:"reference/test-utils.setuprequestmockhandlers",title:"setupRequestMockHandlers()",description:"API reference for setupRequestMockHandlers()",source:"@site/versioned_docs/version-stable/reference/test-utils.setuprequestmockhandlers.md",sourceDirName:"reference",slug:"/reference/test-utils.setuprequestmockhandlers",permalink:"/docs/reference/test-utils.setuprequestmockhandlers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/test-utils.setuprequestmockhandlers.md",tags:[],version:"stable",frontMatter:{id:"test-utils.setuprequestmockhandlers",title:"setupRequestMockHandlers()",description:"API reference for setupRequestMockHandlers()"}},i={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils.setuprequestmockhandlers",children:(0,r.jsx)(t.code,{children:"setupRequestMockHandlers"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"registerMswTestHooks"})," from ",(0,r.jsx)(t.code,{children:"@backstage/test-utils"})," instead."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function setupRequestMockHandlers(worker: {\n    listen: (t: any) => void;\n    close: () => void;\n    resetHandlers: () => void;\n}): void;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"worker"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"{ listen: (t: any) => void; close: () => void; resetHandlers: () => void; }"}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"void"})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},675251:(e,t,s)=>{var r=s(667294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var r,o={},l=null,a=null;for(r in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:a,props:o,_owner:d.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>c});var r=s(667294);const n={},o=r.createContext(n);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);