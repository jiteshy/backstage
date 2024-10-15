/*! For license information please see 85bd3f97.08d05893.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[315616],{105654:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>n,metadata:()=>o,toc:()=>i});var a=s(785893),r=s(511151);const n={id:"plugin-scaffolder-backend.databasetaskstore.gettaskstate",title:"DatabaseTaskStore.getTaskState()",description:"API reference for DatabaseTaskStore.getTaskState()"},c=void 0,o={id:"reference/plugin-scaffolder-backend.databasetaskstore.gettaskstate",title:"DatabaseTaskStore.getTaskState()",description:"API reference for DatabaseTaskStore.getTaskState()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend.databasetaskstore.gettaskstate.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.databasetaskstore.gettaskstate",permalink:"/docs/reference/plugin-scaffolder-backend.databasetaskstore.gettaskstate",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend.databasetaskstore.gettaskstate.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend.databasetaskstore.gettaskstate",title:"DatabaseTaskStore.getTaskState()",description:"API reference for DatabaseTaskStore.getTaskState()"}},d={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,a.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.databasetaskstore",children:(0,a.jsx)(t.code,{children:"DatabaseTaskStore"})})," > ",(0,a.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.databasetaskstore.gettaskstate",children:(0,a.jsx)(t.code,{children:"getTaskState"})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"getTaskState({ taskId }: {\n        taskId: string;\n    }): Promise<{\n        state: JsonObject;\n    } | undefined>;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.th,{children:["\n",(0,a.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,a.jsxs)(t.th,{children:["\n",(0,a.jsx)(t.p,{children:"Type"}),"\n"]}),(0,a.jsxs)(t.th,{children:["\n",(0,a.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["\n",(0,a.jsx)(t.p,{children:"{ taskId }"}),"\n"]}),(0,a.jsxs)(t.td,{children:["\n",(0,a.jsx)(t.p,{children:"{ taskId: string; }"}),"\n"]}),(0,a.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,a.jsxs)(t.p,{children:["Promise<{ state: ",(0,a.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),"; } | undefined>"]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},675251:(e,t,s)=>{var a=s(667294),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var a,n={},i=null,l=null;for(a in void 0!==s&&(i=""+s),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,a)&&!d.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:i,ref:l,props:n,_owner:o.current}}t.Fragment=n,t.jsx=i,t.jsxs=i},785893:(e,t,s)=>{e.exports=s(675251)},511151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>c});var a=s(667294);const r={},n=a.createContext(r);function c(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);