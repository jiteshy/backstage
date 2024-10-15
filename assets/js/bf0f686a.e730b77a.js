/*! For license information please see bf0f686a.e730b77a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[274750],{843231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(785893),c=n(511151);const i={id:"plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction",title:"createPublishBitbucketCloudPullRequestAction()",description:"API reference for createPublishBitbucketCloudPullRequestAction()"},s=void 0,o={id:"reference/plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction",title:"createPublishBitbucketCloudPullRequestAction()",description:"API reference for createPublishBitbucketCloudPullRequestAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction",title:"createPublishBitbucketCloudPullRequestAction()",description:"API reference for createPublishBitbucketCloudPullRequestAction()"}},l={},u=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-cloud",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-bitbucket-cloud"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-bitbucket-cloud.createpublishbitbucketcloudpullrequestaction",children:(0,r.jsx)(t.code,{children:"createPublishBitbucketCloudPullRequestAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Creates a Bitbucket Cloud Pull Request action."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'function createPublishBitbucketCloudPullRequestAction(options: {\n    integrations: ScmIntegrationRegistry;\n    config: Config;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    repoUrl: string;\n    title: string;\n    description?: string | undefined;\n    targetBranch?: string | undefined;\n    sourceBranch: string;\n    token?: string | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n}, import("@backstage/types").JsonObject>;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ integrations: ",(0,r.jsx)(t.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; config: ",(0,r.jsx)(t.a,{href:"/docs/reference/config.config",children:"Config"}),"; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ repoUrl: string; title: string; description?: string | undefined; targetBranch?: string | undefined; sourceBranch: string; token?: string | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function a(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,d=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:c,type:e,key:u,ref:d,props:i,_owner:o.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(667294);const c={},i=r.createContext(c);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);