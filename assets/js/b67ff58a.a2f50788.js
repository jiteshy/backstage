/*! For license information please see b67ff58a.a2f50788.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[883437],{612954:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var t=r(785893),i=r(511151);const n={id:"plugin-home.visitsstorageapi",title:"VisitsStorageApi",description:"API reference for VisitsStorageApi"},o=void 0,c={id:"reference/plugin-home.visitsstorageapi",title:"VisitsStorageApi",description:"API reference for VisitsStorageApi",source:"@site/versioned_docs/version-stable/reference/plugin-home.visitsstorageapi.md",sourceDirName:"reference",slug:"/reference/plugin-home.visitsstorageapi",permalink:"/docs/reference/plugin-home.visitsstorageapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-home.visitsstorageapi.md",tags:[],version:"stable",frontMatter:{id:"plugin-home.visitsstorageapi",title:"VisitsStorageApi",description:"API reference for VisitsStorageApi"}},a={},d=[{value:"Methods",id:"methods",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-home",children:(0,t.jsx)(s.code,{children:"@backstage/plugin-home"})})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-home.visitsstorageapi",children:(0,t.jsx)(s.code,{children:"VisitsStorageApi"})})]}),"\n",(0,t.jsx)(s.p,{children:"This is an implementation of VisitsApi that relies on a StorageApi. Beware that filtering and ordering are done in memory therefore it is prudent to keep limit to a reasonable size."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"class VisitsStorageApi implements VisitsApi \n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Implements:"})," ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-home.visitsapi",children:"VisitsApi"})]}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-home.visitsstorageapi.create",children:"create(options)"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"static"})}),"\n"]}),(0,t.jsx)(s.td,{children:"\n"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-home.visitsstorageapi.list",children:"list(queryParams)"})}),"\n"]}),(0,t.jsx)(s.td,{children:"\n"}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Returns a list of visits through the visitsApi"}),"\n"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-home.visitsstorageapi.save",children:"save(saveParams)"})}),"\n"]}),(0,t.jsx)(s.td,{children:"\n"}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Saves a visit through the visitsApi"}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,s,r)=>{var t=r(667294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var t,n={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)o.call(s,t)&&!a.hasOwnProperty(t)&&(n[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===n[t]&&(n[t]=s[t]);return{$$typeof:i,type:e,key:d,ref:l,props:n,_owner:c.current}}s.Fragment=n,s.jsx=d,s.jsxs=d},785893:(e,s,r)=>{e.exports=r(675251)},511151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>o});var t=r(667294);const i={},n=t.createContext(i);function o(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);