/*! For license information please see b716d994.85ab51dd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[34975],{669742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(785893),i=n(511151);const s={id:"plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction()",description:"API reference for createPublishGithubPullRequestAction()"},o=void 0,c={id:"reference/plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction()",description:"API reference for createPublishGithubPullRequestAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction",title:"createPublishGithubPullRequestAction()",description:"API reference for createPublishGithubPullRequestAction()"}},d={},u=[{value:"Parameters",id:"parameters",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-github"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github.createpublishgithubpullrequestaction",children:(0,r.jsx)(t.code,{children:"createPublishGithubPullRequestAction"})})]}),"\n",(0,r.jsx)(t.p,{children:"Creates a Github Pull Request action."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'createPublishGithubPullRequestAction: (options: CreateGithubPullRequestActionOptions) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    title: string;\n    branchName: string;\n    targetBranchName?: string | undefined;\n    description: string;\n    repoUrl: string;\n    draft?: boolean | undefined;\n    targetPath?: string | undefined;\n    sourcePath?: string | undefined;\n    token?: string | undefined;\n    reviewers?: string[] | undefined;\n    teamReviewers?: string[] | undefined;\n    commitMessage?: string | undefined;\n    update?: boolean | undefined;\n    forceFork?: boolean | undefined;\n    gitAuthorName?: string | undefined;\n    gitAuthorEmail?: string | undefined;\n    forceEmptyGitAuthor?: boolean | undefined;\n}, import("@backstage/types").JsonObject>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend-module-github.creategithubpullrequestactionoptions",children:"CreateGithubPullRequestActionOptions"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),'<{ title: string; branchName: string; targetBranchName?: string | undefined; description: string; repoUrl: string; draft?: boolean | undefined; targetPath?: string | undefined; sourcePath?: string | undefined; token?: string | undefined; reviewers?: string[] | undefined; teamReviewers?: string[] | undefined; commitMessage?: string | undefined; update?: boolean | undefined; forceFork?: boolean | undefined; gitAuthorName?: string | undefined; gitAuthorEmail?: string | undefined; forceEmptyGitAuthor?: boolean | undefined; }, import("@backstage/types").',(0,r.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),">"]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},675251:(e,t,n)=>{var r=n(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,a=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:a,props:s,_owner:c.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(667294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);