/*! For license information please see c4e0ec08.df1da93d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[365803],{528153:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=n(785893),s=n(511151);const c={id:"plugin-kubernetes-backend.kubernetesproxy",title:"KubernetesProxy",description:"API reference for KubernetesProxy"},o=void 0,d={id:"reference/plugin-kubernetes-backend.kubernetesproxy",title:"KubernetesProxy",description:"API reference for KubernetesProxy",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-backend.kubernetesproxy.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesproxy",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-backend.kubernetesproxy.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-backend.kubernetesproxy",title:"KubernetesProxy",description:"API reference for KubernetesProxy"}},i={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy",children:(0,t.jsx)(r.code,{children:"KubernetesProxy"})})]}),"\n",(0,t.jsx)(r.p,{children:"A proxy that routes requests to the Kubernetes API."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class KubernetesProxy \n"})}),"\n",(0,t.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Constructor"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy._constructor_",children:"(constructor)(options)"})}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["Constructs a new instance of the ",(0,t.jsx)(r.code,{children:"KubernetesProxy"})," class"]}),"\n"]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy.createrequesthandler",children:"createRequestHandler(options)"})}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"}),(0,t.jsx)(r.td,{children:"\n"})]})})]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,c={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:a,props:c,_owner:d.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>o});var t=n(667294);const s={},c=t.createContext(s);function o(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);