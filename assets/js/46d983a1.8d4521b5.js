/*! For license information please see 46d983a1.8d4521b5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[113765],{516251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(785893),i=n(511151);const o={id:"plugin-scaffolder-backend-module-github.creategithubautolinksaction",title:"createGithubAutolinksAction()",description:"API reference for createGithubAutolinksAction()"},s=void 0,c={id:"reference/plugin-scaffolder-backend-module-github.creategithubautolinksaction",title:"createGithubAutolinksAction()",description:"API reference for createGithubAutolinksAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubautolinksaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-github.creategithubautolinksaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubautolinksaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.creategithubautolinksaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-github.creategithubautolinksaction",title:"createGithubAutolinksAction()",description:"API reference for createGithubAutolinksAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubautolinksaction",children:(0,r.jsx)(t.code,{children:"createGithubAutolinksAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Create an autolink reference for a repository"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'function createGithubAutolinksAction(options: {\n    integrations: ScmIntegrations;\n    githubCredentialsProvider?: GithubCredentialsProvider;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    keyPrefix: string;\n    urlTemplate: string;\n    isAlphanumeric?: boolean | undefined;\n    token?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ integrations: ",(0,r.jsx)(t.a,{href:"/docs/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; githubCredentialsProvider?: ",(0,r.jsx)(t.a,{href:"/docs/reference/integration.githubcredentialsprovider",children:"GithubCredentialsProvider"}),"; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; keyPrefix: string; urlTemplate: string; isAlphanumeric?: boolean | undefined; token?: string | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:c.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(667294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);