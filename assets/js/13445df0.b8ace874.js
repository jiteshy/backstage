/*! For license information please see 13445df0.b8ace874.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[72369],{194814:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(785893),s=n(511151);const o={id:"plugin-techdocs-node.generators",title:"Generators",description:"API reference for Generators"},c=void 0,d={id:"reference/plugin-techdocs-node.generators",title:"Generators",description:"API reference for Generators",source:"@site/versioned_docs/version-stable/reference/plugin-techdocs-node.generators.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node.generators",permalink:"/docs/reference/plugin-techdocs-node.generators",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-techdocs-node.generators.md",tags:[],version:"stable",frontMatter:{id:"plugin-techdocs-node.generators",title:"Generators",description:"API reference for Generators"}},i={},l=[{value:"Methods",id:"methods",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-techdocs-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.generators",children:(0,t.jsx)(r.code,{children:"Generators"})})]}),"\n",(0,t.jsx)(r.p,{children:"Collection of docs generators"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Generators implements GeneratorBuilder \n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Implements:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.generatorbuilder",children:"GeneratorBuilder"})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.generators.fromconfig",children:"fromConfig(config, options)"})}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"static"})}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"Returns a generators instance containing a generator for TechDocs"}),"\n"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.generators.get",children:"get(entity)"})}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"Returns the generator for a given TechDocs entity"}),"\n"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-techdocs-node.generators.register",children:"register(generatorKey, generator)"})}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"Register a generator in the generators collection"}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)c.call(r,t)&&!i.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:d.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>c});var t=n(667294);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);