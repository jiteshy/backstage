/*! For license information please see d73d4761.30b1a01b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[659767],{423811:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=t(785893),s=t(511151);const i={id:"plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction",title:"createPublishBitbucketServerPullRequestAction()",description:"API reference for createPublishBitbucketServerPullRequestAction()"},c=void 0,o={id:"reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction",title:"createPublishBitbucketServerPullRequestAction()",description:"API reference for createPublishBitbucketServerPullRequestAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction",title:"createPublishBitbucketServerPullRequestAction()",description:"API reference for createPublishBitbucketServerPullRequestAction()"}},l={},a=[{value:"Parameters",id:"parameters",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-server",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-server"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-server.createpublishbitbucketserverpullrequestaction",children:(0,n.jsx)(r.code,{children:"createPublishBitbucketServerPullRequestAction"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates a BitbucketServer Pull Request action."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'function createPublishBitbucketServerPullRequestAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    title: string;\n    description?: string | undefined;\n    targetBranch?: string | undefined;\n    sourceBranch: string;\n    reviewers?: string[] | undefined;\n    token?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ integrations: ",(0,n.jsx)(r.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,n.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"}),"; }"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; title: string; description?: string | undefined; targetBranch?: string | undefined; sourceBranch: string; reviewers?: string[] | undefined; token?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; }, import("@backstage/types").',(0,n.jsx)(r.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,i={},a=null,u=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:u,props:i,_owner:o.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>c});var n=t(667294);const s={},i=n.createContext(s);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);