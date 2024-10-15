/*! For license information please see 09a5ed20.2e779b5e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[573106],{622255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(785893),i=t(511151);const c={id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",title:"IncrementalEntityProvider.next()",description:"API reference for IncrementalEntityProvider.next()"},s=void 0,o={id:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",title:"IncrementalEntityProvider.next()",description:"API reference for IncrementalEntityProvider.next()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",permalink:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",title:"IncrementalEntityProvider.next()",description:"API reference for IncrementalEntityProvider.next()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",children:(0,r.jsx)(n.code,{children:"IncrementalEntityProvider"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",children:(0,r.jsx)(n.code,{children:"next"})})]}),"\n",(0,r.jsx)(n.p,{children:"Return a single page of entities from a specific point in the ingestion."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"next(context: TContext, cursor?: TCursor): Promise<EntityIteratorResult<TCursor>>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"context"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TContext"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"anything needed in order to fetch a single page."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"cursor"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"TCursor"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," a unique value identifying the page to ingest."]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.entityiteratorresult",children:"EntityIteratorResult"}),"<TCursor>>"]}),"\n",(0,r.jsx)(n.p,{children:"The entities to be ingested, as well as the cursor of the next page after this one."})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,n,t)=>{var r=t(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,c={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:d,props:c,_owner:o.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(667294);const i={},c=r.createContext(i);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);