/*! For license information please see 10d7bb51.e4486bab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[795383],{710316:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=i(785893),s=i(511151);const o={id:"plugin-permission-common.permissionclient.authorizeconditional",title:"PermissionClient.authorizeConditional()",description:"API reference for PermissionClient.authorizeConditional()"},t=void 0,c={id:"reference/plugin-permission-common.permissionclient.authorizeconditional",title:"PermissionClient.authorizeConditional()",description:"API reference for PermissionClient.authorizeConditional()",source:"@site/versioned_docs/version-stable/reference/plugin-permission-common.permissionclient.authorizeconditional.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionclient.authorizeconditional",permalink:"/docs/reference/plugin-permission-common.permissionclient.authorizeconditional",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-common.permissionclient.authorizeconditional.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-common.permissionclient.authorizeconditional",title:"PermissionClient.authorizeConditional()",description:"API reference for PermissionClient.authorizeConditional()"}},l={},d=[{value:"Parameters",id:"parameters",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionclient",children:(0,r.jsx)(n.code,{children:"PermissionClient"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionclient.authorizeconditional",children:(0,r.jsx)(n.code,{children:"authorizeConditional"})})]}),"\n",(0,r.jsxs)(n.p,{children:["Evaluates ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),". This method is useful when the caller needs more control over the processing of conditional decisions. For example, a plugin backend may want to use ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"conditions"})," in a database query instead of evaluating each resource in memory."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"authorizeConditional(queries: QueryPermissionRequest[], options?: PermissionClientRequestOptions): Promise<QueryPermissionResponse[]>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"queries"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.querypermissionrequest",children:"QueryPermissionRequest"}),"[]"]}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"options"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionclientrequestoptions",children:"PermissionClientRequestOptions"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.querypermissionresponse",children:"QueryPermissionResponse"}),"[]>"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},675251:(e,n,i)=>{var r=i(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var r,o={},d=null,a=null;for(r in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},785893:(e,n,i)=>{e.exports=i(675251)},511151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var r=i(667294);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);