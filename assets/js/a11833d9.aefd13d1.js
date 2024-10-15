/*! For license information please see a11833d9.aefd13d1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[97731],{162667:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(785893),t=s(511151);const o={id:"plugin-scaffolder-node.taskbroker.list",title:"TaskBroker.list()",description:"API reference for TaskBroker.list()"},i=void 0,a={id:"reference/plugin-scaffolder-node.taskbroker.list",title:"TaskBroker.list()",description:"API reference for TaskBroker.list()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-node.taskbroker.list.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.taskbroker.list",permalink:"/docs/reference/plugin-scaffolder-node.taskbroker.list",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-node.taskbroker.list.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-node.taskbroker.list",title:"TaskBroker.list()",description:"API reference for TaskBroker.list()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.taskbroker",children:(0,n.jsx)(r.code,{children:"TaskBroker"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.taskbroker.list",children:(0,n.jsx)(r.code,{children:"list"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"list?(options?: {\n        filters?: {\n            createdBy?: string | string[];\n            status?: TaskStatus | TaskStatus[];\n        };\n        pagination?: {\n            limit?: number;\n            offset?: number;\n        };\n        order?: {\n            order: 'asc' | 'desc';\n            field: string;\n        }[];\n    }): Promise<{\n        tasks: SerializedTask[];\n        totalTasks?: number;\n    }>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ filters?: { createdBy?: string | string[]; status?: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.taskstatus",children:"TaskStatus"})," | ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.taskstatus",children:"TaskStatus"}),"[]; }; pagination?: { limit?: number; offset?: number; }; order?: { order: 'asc' | 'desc'; field: string; }[]; }"]}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:["Promise<{ tasks: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.serializedtask",children:"SerializedTask"}),"[]; totalTasks?: number; }>"]})]})}function f(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,r,s)=>{var n=s(667294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var n,o={},d=null,l=null;for(n in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:t,type:e,key:d,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},785893:(e,r,s)=>{e.exports=s(675251)},511151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>i});var n=s(667294);const t={},o=n.createContext(t);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);