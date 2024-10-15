/*! For license information please see c7d89f5c.16508fd7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[636338],{36358:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(785893),s=t(511151);const i={id:"integration.scmintegrationregistry.resolveurl",title:"ScmIntegrationRegistry.resolveUrl()",description:"API reference for ScmIntegrationRegistry.resolveUrl()"},o=void 0,c={id:"reference/integration.scmintegrationregistry.resolveurl",title:"ScmIntegrationRegistry.resolveUrl()",description:"API reference for ScmIntegrationRegistry.resolveUrl()",source:"@site/versioned_docs/version-stable/reference/integration.scmintegrationregistry.resolveurl.md",sourceDirName:"reference",slug:"/reference/integration.scmintegrationregistry.resolveurl",permalink:"/docs/reference/integration.scmintegrationregistry.resolveurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.scmintegrationregistry.resolveurl.md",tags:[],version:"stable",frontMatter:{id:"integration.scmintegrationregistry.resolveurl",title:"ScmIntegrationRegistry.resolveUrl()",description:"API reference for ScmIntegrationRegistry.resolveUrl()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration",children:(0,n.jsx)(r.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration.scmintegrationregistry",children:(0,n.jsx)(r.code,{children:"ScmIntegrationRegistry"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/integration.scmintegrationregistry.resolveurl",children:(0,n.jsx)(r.code,{children:"resolveUrl"})})]}),"\n",(0,n.jsx)(r.p,{children:"Resolves an absolute or relative URL in relation to a base URL."}),"\n",(0,n.jsx)(r.p,{children:"This method is adapted for use within SCM systems, so relative URLs are within the context of the root of the hierarchy pointed to by the base URL."}),"\n",(0,n.jsxs)(r.p,{children:["For example, if the base URL is ",(0,n.jsx)(r.code,{children:"<repo root url>/folder/a.yaml"}),", i.e. within the file tree of a certain repo, an absolute path of ",(0,n.jsx)(r.code,{children:"/b.yaml"})," does not resolve to ",(0,n.jsx)(r.code,{children:"https://hostname/b.yaml"})," but rather to ",(0,n.jsx)(r.code,{children:"<repo root url>/b.yaml"})," inside the file tree of that same repo."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"resolveUrl(options: {\n        url: string;\n        base: string;\n        lineNumber?: number;\n    }): string;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"{ url: string; base: string; lineNumber?: number; }"}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:"string"})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,i={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:c.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>o});var n=t(667294);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);