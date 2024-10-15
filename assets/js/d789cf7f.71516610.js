/*! For license information please see d789cf7f.71516610.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[899988],{9821:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(785893),n=t(511151);const o={id:"plugin-auth-node.passporthelpers.executerefreshtokenstrategy",title:"PassportHelpers.executeRefreshTokenStrategy()",description:"API reference for PassportHelpers.executeRefreshTokenStrategy()"},c=void 0,a={id:"reference/plugin-auth-node.passporthelpers.executerefreshtokenstrategy",title:"PassportHelpers.executeRefreshTokenStrategy()",description:"API reference for PassportHelpers.executeRefreshTokenStrategy()",source:"@site/versioned_docs/version-stable/reference/plugin-auth-node.passporthelpers.executerefreshtokenstrategy.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.passporthelpers.executerefreshtokenstrategy",permalink:"/docs/reference/plugin-auth-node.passporthelpers.executerefreshtokenstrategy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-node.passporthelpers.executerefreshtokenstrategy.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-node.passporthelpers.executerefreshtokenstrategy",title:"PassportHelpers.executeRefreshTokenStrategy()",description:"API reference for PassportHelpers.executeRefreshTokenStrategy()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-auth-node",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.passporthelpers",children:(0,s.jsx)(r.code,{children:"PassportHelpers"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.passporthelpers.executerefreshtokenstrategy",children:(0,s.jsx)(r.code,{children:"executeRefreshTokenStrategy"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"static executeRefreshTokenStrategy(providerStrategy: Strategy, refreshToken: string, scope: string): Promise<{\n        accessToken: string;\n        refreshToken?: string;\n        params: any;\n    }>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"providerStrategy"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Strategy"}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"refreshToken"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"string"}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"scope"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"string"}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,s.jsx)(r.p,{children:"Promise<{ accessToken: string; refreshToken?: string; params: any; }>"})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},675251:(e,r,t)=>{var s=t(667294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,o={},d=null,l=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,s)&&!i.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>c});var s=t(667294);const n={},o=s.createContext(n);function c(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);