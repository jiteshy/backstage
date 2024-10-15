/*! For license information please see 5782bd28.5051bb7c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[790113],{433058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var s=r(785893),c=r(511151);const t={id:"plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine"},i=void 0,a={id:"reference/plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-node.searchengine.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.searchengine",permalink:"/docs/reference/plugin-search-backend-node.searchengine",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-search-backend-node.searchengine.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-node.searchengine",title:"SearchEngine",description:"API reference for SearchEngine"}},d={},o=[{value:"Methods",id:"methods",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,s.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.searchengine",children:(0,s.jsx)(n.code,{children:"SearchEngine"})})]}),"\n",(0,s.jsx)(n.p,{children:"Interface that must be implemented by specific search engines, responsible for performing indexing and querying and translating abstract queries into concrete, search engine-specific queries."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export interface SearchEngine \n"})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Method"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.searchengine.getindexer",children:"getIndexer(type)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Factory method for getting a search engine indexer for a given document type."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.searchengine.query",children:"query(query, options)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Perform a search query against the SearchEngine."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.searchengine.settranslator",children:"setTranslator(translator)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Override the default translator provided by the SearchEngine."}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},675251:(e,n,r)=>{var s=r(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var s,t={},o=null,h=null;for(s in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:c,type:e,key:o,ref:h,props:t,_owner:a.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var s=r(667294);const c={},t=s.createContext(c);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);