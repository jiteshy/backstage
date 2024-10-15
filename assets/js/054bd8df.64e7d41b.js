/*! For license information please see 054bd8df.64e7d41b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[863606],{616954:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var c=r(785893),s=r(511151);const i={id:"cli-node.lockfile",title:"Lockfile",description:"API reference for Lockfile"},t=void 0,d={id:"reference/cli-node.lockfile",title:"Lockfile",description:"API reference for Lockfile",source:"@site/versioned_docs/version-stable/reference/cli-node.lockfile.md",sourceDirName:"reference",slug:"/reference/cli-node.lockfile",permalink:"/docs/reference/cli-node.lockfile",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/cli-node.lockfile.md",tags:[],version:"stable",frontMatter:{id:"cli-node.lockfile",title:"Lockfile",description:"API reference for Lockfile"}},l={},o=[{value:"Methods",id:"methods",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/cli-node",children:(0,c.jsx)(n.code,{children:"@backstage/cli-node"})})," > ",(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile",children:(0,c.jsx)(n.code,{children:"Lockfile"})})]}),"\n",(0,c.jsx)(n.p,{children:"Represents a package manager lockfile."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"class Lockfile \n"})}),"\n",(0,c.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Method"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,c.jsxs)(n.th,{children:["\n",(0,c.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile.createsimplifieddependencygraph",children:"createSimplifiedDependencyGraph()"})}),"\n"]}),(0,c.jsx)(n.td,{children:"\n"}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Creates a simplified dependency graph from the lockfile data, where each key is a package, and the value is a set of all packages that it depends on across all versions."}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile.diff",children:"diff(otherLockfile)"})}),"\n"]}),(0,c.jsx)(n.td,{children:"\n"}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Diff with another lockfile, returning entries that have been added, changed, and removed compared to the other lockfile."}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile.getdependencytreehash",children:"getDependencyTreeHash(startName)"})}),"\n"]}),(0,c.jsx)(n.td,{children:"\n"}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:"Generates a sha1 hex hash of the dependency graph for a package."}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile.load",children:"load(path)"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"static"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsxs)(n.p,{children:["Load a ",(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile",children:"Lockfile"})," from a file path."]}),"\n"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile.parse",children:"parse(content)"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"static"})}),"\n"]}),(0,c.jsxs)(n.td,{children:["\n",(0,c.jsxs)(n.p,{children:["Parse lockfile contents into a ",(0,c.jsx)(n.a,{href:"/docs/reference/cli-node.lockfile",children:"Lockfile"}),"."]}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},675251:(e,n,r)=>{var c=r(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var c,i={},o=null,a=null;for(c in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,c)&&!l.hasOwnProperty(c)&&(i[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===i[c]&&(i[c]=n[c]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:d.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>t});var c=r(667294);const s={},i=c.createContext(s);function t(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);