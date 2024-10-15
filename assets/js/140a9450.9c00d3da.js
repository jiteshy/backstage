/*! For license information please see 140a9450.9c00d3da.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[726663],{524850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(785893),s=n(511151);const i={id:"plugin-catalog-react.userelatedentities",title:"useRelatedEntities()",description:"API reference for useRelatedEntities()"},a=void 0,c={id:"reference/plugin-catalog-react.userelatedentities",title:"useRelatedEntities()",description:"API reference for useRelatedEntities()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-react.userelatedentities.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-react.userelatedentities",permalink:"/docs/reference/plugin-catalog-react.userelatedentities",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-react.userelatedentities.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-react.userelatedentities",title:"useRelatedEntities()",description:"API reference for useRelatedEntities()"}},l={},d=[{value:"Parameters",id:"parameters",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-react"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-react.userelatedentities",children:(0,r.jsx)(t.code,{children:"useRelatedEntities"})})]}),"\n",(0,r.jsx)(t.p,{children:"Fetches all entities that appear in the entity's relations, optionally filtered by relation type and kind."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function useRelatedEntities(entity: Entity, relationFilter: {\n    type?: string;\n    kind?: string;\n}): {\n    entities: Entity[] | undefined;\n    loading: boolean;\n    error: Error | undefined;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"entity"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"relationFilter"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"{ type?: string; kind?: string; }"}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:["{ entities: ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"}),"[] | undefined; loading: boolean; error: Error | undefined; }"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,o=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:o,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(667294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);